import { createWebHistory, createRouter } from "vue-router";
import Converter from "../src/components/converter/Converter";
import Wallet from "../src/components/wallet/Wallet";

const routes = [
  {
    path: "/",
    component: Converter,
    name: "main",
  },
  {
    path: "/wallet",
    component: Wallet,
    name: "wallet",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
