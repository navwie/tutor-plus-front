import { createRouter, createWebHistory } from 'vue-router'
import CreateAnnouncement from "./components/announcement/CreateAnnouncement"
import AuthorizationComponent from "./components/auth/AuthorizationComponent"
import RegistrationComponent from "./components/auth/RegistrationComponent"
import NavbarComponent from "./components/header/NavbarComponent"

export default  createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/announcement', component: CreateAnnouncement, alias: '/'},
        { path: '/register', component: RegistrationComponent },
        { path: '/auth', component: AuthorizationComponent },
        { path: '/header', component: NavbarComponent },
    ]
})