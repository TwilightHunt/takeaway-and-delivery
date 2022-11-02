<template>
    <div class="card-secttion_container">
        <div class="card-section__body">
            <img class="card-section__item_img" src="@/assets/card-page/1.jpg">
            <div class="card-section__item">
                <div class="card-section__item__text">
                    <span>Support</span> good food and local business.
                </div>
                <button class="card-section__item__button">Order Now</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardSection'
}
</script>

<style lang="scss">
.card-section__body {
    margin: 44px -76px;
    display: flex;
    justify-content: center;
    column-gap: 22px;
}
.card-section__item {
    flex: 0 1 50%;
    background-image: url('@/assets/card-page/bg.jpg');
    padding: 0 130px 0 60px;
}
.card-section__item_img{
    flex: 0 1 50%;
}
.card-section__item__text {
    font-size: 53px;
    line-height: 114%;
    color: #fff;
    letter-spacing: 1.65px;
    padding: 212px 0 52px 0;
    & span {
        color: #1B9097
    }
}
.card-section__item__button {
    padding: 20px 35px;
    background-color: #fff;
    color: #35B8BE;
    border-radius: 4px;
    font-size: 17px;
    line-height: 118%;
}
</style>