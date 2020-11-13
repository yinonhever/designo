import { createApp } from "vue";
import App from "./App.vue";
import Page from "./components/layout/Page";
import BaseButton from "./components/UI/BaseButton";
import PortfolioTemplate from "./components/layout/PortfolioTemplate";
import PortfolioPageLink from "./components/UI/PortfolioPageLink";
import Logo from "./components/UI/Logo";

const app = createApp(App);

app.component("Page", Page);
app.component("BaseButton", BaseButton);
app.component("PortfolioTemplate", PortfolioTemplate);
app.component("PortfolioPageLink", PortfolioPageLink);
app.component("Logo", Logo);

app.mount("#app");
