<template>
    <div>
        <template
            v-for="product in products"
            :key="product.id"
            :product="product"
        >
            <div class="d-flex justify-content-around" v-if="product.id == id">
                <div class="product-content">
                    <img :src="product.imgUrl" alt="" />
                    <h2>{{ product.name }}</h2>
                    <p>{{ product.price }}</p>
                    <p>{{ product.stock }}</p>
                    <ActionButton class="btn-primary" text="Add to cart" />
                </div>
                <div class="product-content">
                    <h3>{{ product.name }}</h3>
                    <p>{{ product.description }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ActionButton from "../ActionButton.vue";

export default {
    name: "ProductComponent",
    components: {
        ActionButton,
    },
    props: ["id"],
    computed: {
        ...mapGetters({
            products: "getProducts",
        }),
    },
};
</script>

<style scoped>
.product-content {
    max-width: 40%;
}
</style>
