import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/header.vue";

const app = createApp(App).mount("#app");
//global tanımlama
// const app = createApp(App);
// app.component("app-header", Header);
// app.mount("#app");
