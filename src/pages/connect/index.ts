import { reloadContent } from '/services/router.service';

import html from '@/pages/connect/index.html?raw';
import scss from '@/pages/connect/index.scss?inline';

reloadContent(html, scss);
