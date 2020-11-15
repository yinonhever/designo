import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./components/pages/Home";
import WebDesign from "./components/pages/WebDesign";
import AppDesign from "./components/pages/AppDesign";
import GraphicDesign from "./components/pages/GraphicDesign";
import About from "./components/pages/About";
import Locations from "./components/pages/Locations";
import Contact from "./components/pages/Contact";

import Page from "./components/layout/Page";
import BaseButton from "./components/UI/BaseButton";
import PortfolioTemplate from "./components/layout/PortfolioTemplate";

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
    ]
})

const app = createApp(App);

app.use(router);

app.component("Page", Page);
app.component("PortfolioTemplate", PortfolioTemplate);
app.component("BaseButton", BaseButton);

app.mount("#app");
