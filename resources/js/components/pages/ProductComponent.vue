<template>
    <div>
        <template
            v-for="product in products"
            :key="product.id"
            :product="product"
        >
            <div
                id="product-template"
                class="d-flex justify-content-evenly"
                v-if="product.id == id"
            >
                <div class="card product-content">
                    <img class="card-img-top" :src="product.imgUrl" alt="" />
                    <div class="card-body">
                        <h2 class="card-title">{{ product.name }}</h2>
                        <p class="card-text">Price: Rp. {{ product.price }}</p>
                        <p class="card-text">Stock: {{ product.stock }}</p>
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
    margin: 2rem 0;
}

.product-content {
    max-width: 40%;
}

img {
    width: 100%;
}

.card {
    background-color: #f2fbfc;
}
</style>
