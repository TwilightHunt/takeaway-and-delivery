<template>
  <div class="wrapper">
    <Header/>
    <MainScreen/>
    <ContentPage/>
    <InfoPage/>
    <Menu :goods="menu"/>
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
