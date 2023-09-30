<template>
    <div>
        <h2>Your Cart</h2>
        <ul class="list-group" v-if="totalInCart > 0">
            <template
                v-for="product in products"
                :product="product"
                :key="product.id"
            >
                <li class="list-group-item" v-if="product.inCart > 0">
                    <ProductInCart :product="product" />
                </li>
            </template>
            <li class="list-group-item"></li>
        </ul>
        <p v-else>You have no product in the cart</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductInCart from "../ProductInCart.vue";

export default {
    name: "CartComponent",
    components: {
        ProductInCart,
    },
    computed: {
        ...mapGetters({
            products: "getProducts",
            totalInCart: "getTotalInCart",
        }),
    },
};
</script>
