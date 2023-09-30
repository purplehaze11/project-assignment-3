<template>
    <div class="flex-row d-flex justify-content-between align-items-center">
        <p>{{ product.name }}</p>
        <div class="flex-row d-flex">
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
            <ActionButton class="btn-danger" text="Clear" />
        </div>
        <p>Rp. {{ product.price }}</p>
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
</style>
