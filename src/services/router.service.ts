const routes: Record<string, string> = {
  '/': 'home',
  '/google': 'google',
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

    // const pageContent = await getPageContent(route);

    const mainElement = $('main');
    if (mainElement) {
      mainElement.innerHTML = '';

      const contentPath = routes[route] || routes['default'];

      const htmlRes = await import(`@/pages/${contentPath}/index.html?raw`);
      const htmlString = htmlRes.default;
      //
      const contentElement = document.createElement('div');
      contentElement.innerHTML = htmlString;

      mainElement.appendChild(contentElement);

      window.scrollY = 0;
      window.scrollX = 0;

      const cssRes = await import(`@/pages/${contentPath}/index.scss?raw`);
      const cssString = cssRes.default;

      const styleElement = document.createElement('style');
      styleElement.innerHTML = cssString;

      mainElement.appendChild(styleElement);

      //create custom event for signaling of changing route
      //and fetch all the necessasry stuff and set html and styles when it is fired

      await import(`/pages/${contentPath}/index.ts`);

      hydrateInternalLinks('inLink');
    }
  }
};

// function reloadContent() {
//   const mainElement = $('main');
//   if (mainElement) {
//     mainElement.innerHTML = '';
//
//     const contentElement = document.createElement('div');
//     // contentElement.innerHTML = pageContent;
//
//     // await import('/pages/home.ts');
//
//     mainElement.appendChild(contentElement);
//
//     window.scrollY = 0;
//     window.scrollX = 0;
//
//     hydrateInternalLinks('inLink');
//   }
// }

// TODO: rename, as it is not hydration
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
