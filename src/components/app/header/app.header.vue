<template>
<header class="header">
    <div class="header-top">
        <div class="header-top_container">
            <p class="header-top__text">We're open and available for takeaway & delivery.</p>
            <a href="" class="header-top__link">Order</a>
        </div>
    </div>
    <div class="main-header">
        <div class="main-header_container">
            <img src="@/assets/logo.png" alt="logo" class="main-header__logo">
            <nav class="main-header__nav">
                <ul class="main-header__list">
                    <li class="main-header__item">
                        <a href="" class="main-header__link _active">Home</a>
                    </li>
                    <li class="main-header__item">
                        <a href="" class="main-header__link">Order</a>
                    </li>
                    <li class="main-header__item">
                        <a href="" class="main-header__link">Company</a>
                    </li>
                    <li class="main-header__item">
                        <a href="" class="main-header__link">FAQ</a>
                    </li>
                    <li class="main-header__item">
                        <a href="" class="main-header__link">Contact</a>
                    </li>
                    <li class="main-header__item">
                        <div class="main-header__cart">
                            <img src="@/assets/header/cart.svg" alt="" class="main-header__cart__image">
                            <div class="main-header__cart__counter"><p>{{ counter }}</p></div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
</template>

<script>
import './_header.scss'
export default{
    data(){
        return{
        counter: 10
        }
  }
}
</script>