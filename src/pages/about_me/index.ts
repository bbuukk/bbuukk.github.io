import { reloadContent } from '/services/router.service';

import html from '@/pages/about_me/index.html?raw';
import scss from '@/pages/about_me/index.scss?inline';

reloadContent(html, scss);
