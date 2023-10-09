import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import About from "./../components/About.vue"
import Signup from "./../components/Signup.vue"
import Login from "./../components/Login.vue"
import Register from "./../components/Register.vue"
import Students from "./../components/Students.vue"
import Classrooms from "./../components/Classrooms.vue"
import Courses from "./../components/Courses.vue"
import Department from "./../components/Department.vue"
import Hostels from "./../components/Hostels.vue"
import Lecturers from "./../components/Lecturers.vue"



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
    },
    {
        path: '/students',
        name: 'students',
        component: Students,
    },
    {
        path: '/classrooms',
        name: 'classrooms',
        component: Classrooms,
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses,
    },
    {
        path: '/department',
        name: 'department',
        component: Department,
    },
    {
        path: '/hostels',
        name: 'hostels',
        component: Hostels,
    },
    {
        path: '/lecturers',
        name: 'lecturers',
        component: Lecturers,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router