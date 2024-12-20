import getPageContent from './getPageContent.service';

export interface IRouter {
  init: () => void;
  go: (route: string, addToHistory?: boolean) => Promise<void>;
}

const Router: IRouter = {
  init: async () => {
    try {
      await Router.go(location.pathname);
    } catch (err) {
      // TODO: display error screen
      console.error('Error during router initialization:', err);
    }

    window.on('popstate', (event) => {
      Router.go(event.state.route, false);
    });
  },
  go: async (route: string, addToHistory = true): Promise<void> => {
    if (addToHistory) {
      history.pushState({ route }, 'null', route);
    }

    const pageContent = await getPageContent(route);

    const mainElement = $('main');
    if (mainElement) {
      mainElement.innerHTML = '';

      const contentElement = document.createElement('div');
      contentElement.innerHTML = pageContent;

      mainElement.appendChild(contentElement);

      window.scrollY = 0;
      window.scrollX = 0;

      hydrateInternalLinks('inLink');
    }
  }
};

function hydrateInternalLinks(inLinkClass: string) {
  const internalLinks = $$(`a.${inLinkClass}`);

  internalLinks.forEach((e) => {
    const anchorElement = e as HTMLAnchorElement;

    anchorElement.on('click', (event) => {
      event.preventDefault();

      const url = new URL(anchorElement.href).pathname;

      Router.go(url);
    });
  });
}

export default Router;
