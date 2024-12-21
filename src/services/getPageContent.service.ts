const routes: Record<string, string> = {
  '/': 'pages/home.html',
  '/google': 'pages/google.html',
  default: 'pages/error.html'
};

export default async function getPageContent(route: string): Promise<string> {
  const contentPath = routes[route] || routes['default'];

  try {
    const response = await fetch(`${contentPath}?html`);
    return await response.text();
  } catch (error) {
    // TODO: display error screen
    console.error('Error fetching page content:', error);
    throw new Error('Failed to load page content');
  }
}
