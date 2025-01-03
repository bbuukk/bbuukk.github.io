
// async function getPageContent(route: string): Promise<string> {
// ute
async function getPageContent(route: string) {
  // switch (route) {
  //   case '/': {
  //     const response = import.meta.glob(`${route}/*.*`, {
  //       query: '?raw',
  //       import: 'default'
  //     });
  //     break;
  //   }
  //   case '/google': {
  //     break;
  //   }
  // }

  try {
    // const response = await import(`@/${contentPath}?raw`);
    // const response = await import(`/pages/home.html?raw`);

    // const modules = import.meta.glob('./dir/*.js', { eager: true });
    // const response = await import(`/pages/home.scss?raw`);

    console.log(response.default);
    return response.default;
  } catch (error) {
    // TODO: display error screen
    console.error('Error fetching page content:', error);
    throw new Error('Failed to load page content');
  }
}

export { routes, getPageContent };
