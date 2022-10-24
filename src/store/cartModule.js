export const cartModule = {
    state: () => ({
        cart: []
    }),
    mutations: {
        addItem(state, {itemId, quantity}){
            state.cart.push({
                itemId,
                quantity
              })
        }
    }
}