import { reloadContent } from '/services/router.service';

import html from '@/pages/works/index.html?raw';
import scss from '@/pages/works/index.scss?inline';

reloadContent(html, scss);
