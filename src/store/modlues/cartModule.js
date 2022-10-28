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
            if(state.cart.filter(i => i.item !== item)){
                state.cart.push({
                    key: item.id,
                    item,
                    quantity
                })
            }
        }, 
        removeItem(state, itemId) {
            state.cart = state.cart.filter(x => x.key !== itemId);
        }
    }
}