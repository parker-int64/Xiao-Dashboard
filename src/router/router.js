import { createRouter, createWebHistory } from "vue-router";
import ViewPage from '@/views/ViewPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: ViewPage,
    },

    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },

    {
      path: '/403',
      name: '403',
      component: () => import('../views/403.vue')
    },

    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }, 


    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsPage.vue')
    }
  ],
});

export default router;