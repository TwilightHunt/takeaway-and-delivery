import { createStore } from "vuex";
import { cartModule } from "./cartModule";

export default createStore({
    state: {
        
    },
    modules: {
        cart: cartModule
    }
})