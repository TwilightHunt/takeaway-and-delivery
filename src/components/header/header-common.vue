<template>
    <header class="header">
        <header-top/>
        <MainHeader/>
    </header>
</template>

<script>
import HeaderTop from './header-top.vue'
import MainHeader from './main-header.vue'
export default{
    components: {
        HeaderTop,
        MainHeader
    }
}
</script>