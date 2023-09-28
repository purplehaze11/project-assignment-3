import HomeComponent from "./components/HomeComponent.vue";
import CartComponent from "./components/CartComponent.vue";

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
