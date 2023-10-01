import HomeComponent from "./components/pages/HomeComponent.vue";
import CartComponent from "./components/pages/CartComponent.vue";
import ProductComponent from "./components/pages/ProductComponent.vue";

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
    {
        path: "/:id",
        name: "product",
        component: ProductComponent,
        props: true,
    },
];
