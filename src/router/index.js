import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import About from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
