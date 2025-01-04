const routes: Record<string, string> = {
  '/': 'home',
  '/about-me': 'about_me',
  '/works': 'works',
  '/connect': 'connect',
  default: 'error'
};

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

    const contentPath = routes[route] || routes['default'];
    await import(`/pages/${contentPath}/index.ts`);
  }
};

function reloadContent(html: string, css: string) {
  const mainElement = $('main');
  if (mainElement) {
    mainElement.innerHTML = '';

    const contentElement = document.createElement('div');
    contentElement.innerHTML = html;
    mainElement.appendChild(contentElement);

    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    mainElement.appendChild(styleElement);

    // window.scrollY = 0;
    // window.scrollX = 0;

    hydrateInternalLinks('inLink');
  }

  //TODO: introduce handling if main elem is not found
}

// TODO: rename, as it is not hydration
function hydrateInternalLinks(inLinkClass: string) {
  const internalLinks = $$(`a.${inLinkClass}`);

  internalLinks.forEach((e) => {
    const anchorElement = e as HTMLAnchorElement;

    anchorElement.on('click', (event) => {
      event.preventDefault();

      //TODO: create custom event for signaling of changing route to do some things asap

      const url = new URL(anchorElement.href).pathname;

      Router.go(url);
    });
  });
}

export { reloadContent, Router };
