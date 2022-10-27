export const cartModule = {
    state: () => ({
        cart: []
    }),
    getters: {
        cartLength(state){
            return state.cart.length;
        }
    },
    mutations: {
        addItem(state, {item, quantity}){
            state.cart.push({
                item,
                quantity
              })
        }
    }
}