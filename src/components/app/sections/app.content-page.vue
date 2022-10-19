<template>
    <div class="content-page">
        <div class="content-page_container">
            <div class="content-page__content">
                <h2 class="content-page__content__title">The home of fresh products</h2>
                <div class="content-page__content__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
                <button class="content-page__content__button">Learn about us</button>
            </div>
            <img src="@/assets/content-page/content-img.png" alt="content" class="content-page__image">
        </div>
    </div>
</template>

<style lang="scss">
@use '/src//utils/mixins';

.content-page {
    padding: 50px 0 230px 0;
    background-image: url('/src/assets/content-page/bg.jpg');
    background-size: cover;
    background-position: top;
}
.content-page_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content-page__content__title {
    margin: 0 0 29px 0;
    max-width: 373px;
}
.content-page__content__text {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.36px;
    color: #546285;
    margin: 0 0 57px 0;
    max-width: 578px;
}
.content-page__content__button {
    @include mixins.button()
}
</style>