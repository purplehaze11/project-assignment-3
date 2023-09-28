import HomeComponent from "./components/pages/HomeComponent.vue";
import CartComponent from "./components/pages/CartComponent.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: HomeComponent,
    },
    {
        path: "/cart",
        name: "cart",
        component: CartComponent,
    },
];
