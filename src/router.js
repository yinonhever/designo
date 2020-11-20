import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/pages/Home";
import WebDesign from "./components/pages/WebDesign";
import AppDesign from "./components/pages/AppDesign";
import GraphicDesign from "./components/pages/GraphicDesign";
import About from "./components/pages/About";
import Locations from "./components/pages/Locations";
import Contact from "./components/pages/Contact";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/web-design", component: WebDesign },
        { path: "/app-design", component: AppDesign },
        { path: "/graphic-design", component: GraphicDesign },
        { path: "/about", component: About },
        { path: "/locations", component: Locations },
        { path: "/contact", component: Contact }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { left: 0, top: 0 };
    }
});

export default router;