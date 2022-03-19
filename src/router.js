import { createRouter, createWebHistory} from 'vue-router'
import CreateAnnouncement from "./components/announcement/CreateAnnouncement"
import AuthorizationComponent from "./components/auth/AuthorizationComponent"
import RegistrationComponent from "./components/auth/RegistrationComponent"
import AllAnnouncements from "@/components/announcement/AllAnnouncements";

export default  createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/announcements', component: AllAnnouncements, alias: '/'},
        { path: '/createAnnouncement', component: CreateAnnouncement},
        { path: '/register', component: RegistrationComponent },
        { path: '/login', component: AuthorizationComponent }
    ]
})