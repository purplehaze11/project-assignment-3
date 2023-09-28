<template>
    <div class="flex-wrap d-flex justify-content-evenly">
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "../ProductCard.vue";

export default {
    name: "HomeComponent",
    components: {
        ProductCard,
    },
    computed: {
        ...mapGetters({
            products: "getProducts",
        }),
        //...mapGetters({
        //    products: "getProducts",
        //}),
    },
    mounted() {
        this.$store.dispatch("FETCH_PRODUCTS");
    },
};
</script>
