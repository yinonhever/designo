import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import Page from "./components/layout/Page";
import PortfolioTemplate from "./components/layout/PortfolioTemplate";
import BaseButton from "./components/UI/BaseButton";

const app = createApp(App);

app.use(router);

app.component("Page", Page);
app.component("PortfolioTemplate", PortfolioTemplate);
app.component("BaseButton", BaseButton);

app.mount("#app");
