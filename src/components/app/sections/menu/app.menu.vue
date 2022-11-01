<template>
    <div class="menu" id="menu">
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
            <div class="menu__body" ref="observer">
                <MenuItem 
                v-for="product in products"
                :product="product"
                />
            </div>
            <button class="menu__order-button">See Full Menu</button>
            <div>{{ $store.cart }}</div>
        </div>
    </div>
</template>

<script>
import MenuItem from './menu-item.vue';
export default{
    props: {
        products: {
            type: Array,
            required: true
        }
    }, 
    components: {
        MenuItem
    },
    mounted(){
        
        let options = {
            rootMargin: '5px',
            threshold: 0.5
        }
        let callback = function(entries, observer){
            if(entries[0].isIntersecting) {
                entries[0].target.classList.add('show')
            } else {
                entries[0].target.classList.remove('show')
            }
        }

        let observer = new IntersectionObserver(callback, options)
        observer.observe(this.$refs.observer)
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
    &.show{
        .menu__card{
            opacity: 1;
            transform: translateX(0);
        }
    }
}
</style>