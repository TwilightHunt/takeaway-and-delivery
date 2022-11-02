<template>
  <div class="wrapper">
    <Cart 
    v-if="isCartActive"
    @changeCartVisibility="changeCartVisibility"/>
    <Header
    @changeCartVisibility="changeCartVisibility"/>
    <MainScreen/>
    <ContentPage :content="{
      title: 'The home of fresh products', 
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`, 
      buttonText: 'Learn about us',
      image: 'https://i.ibb.co/8KmLgw6/content-img.png',
      background: 'https://i.ibb.co/CP9ppwF/bg.jpg'
    }"/>
    <InfoPage/>
    <Menu :products="menu"/>
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
    <CardSection/>
    <Footer/>
  </div>
</template>

<script>
import Cart from './components/app/popups/cart/app.cart.vue'
import './base/_nullstyle.scss'
export default {
  components: {
    Cart
  },
  data(){
    return {
      menu: this.$store.getters.getBurgers,
      isCartActive: false
    }
  }, 
  methods: {
    changeCartVisibility(){
      this.isCartActive = !this.isCartActive
      document.body.classList.toggle('fixedBody')
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
  .fixedBody{
    overflow: hidden;
  }
  html{
    scroll-behavior: smooth;
    overflow-x: hidden;
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
  button{
    cursor: pointer;
  }
</style>
