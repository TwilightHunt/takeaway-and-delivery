<template>
    <div class="cart__item">    
        <div class="cart__item__info">
            <img :src="cartItem.item.image" alt="" class="cart__item__image">
            <div>
                <h5 class="cart__item__title">{{cartItem.item.title}}</h5>
                <div class="cart__item__decription">{{cartItem.item.description}}</div>   
            </div>    
        </div>
        <input type="number" class="cart__item__quantity" max="99" min="1" :value="cartItem.quantity">
        <div class="cart__item__price">$ {{ cartItem.item.price * cartItem.quantity}} USD</div>
    </div>
</template>

<script>
export default {
    props: {
        cartItem: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.cart__item {
    display: flex;
    padding: 20px 5px;
    justify-content: space-between;
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
}
.cart__item__price {
}
</style>