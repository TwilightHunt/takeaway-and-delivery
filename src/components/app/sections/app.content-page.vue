<template>
    <div class="content-page" ref="observer" :style="{backgroundImage: `url(${content.background})`}">
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
    name: 'ContentPage',
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
@use '/src//utils/mixins';

.content-page {
    padding: 50px 0 230px 0;
    background-image: url('/src/assets/content-page/bg.jpg');
    background-size: cover;
    background-position: top;
    transition: all 1s;
    &.show{
        & .content-page__content{
            opacity: 1;
            transform: translateX(0);
        }
        & .content-page__image{
            opacity: 1;
            transform: translateX(0);
        }
    }
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
.content-page__content{
    transition: all 1s;
    transform: translateX(-50%);
    opacity: 0;
}
.content-page__image{
    transition: all 1s;
    transform: translateX(50%);
    opacity: 0;
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