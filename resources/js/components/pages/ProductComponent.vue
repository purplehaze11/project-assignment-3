<template>
    <div>
        <template
            v-for="product in products"
            :key="product.id"
            :product="product"
        >
            <div v-if="product.id == id">
                <p>product page {{ id }}</p>
                <h2>{{ product.name }}</h2>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ProductComponent",
    props: ["id"],
    computed: {
        ...mapGetters({
            products: "getProducts",
        }),
    },
};
</script>
