import { createRouter, createWebHistory } from 'vue-router';
    import Home from '../views/Home.vue';
    import Karaoke from '../views/Karaoke.vue';
    import LrcConverter from '../views/LrcConverter.vue';

    const routes = [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/karaoke',
        name: 'Karaoke',
        component: Karaoke,
      },
      {
        path: '/lrc-converter',
        name: 'LrcConverter',
        component: LrcConverter,
      },
    ];

    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    export default router;
