import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from "./components/LandingPage"
import About from "./components/About"
import  Signup from "./components/Signup"
import Login from "./components/Login"


Vue.use(VueRouter)

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
    }
]