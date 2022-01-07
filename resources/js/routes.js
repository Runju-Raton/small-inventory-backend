
import Login from './components/auth/Login.vue';
import Registration from './components/auth/Registration.vue';
import PageNotFound from './components/PageNotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes =[
    {
        path: '/',
        component: Login
    },
    {
        path: '/registration',
        component: Registration
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: PageNotFound 
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes: routes,
    mode : 'history'
}) 

export default router;