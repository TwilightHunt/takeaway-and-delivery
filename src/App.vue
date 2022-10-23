<template>
  <div class="wrapper">
    <Header/>
    <MainScreen/>
    <ContentPage :content="{
      title: 'The home of fresh products', 
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`, 
      buttonText: 'Learn about us',
      image: 'https://i.ibb.co/8KmLgw6/content-img.png',
      background: 'https://i.ibb.co/CP9ppwF/bg.jpg'
    }"/>
    <InfoPage/>
    <Menu :products="menu.burgers"/>
    <ContentPage :content="{
      title: 'Order online with our simple checkout.', 
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`, 
      buttonText: 'See our FAQ',
      image: 'https://i.ibb.co/SJ94hQT/cp3.png',
      reversedOrientation: true
    }"/>
    <ContentPage :content="{
      title: 'Call our store and takeaway when it suits you best.', 
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`, 
      buttonText: 'Ph. +61 233 2333',
      image: 'https://i.ibb.co/vXn4ZP9/IMAGE.png',
      background: 'https://i.ibb.co/CP9ppwF/bg.jpg'
    }"/>
  </div>
</template>

<script>
import Header from './components/app/header/app.header.vue'
import MainScreen from './components/app/main/app.main.vue'
import ContentPage from './components/app/sections/app.content-page.vue'
import InfoPage from './components/app/sections/app.info-page.vue'
import Menu from './components/app/sections/app.menu.vue'
import './base/_nullstyle.scss'
import { MENU } from './constants/menu'
export default {
  components: {
    Header,
    MainScreen,
    ContentPage,
    InfoPage,
    Menu
  },
  data(){
    return {
      menu: MENU
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Inter:regular);
  [class*='_container']{
    margin: 0 auto;
    max-width: 1200px;
  }
  body{
    font-family: Inter;
  }
  h2{
    font-size: 50px;
    line-height: 110%;
    letter-spacing: 1.65px;
    color: #35B8BE;
  }
</style>
