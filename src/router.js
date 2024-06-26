import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue'

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'blog',
            component: ProjectList
        }
    ]
});

export { router };