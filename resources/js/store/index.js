import { createStore } from "vuex";

export default createStore({
    state: {
        products: [],
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
    },
    actions: {
        async FETCH_PRODUCTS() {
            const response = await axios.get("api/getAllData");
            this.state.products = response.data.products;
        },
    },
});
