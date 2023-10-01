<template>
    <div>
        <div class="card d-flex align-items-center" v-if="infoImg">
            <img
                class="card-img-top"
                src="../../../public/frown-svgrepo-com.svg"
                alt=""
            />
            <div class="card-body">
                <h2 class="card-title">You have no item in your cart</h2>
                <p class="card-text">Add an item to cart first.</p>
            </div>
        </div>
        <div class="card d-flex align-items-center" v-else>
            <img
                class="card-img-top"
                src="../../../public/checked-success-svgrepo-com.svg"
                alt=""
            />
            <div class="card-body">
                <h2 class="card-title">Thank you for using Tosa!</h2>
                <p class="card-text">
                    You bought {{ totalItemBought }} items for Rp.
                    {{ totalPriceBought }}.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "CartInformation",
    props: {
        infoImg: {
            type: Boolean,
        },
    },
    computed: {
        ...mapGetters({
            totalItemBought: "getTotalItemBought",
            totalPriceBought: "getTotalPriceBought",
        }),
    },
};
</script>

<style scoped>
.card {
    background-color: #f2fbfc;
}

.card-img-top {
    width: 30%;
    margin: 1rem 0;
}

.card-text {
    text-align: center;
}
</style>
