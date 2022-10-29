<template>
    <div>
        <div class="cart">
            <div class="cart__body">
                <h3 class="cart__title">Cart</h3>
                <div class="close" @click="$emit('changeCartVisibility')"></div>
                <div class="cart__items" v-if="$store.getters.cartLength > 0" >
                    <CartItem
                    v-for="item in cartItems.cart"
                    :cartItem="item"
                    />
                </div>
                <div class="message" v-else>Your cart is empty. <span @click="$emit('changeCartVisibility')">Start shopping</span></div>
                <div class="cart__summary">
                    <div class="cart__price-line"> 
                        <p>Price:</p>
                        <p>$ {{ $store.getters.getSum }} USD </p>
                    </div>
                    <button class="cart__button">Order</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from './app.cart-item.vue'
import { mapState } from 'vuex';
export default {
    data(){
        return {
            sum: 0
        }
    },
    components: {
        CartItem
    },
    computed: 
        mapState({
          cartItems: "cart"  
        }), 
}
</script>

<style lang="scss" scoped>
@use '@/utils/mixins';
@keyframes appear {
    0% {
        margin: 350px 500px;
        opacity: 0.5;
    }
    100% {
        margin: 70px 100px;
        opacity: 1;
    }
}
.cart{
    position: fixed;
    z-index: 15;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
}
.cart__body{
    margin: 70px 100px;
    background-color: #fff;
    padding: 40px 60px;
    position: relative;
    animation: appear 0.2s forwards;
}
.cart__title {
    font-size: 60px;
    line-height: 100%;
    letter-spacing: 1.8px;
    color: #08090A;
    margin-bottom: 20px;
}
.cart__items {
    max-height: 55vh;
    overflow-y: auto;
}
.cart__summary {
    display: flex;
    flex-direction: column;
}
.cart__price-line {
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    margin-bottom: 20px;
}
.cart__button {
    @include mixins.button();
    width: 200px;
    right: 0;
    align-self: flex-end;
}
.message{
    margin: 25vh auto;
    text-align: center;
    font-size: 30px;
    span{
        text-decoration: underline;
        color: #35B8BE;
        &:hover {
            cursor: pointer
        }
    }
}
.close{
    @include mixins.cross(40px, 3px);
    top: 50px;
    right: 70px;
}
</style>