import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ui from "@nuxt/ui/vue-plugin";
import "./style.css";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

createApp(App).use(router).use(ui).mount("#app");
