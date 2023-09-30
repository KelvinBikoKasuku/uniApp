import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import About from "./../components/About.vue"
import Signup from "./../components/Signup.vue"
import Login from "./../components/Login.vue"
import Register from "./../components/Register.vue"



const routes = [
    {
        path: '/',
        name: 'landingpage',
        component: LandingPage,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router