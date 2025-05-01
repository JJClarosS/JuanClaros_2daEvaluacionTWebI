import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Starships from '../views/Starships.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/starships', component: Starships },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;