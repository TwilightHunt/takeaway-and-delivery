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
export default{
    data(){
        return{
        counter: 10
        }
  }
}
</script>

<style lang="scss">
.header-top{
    background-color: #35B8BE;
}
.header-top_container{
    padding: 14px 0;
    display: flex;
    justify-content: center;
}
.header-top__text{
    font-size: 14px;
    line-height: 143%;
    color: rgba(255, 255, 255, 0.8);
    padding-right: 18px;
}
.header-top__link{
    font-size: 14px;
    line-height: 143%;
    color: #fff;
}
.header{
    display: unset
}
.main-header{
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100vw;
    background-color: #fff;
}
.main-header_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-header__list{
    display: flex;
    align-items: center;
}
.main-header__link{
    padding: 0 16px;
    &._active{
        color: #35B8BE;
    }
}
.main-header__cart{
    width: 55px;
    height: 55px;
    background-color: #35B8BE;
    border-radius: 4px;
    position: relative;
    margin-left: 14px;
}
.main-header__cart__image{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
.main-header__cart__counter{
    background: #fff;
    box-shadow: 7px 7px 25px rgba(126, 130, 143, 0.27);
    border-radius: 100px;     
    position: absolute;
    height: 25px;
    left: 65.45%;
    right: -10.91%;
    top: calc(50% - 25px/2 - 21px);
    & > p{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        color: #35B8BE;
        font-size: 13px;
        line-height: 138%;
    }
}

</style>