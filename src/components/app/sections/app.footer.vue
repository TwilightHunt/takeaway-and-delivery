<template>
    <footer class="footer">
        <div class="footer_container">
            <div class="top-footer">
                <div class="top-footer__side">
                    <img src="@/assets/Footer/logo.svg" class="top-footer__logo">
                    <div class="top-footer__text">Takeaway & Delivery template for small - medium businesses.</div>
                </div>
                <nav class="top-footer__nav">             
                    <ul class="top-footer__nav__column">
                        <li><h6 class="top-footer__nav__title">COMPANY</h6></li>
                        <li><a href="" class="top-footer__nav__link">Home</a></li>
                        <li><a href="" class="top-footer__nav__link">Order</a></li>
                        <li><a href="" class="top-footer__nav__link">FAQ</a></li>
                        <li><a href="" class="top-footer__nav__link">Contact</a></li>
                    </ul>               
                    <ul class="top-footer__nav__column">
                        <li><h6 class="top-footer__nav__title">TEMPLATE</h6></li>
                        <li><a href="" class="top-footer__nav__link">Style Guide</a></li>
                        <li><a href="" class="top-footer__nav__link">Changelog</a></li>
                        <li><a href="" class="top-footer__nav__link">Licence</a></li>
                        <li><a href="" class="top-footer__nav__link">Webflow University</a></li>
                    </ul>   
                    <ul class="top-footer__nav__column">
                        <li><h6 class="top-footer__nav__title">FLOWBASE</h6></li>
                        <li><a href="" class="top-footer__nav__link">More Cloneables</a></li>
                    </ul>
                </nav>
            </div>
            <hr>
            <div class="fotter__info">
                <div class="footer__credits">Built by <span>Flowbase</span> · Powered by <span>Webflow</span></div>
                <div class="footer__socials">
                    <a href="" class="footer__social"><img src="@/assets/Footer/inst.svg" alt=""></a>
                    <a href="" class="footer__social"><img src="@/assets/Footer/twitter.svg" alt=""></a>
                    <a href="" class="footer__social"><img src="@/assets/Footer/youtube.svg" alt=""></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default{
    name: 'Footer'
}
</script>

<style lang="scss">
.footer {
    background-image: url('@/assets/Footer/bg.jpg');
    background-size: cover;
    background-position: bottom;
    hr {
        background: rgba(126, 130, 143, 0.09);
        height: 1px; 
    }
}
.top-footer {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.top-footer__logo {
    margin-bottom: 25px;
}
.top-footer__text {
    font-size: 1rem;
    line-height: 180%;
    letter-spacing: 0.36px;
    color: #546285;
    max-width: 243px;
}
.top-footer__nav {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;
}
.top-footer__nav__title {
    font-size: 0.8125rem;
    line-height: 154%;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #08090A;
}
.top-footer__nav__link {
    font-size: 0.9375rem;
    line-height: 133%;
    color: #546285;
    
}
.top-footer__nav__column {
    & > li {
        margin-bottom: 28px;
    }
}
.fotter__info {
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
}
.footer__credits {
    font-size: 0.9375rem;
    line-height: 133%;
    color: #353448;
    span {
        color: #35B8BE;
    }
}
.footer__social {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(126, 130, 143, 0.3);
    border-radius: 100px;
    position: relative;
    img {     
        position: absolute;
        left: 0; 
        right: 0; 
        top: 0;
        bottom: 0;
        margin: auto;
    }
    &:not(:last-child){
        margin-right: 24px;
    }
}
</style>