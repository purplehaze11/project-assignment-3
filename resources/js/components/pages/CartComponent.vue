<template>
    <div id="cart-template">
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
            <li class="list-group-item">
                <div id="total-price" class="d-flex justify-content-end">
                    <p>Total: {{ totalPrice }}</p>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex justify-content-center">
                    <ActionButton
                        @click="buyProducts"
                        class="btn-success"
                        text="Buy"
                    />
                </div>
            </li>
        </ul>
        <CartInformation v-else-if="isAlreadyBought == true" />
        <CartInformation v-else :infoImg="true" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductInCart from "../ProductInCart.vue";
import CartInformation from "../CartInformation.vue";
import ActionButton from "../ActionButton.vue";

export default {
    name: "CartComponent",
    components: {
        ProductInCart,
        CartInformation,
        ActionButton,
    },
    computed: {
        ...mapGetters({
            products: "getProducts",
            totalInCart: "getTotalInCart",
            totalPrice: "getTotalPrice",
            isAlreadyBought: "getIsAlreadyBought",
        }),
    },
    methods: {
        buyProducts() {
            this.$store.dispatch("buyProducts");
        },
    },
};
</script>

<style scoped>
#cart-template {
    margin: 2rem auto;
    width: 80%;
}

#total-price {
    margin-right: 5%;
}
</style>
