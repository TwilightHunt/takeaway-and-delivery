<template>
    <div class="menu__card">
        <img :src=product.image alt="dreams" class="menu__card__image">
        <div class="menu__card__body">
            <div class="menu__card__top">
                <div class="menu__card__name"> {{ product.title }} </div> 
                <div class="menu__card__price">$ {{ product.price }} USD</div> 
            </div>
            <div class="menu__card__description">{{ product.description }}</div>
            <div class="menu__card__bottom">
                <input type="number" class="menu__card__amount" min="1" max="99" v-model="amount">
                <button class="menu__card__button" @click="$store.commit({type:'addItem', itemId: product.id, quantity: amount})">Add to card</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            amount: 1
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        logAmount(){
            console.log(this.amount)
        }
    }
}
</script>

<style>
.menu__card {
    padding: 40px 26px;
    background-color: #fff;
    display: flex;
    border: 1px solid rgba(53, 184, 190, 0.15);
    border-radius: 6px;
}
.menu__card__image {
    margin: 0 30px 0 0;
}
.menu__card__body {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   row-gap: 7px;
}
.menu__card__top {
    display: flex;
    justify-content: space-between;
}
.menu__card__name {
    font-size: 18px;
    line-height: 111%;
    letter-spacing: 0.6px;
    color: #08090A;
}
.menu__card__price {
    font-size: 15px;
    line-height: 133%;
    color: #35B8BE;
}
.menu__card__description {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.32px;
    color: #546285;
    text-align: left;
}
.menu__card__bottom {
    display: flex;
}
.menu__card__amount {
    padding: 10px;
    font-size: 16px;
    line-height: 169%;
    letter-spacing: 0.36px;
    text-align: center;
    margin: 0 8px 0 0;
    max-width: 60px;
    background: #FAFAFA;
    border: 1px solid #DDDDDD;
    border-radius: 6px;
}
.menu__card__button {
    padding: 10px;
    background-color: #35B8BE;
    border-radius: 6px;
    font-size: 16px;
    line-height: 169%;
    letter-spacing: 0.36px;
}
</style>