<template>
    <div class="card" style="width: 18rem">
        <img :src="product.imgUrl" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Price: Rp. {{ product.price }}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="m-0 card-text">Stock: {{ product.stock }}</p>
                <ActionButton class="btn-primary" text="Add to cart" />
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
    name: "ProductCard",
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    components: {
        ActionButton,
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
