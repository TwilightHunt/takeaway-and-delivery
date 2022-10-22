<template>
    <div class="content-page" :style="{backgroundImage: `url(${content.background})`}">
        <div :class="['content-page_container', content.reversedOrientation ? '_reversed-orientation' : null]">
            <div class="content-page__content">
                <h2 class="content-page__content__title">{{ content.title }}</h2>
                <div class="content-page__content__text">{{ content.text }}</div>
                <button class="content-page__content__button">{{ content.buttonText }}</button>
            </div>
            <img :src=content.image alt="content" class="content-page__image">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            title: String,
            text: String,
            buttonText: String,
            image: String,
            reversedOrientation: Boolean,
            background: String,
            required: true
        }
    }
}
</script>

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
    &._reversed-orientation > .content-page__content {
        order: 2;
        justify-content: flex-start;
    }
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