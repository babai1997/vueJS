import { createRouter, createWebHistory } from 'vue-router';

import SiteList from './SiteList.vue';
import AddSite from './AddSite.vue';
import NotFound from './NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/sites' },
    {
      name: 'SiteList',
      path: '/sites',
      components: { default: SiteList},
    },
    {
      path: '/createSite',
      components: {
        default: AddSite,
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
});


export default router;