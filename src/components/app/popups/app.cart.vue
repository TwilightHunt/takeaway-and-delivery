<template>
    <div>
        <div class="cart">
            <div class="cart__body">
                <h3 class="cart__title">Cart</h3>
                <div class="close" @click="$emit('changeCartVisibility')"></div>
                <!-- <div class="cart__items" v-for="item in $store.state.cart">
                    <div>{{ item.key }}</div>
                </div> -->
                <div class="cart__summary">
                    <div class="cart__price-line"> 
                        <p>Price:</p>
                        <p>12 $</p>
                    </div>
                    <button class="cart__button">Заказать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
@use '@/utils/mixins';
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
}
.cart__title {
    font-size: 60px;
    line-height: 100%;
    letter-spacing: 1.8px;
    color: #08090A;
    margin-bottom: 20px;
}
.cart__items {
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
.close {
	position: absolute;
	top: 50px;
	right: 70px;
	width: 40px;
	height: 40px;
	opacity: 0.2;
	cursor: pointer;
    transition: opacity ease 0.5s;
	&:hover {
		opacity: 1;
	}
}
.close::before,
.close::after {
	content: '';
	position: absolute;
	top: 50%;
	display: block;
	width: 40px;
	height: 3px;
	background: #000;
}
.close::before {
	transform: rotate(45deg);
}
.close::after {
	transform: rotate(-45deg);
}
</style>