<template>
  <div class="wrapper">
    <Header/>
    <MainScreen/>
    <ContentPage/>
  </div>
</template>

<script>
import Header from './components/app/header/app.header.vue'
import MainScreen from './components/app/main/app.main.vue'
import ContentPage from './components/app/content-page/app.content-page.vue'
import './base/_nullstyle.scss'
export default {
  components: {
    Header,
    MainScreen,
    ContentPage
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
</style>
