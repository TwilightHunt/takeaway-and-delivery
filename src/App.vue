<template>
  <div class="wrapper">
    <HeaderCommon/>
  </div>
</template>

<script>
import HeaderCommon from './components/header/header-common.vue'
export default {
  components: {
    HeaderCommon
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
  [class*='_container']{
    margin: 0 auto;
    max-width: 1200px;
  }
</style>
