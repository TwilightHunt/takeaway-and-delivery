<template>
    <div class="menu">
        <div class="menu_container">
            <div class="menu__head">
                <h2 class="menu__title">Browse our menu</h2>
                <div class="menu__text">Use our menu to place an order online, or <span>phone</span> our store <br> to place a pickup order. Fast and fresh food.</div>
                <div class="menu___buttons">
                    <button class="menu__button _active">Burgers</button>
                    <button class="menu__button">Sides</button>
                    <button class="menu__button">Drinks</button>
                </div>
            </div>
            <div class="menu__body">
                <div class="menu__card" v-for="good in goods.burgers">
                    <img :src=good.image alt="dreams" class="menu__card__image">
                    <div class="menu__card__body">
                        <div class="menu__card__top">
                            <div class="menu__card__name"> {{ good.title }} </div> 
                            <div class="menu__card__price">$ {{ good.price }} USD</div> 
                        </div>
                        <div class="menu__card__description">{{ good.description }}</div>
                        <div class="menu__card__bottom">
                            <input type="number" class="menu__card__amount" value="1" min="1">
                            <button class="menu__card__button">Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="menu__order-button">See Full Menu</button>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        goods: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
@use '@/utils/mixins';
.menu {
    background-image: url('@/assets/menu/bg.jpg');
    background-position: top;
    background-size: cover;
    padding: 140px 0;
}
.menu_container {
   text-align: center;
}
.menu__title {
    margin: 0 0 26px 0;
}
.menu__text {
    font-size: 16px;
    line-height: 169%;
    letter-spacing: 0.36px;
    color: #546285;
    margin: 0 0 40px 0;
    @include mixins.highlighted-span();
}
.menu__button {
    font-size: 14px;
    line-height: 143%; 
    padding: 16px 46px;
    background-color: rgba(#000, 0);
    border: 1px solid #61728333;
    border-radius: 6px;
    &:not(:last-child){
        margin-right: 30px
    }
    &._active{
        border: none;
        color: #fff;
        background-color: #35B8BE;
    }
}
.menu__order-button {
    margin: 44px 0 0 0;
    @include mixins.button();
}
.menu__body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));
    gap: 20px;
    margin: 40px 10px 20px 10px;
}
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