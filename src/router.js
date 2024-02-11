import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/AppHome.vue';
import AboutUs from './pages/AppAbout.vue';
import EventList from './pages/EventList.vue';
import EventDetail from './pages/EventDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/eventi',
            name: 'events',
            component: EventList
        },
        {
            path: '/eventi/:id',
            name: 'event-detail',
            component: EventDetail,
            props: true
        }
    ]
});

export { router };