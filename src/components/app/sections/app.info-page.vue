<template>
    <div class="info-page">
        <div class="info-page_container">
            <h2 class="info-page__title">How it works.</h2>
            <div class="info-page__body" ref="observer">
                <div class="info-page__item">
                    <img src="@/assets/info-page/1.png" alt="" class="info-page__item__image">
                    <h5 class="info-page__item__title">Adapt your menu items</h5>
                    <div class="info-page__item__text">Easily adapt your menu using the webflow CMS and allow <br> customers to browse your items.</div>
                </div>
                <div class="info-page__item">
                    <img src="@/assets/info-page/2.png" alt="" class="info-page__item__image">
                    <h5 class="info-page__item__title">Accept online orders & takeout</h5>
                    <div class="info-page__item__text">Let your customers order and pay <br> via the powerful ecommerce system, <br> or simple let them call your store.</div>
                </div>
                <div class="info-page__item">
                    <img src="@/assets/info-page/3.png" alt="" class="info-page__item__image">
                    <h5 class="info-page__item__title">Manage delivery or takeout</h5>
                    <div class="info-page__item__text">Manage your own logistics and <br> take orders simply through the ecommerce system.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'InfoPage',
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
.info-page {
    padding: 120px 0;
}
.info-page__title {
    text-align: center;
}
.info-page__body {
    display: flex;
    margin: 66px 0 0 0;
    column-gap: 100px;
    &.show{
        & .info-page__item{
            transform: translateX(0);
            opacity: 1;
        }   
    }
}
.info-page__item {
    text-align: center;
    transform: translateX(-100%);
    transition: all 0.8s;
    opacity: 0;
    &:nth-child(2){
        transition-delay: 200ms;
    }
    &:nth-child(3){
        transition-delay: 400ms;
    }
}
.info-page__item__image {
    margin: 0 0 48px 0;
}
.info-page__item__title {
    margin: 0 0 15px 0;
    font-size: 1.25rem;
    line-height: 110%;
    letter-spacing: 0.66px;
    color: #08090A;
}
.info-page__item__text {
    font-size: 1.125rem;
    line-height: 150%;
    letter-spacing: 0.36px;
    color: #546285;
}
</style>