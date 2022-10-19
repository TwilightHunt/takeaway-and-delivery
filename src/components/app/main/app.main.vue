<template>
<div class="main-screen">
    <div class="main-screen_container">
        <div class="main-screen__content">
            <h1 class="main-screen__title">Beautiful food & takeaway, <span>delivered</span> to your door.</h1>
            <div class="main-screen__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
            <button class="main-screen__button">Place an Order</button>
            <div class="main-screen__trustpilot">
                <img src="@/assets/main/trustpilot.png" class="main-screen__trustpilot__title">
                <div class="main-screen__trustpilot__text"><span>4.8 out of 5</span> based on 2000+ reviews</div>
            </div>
        </div>
        <img src="@/assets/main/Frame.png" alt="frame" class="main-screen__image">
    </div>
</div>
</template>

<style lang="scss">
@use '/src/utils/mixins';

.main-screen{
    padding: 195px 0 140px 0;
    background-image: url('@/assets/main/background.jpg');
    background-size: cover;
    background-position: bottom;
}
.main-screen_container{
    display: flex;
    align-items: center;
}
@keyframes move-right{
    100%{
        transform: translate(0);
        opacity: 1;
    }
    0%{
        opacity: 0;
        transform: translate(-100%, 0);
    }
}
@keyframes move-left{
    100%{
        transform: translate(0);
        opacity: 1;
    }
    0%{
        opacity: 0;
        transform: translate(100%, 0);
    }
}
.main-screen__content{
   animation: move-right 1s forwards;
}
.main-screen__title{
    font-size: 60px;
    line-height: 100%;
    letter-spacing: 1.8px;
    margin: 0 0 27px 0;
    @include mixins.highlighted-span()
}
.main-screen__text{
    margin: 0 0 57px 0;
    font-size: 18px;
    line-height: 134%;
    letter-spacing: 0.36px;
    color: #546285;
    max-width: 540px;
}
.main-screen__trustpilot__title{
    margin: 0 0 6px 0;
}
.main-screen__trustpilot__text{
    font-size: 16px;
    line-height: 125%;
    color: #08090A;
    @include mixins.highlighted-span()
}
.main-screen__button{
    @include mixins.button();
    margin: 0 0 30px 0;
}
.main-screen__image{
    animation: move-left 1s forwards;
}
</style>