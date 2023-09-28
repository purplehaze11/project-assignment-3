<template>
    <div>home</div>
</template>

<script>
export default {
    name: "HomeComponent",
    mounted() {
        this.$store.dispatch("FETCH_JOBS");
    },
};
</script>
