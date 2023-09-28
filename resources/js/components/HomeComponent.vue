<template>
    <div>
        <ProductCard
            :products="products"
            v-for="product in products"
            :key="product.id"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "./ProductCard.vue";

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
