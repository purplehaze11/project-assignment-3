<template>
    <div>
        <template
            v-for="product in products"
            :key="product.id"
            :product="product"
        >
            <div
                id="product-template"
                class="d-flex justify-content-around"
                v-if="product.id == id"
            >
                <div class="product-content">
                    <img :src="product.imgUrl" alt="" />
                    <h2>{{ product.name }}</h2>
                    <p>Price: Rp. {{ product.price }}</p>
                    <p>Stock: {{ product.stock }}</p>
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
    data() {
        return {
            productId: this.id, //put the props data into data first
        };
    },
    components: {
        ActionButton,
    },
    props: ["id"],
    computed: {
        ...mapGetters({
            products: "getProducts",
        }),
    },
    methods: {
        addToCart() {
            this.$store.dispatch("addToCart", this.productId);
        },
    },
};
</script>

<style scoped>
#product-template {
    margin-top: 2rem;
}

.product-content {
    max-width: 40%;
}
</style>
