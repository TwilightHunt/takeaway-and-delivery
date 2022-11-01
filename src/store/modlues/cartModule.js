export const cartModule = {
    state: () => ({
        cart: []
    }),
    getters: {
        cartLength(state){
            return state.cart.length;
        },
        getSum(state){
            let sum = 0;
            state.cart.forEach(item => {
                sum += item.price * item.quantity;
            });
            return sum.toPrecision(4);
        },
        getQuantity: (state) => (itemId) => {
                return state.cart.find(x => x.key === itemId).quantity;
        }
    },
    mutations: {
        addItem(state, {item, quantity}){
            if(state.cart.filter(i => i.item !== item)){
                state.cart.push({
                    key: item.id,
                    description: item.description,
                    image: item.image,
                    title: item.title,
                    price: item.price,
                    quantity
                })
            }
        }, 
        removeItem(state, itemId) {
            state.cart = state.cart.filter(x => x.key !== itemId);
        },
        changeQuantity(state, {itemId, newValue}){
            state.cart.find(x => x.key === itemId).quantity = newValue;       
        }
    }
}