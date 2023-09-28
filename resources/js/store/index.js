import { createStore } from "vuex";

export default createStore({
    state: {
        products: [],
    },
    getters: {},
    actions: {
        async FETCH_JOBS() {
            const products = await axios.get("api/getAllData");
            this.products = products.data;
        },
    },
});
