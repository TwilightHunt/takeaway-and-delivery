/* eslint-disable */
<template>
  <div class="wrapper">
    <Header/>
    <MainScreen/>
  </div>
</template>

<script>
import Header from './components/app/header/app.header.vue'
import MainScreen from './components/app/main/app.main.vue'
export default {
  components: {
    Header,
    MainScreen
},
  data(){
    return{
      
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Inter:regular);
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }
  body{
    font-family: Inter;
  }
  a{
      text-decoration: none;
      color: #000;
  }
  ul, ol, li{
    list-style: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: inherit;
    font-size: inherit;
  }
  [class*='_container']{
    margin: 0 auto;
    max-width: 1200px;
  }
</style>
