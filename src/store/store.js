import { createStore } from "vuex";
import { cartModule } from "./modlues/cartModule";
import { menuModule } from "./modlues/menuModule"

export default createStore({
    modules: {
        cart: cartModule,
        menu: menuModule
    }
})