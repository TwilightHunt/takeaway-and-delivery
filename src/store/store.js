import { createStore } from "vuex";
import { cartModule } from "./modlues/cartModule";
import { menuModule } from "./modlues/menuModule"

export default createStore({
    state: {
        
    },
    modules: {
        cart: cartModule,
        menu: menuModule
    }
})