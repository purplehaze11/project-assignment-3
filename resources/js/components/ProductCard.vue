<template>
    <div class="card" style="width: 18rem">
        <router-link :to="productLink">
            <img :src="product.imgUrl" class="card-img-top" alt="..." />
        </router-link>
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Price: Rp. {{ product.price }}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="m-0 card-text">Stock: {{ product.stock }}</p>
                <ActionButton
                    v-if="product.stock != 0"
                    @click="addToCart"
                    class="btn-primary"
                    text="Add to cart"
                />
                <ActionButton
                    v-else
                    class="btn-danger"
                    text="Stock empty"
                    disabled
                />
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
    name: "ProductCard",
    data() {
        return {
            productId: this.product.id, //put the props data into data first
        };
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    components: {
        ActionButton,
    },
    computed: {
        productLink() {
            return `/${this.product.id}`;
        },
    },
    methods: {
        addToCart() {
            this.$store.dispatch("addToCart", this.productId);
        },
    },
};
</script>

<style scoped>
.card {
    border: 1px solid black;
    margin: 2rem 0;
    background-color: #f2fbfc;
}
</style>
