<template>
    <div class="cart__item">    
        <div class="cart__item__info">
            <img :src="cartItem.image" alt="" class="cart__item__image">
            <div>
                <h5 class="cart__item__title">{{cartItem.title}}</h5>
                <div class="cart__item__decription">{{cartItem.description}}</div>   
            </div>    
        </div>
        <input type="number" class="cart__item__quantity" max="99" min="1" :value="cartItem.quantity" @change="changeQuantity($event)">
        <div class="cart__item__price">$ {{ price = (cartItem.price * cartItem.quantity).toPrecision(4) }} USD</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            price: 0
        }
    },
    props: {
        cartItem: {
            type: Object,
            required: true
        }
    }, 
    methods: {
        changeQuantity(e){
            this.$store.commit('changeQuantity', {itemId: this.cartItem.key, newValue: e.target.value})
        }
    }
}
</script>

<style>
.cart__item {
    display: grid;
    padding: 20px 5px;
    grid-template-columns: 3fr 1fr 1fr;
}
.cart__item__image {
    margin-right: 30px;
}
.cart__item__info {
    display: flex;
}
.cart__item__title {
    font-size: 18px;
    line-height: 111%;
    letter-spacing: 0.6px;
    color: #08090A;
}
.cart__item__decription {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.32px;
    color: #546285;
    text-align: left;
}
.cart__item__quantity {
    max-width: 60px;
    max-height: 50px;
    padding: 10px;
    font-size: 16px;
    line-height: 169%;
    letter-spacing: 0.36px;
    text-align: center;
    margin: 0 8px 0 0;
    background: #FAFAFA;
    border: 1px solid #DDDDDD;
    border-radius: 6px;
    justify-self: center;
}
.cart__item__price {
    text-align: right;
}
</style>