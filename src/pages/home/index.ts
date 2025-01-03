import { reloadContent } from '/services/router.service';

import html from '@/pages/home/index.html?raw';
import scss from '@/pages/home/index.scss?inline';

reloadContent(html, scss);
