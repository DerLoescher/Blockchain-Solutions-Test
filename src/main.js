import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
import "./assets/styles.scss";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Donut);
app.mount("#app");
