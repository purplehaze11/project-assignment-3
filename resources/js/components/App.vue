<template>
    <div>
        <TheNavbar />
        <router-view></router-view>
    </div>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";

export default {
    name: "App",
    components: {
        TheNavbar,
    },
    mounted() {
        this.$store.dispatch("FETCH_PRODUCTS");
    },
};
</script>
