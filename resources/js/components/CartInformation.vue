<template>
    <div>
        <div v-if="infoImg">
            <img src="../../../public/frown-svgrepo-com.svg" alt="" />
            <h2>You have no item in your cart</h2>
            <p>Add an item to cart first</p>
        </div>
        <div v-else>
            <img src="../../../public/checked-success-svgrepo-com.svg" alt="" />
            <h2>Thank you for using Tosa!</h2>
            <p>
                You bought {{ totalItemBought }} items for Rp.
                {{ totalPriceBought }}.
            </p>
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
