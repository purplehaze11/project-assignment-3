<template>
    <div class="flex-row d-flex justify-content-between align-items-center">
        <div class="list-section name-price">
            <p>{{ product.name }}</p>
        </div>
        <div class="flex-row list-section d-flex justify-content-center">
            <ActionButton
                @click="reduceProductInCart"
                class="btn-secondary"
                text="-"
            />
            <div
                id="numbersOfProduct"
                class="d-flex align-items-center justify-content-center"
            >
                <p>{{ product.inCart }}</p>
            </div>
            <ActionButton
                @click="clearProductInCart"
                class="btn-danger"
                text="Clear"
            />
        </div>
        <div class="list-section name-price d-flex justify-content-end">
            <p>Rp. {{ product.price }}</p>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
    name: "ProductInCart",
    data() {
        return {
            productId: this.product.id, //put the props data into data first
        };
    },
    props: {
        product: {
            type: Object,
        },
    },
    components: {
        ActionButton,
    },
    methods: {
        reduceProductInCart() {
            this.$store.dispatch("reduceProductInCart", this.productId);
        },
        clearProductInCart() {
            this.$store.dispatch("clearProductInCart", this.productId);
        },
    },
};
</script>

<style scoped>
p {
    margin: 0;
}

#numbersOfProduct {
    width: 2rem;
}

.list-section {
    width: 30%;
}

.name-price {
    margin: 0 5%;
}
</style>
