import { createStore } from "vuex";

export default createStore({
    state: {
        products: [],
        totalInCart: 0,
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        getTotalInCart(state) {
            return state.totalInCart;
        },
    },
    mutations: {
        addToCart(state, payload) {
            for (const product of state.products) {
                if (product.id == payload) {
                    product.inCart++;
                    product.stock--;
                    state.totalInCart++;
                }
            }
        },
    },
    actions: {
        async FETCH_PRODUCTS() {
            const response = await axios.get("api/getAllData");
            this.state.products = response.data.products;
        },
        addToCart(context, payload) {
            context.commit("addToCart", payload);
        },
    },
});
