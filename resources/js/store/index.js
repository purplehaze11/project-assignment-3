import { createStore } from "vuex";

export default createStore({
    state: {
        products: [],
        totalInCart: 0,
        totalPrice: 0,
        totalItemBought: 0,
        totalPriceBought: 0,
        isAlreadyBought: false,
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        getTotalInCart(state) {
            return state.totalInCart;
        },
        getTotalPrice(state) {
            return state.totalPrice;
        },
        getTotalItemBought(state) {
            return state.totalItemBought;
        },
        getTotalPriceBought(state) {
            return state.totalPriceBought;
        },
        getIsAlreadyBought(state) {
            return state.isAlreadyBought;
        },
    },
    mutations: {
        addToCart(state, payload) {
            for (const product of state.products) {
                if (product.id == payload) {
                    product.inCart++;
                    product.stock--;
                    state.totalInCart++;
                    state.totalPrice += parseInt(
                        product.price.split(".").join(""),
                    );
                    state.isAlreadyBought = false;
                }
            }
        },
        reduceProductInCart(state, payload) {
            for (const product of state.products) {
                if (product.id == payload) {
                    product.inCart--;
                    product.stock++;
                    state.totalInCart--;
                    state.totalPrice -= parseInt(
                        product.price.split(".").join(""),
                    );
                }
            }
        },
        clearProductInCart(state, payload) {
            for (const product of state.products) {
                if (product.id == payload) {
                    state.totalInCart -= product.inCart;
                    product.stock += product.inCart;
                    state.totalPrice -=
                        parseInt(product.price.split(".").join("")) *
                        product.inCart;
                    product.inCart = 0;
                }
            }
        },
        buyProducts(state) {
            state.isAlreadyBought = true;
            state.totalItemBought = state.totalInCart;
            state.totalPriceBought = state.totalPrice;
            state.totalInCart = 0;
            state.totalPrice = 0;
            for (const product of state.products) {
                product.inCart = 0;
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
        reduceProductInCart(context, payload) {
            context.commit("reduceProductInCart", payload);
        },
        clearProductInCart(context, payload) {
            context.commit("clearProductInCart", payload);
        },
        buyProducts(context) {
            context.commit("buyProducts");
        },
    },
});
