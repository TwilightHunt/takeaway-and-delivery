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
        <div class="right">
            <div class="cart__item__price">$ {{ price = (cartItem.price * cartItem.quantity).toPrecision(4) }} USD</div>
            <p href="" class="cart__item__delete"  @click="removeItem">
                <font-awesome-icon icon="fa-xmark"/>
                Delete              
            </p>
        </div>
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
        }, removeItem() {
            this.$store.commit('removeItem', this.cartItem.key);
            this.$store.getters.getBurgers.find(x => x.id === this.cartItem.key).inCart = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '@/utils/mixins';
@keyframes appear {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.cart__item {
    display: grid;
    padding: 20px 5px;
    grid-template-columns: 3fr 1fr 1fr;
    &:hover{
        & .cart__item__delete{
            animation: appear 0.2s forwards;
            display: block;
        }
    }
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
    color: #a0a4a8;
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
.cart__item__delete{
    display: none;
    text-align: right;
    align-self: end;
    margin-bottom: 30px;
    color: #a0a4a8;
    transition: color 0.3s;
    &:hover{
        color: #d1150e;
        cursor: pointer;
    }
}
.right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}
</style>