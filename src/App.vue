<template>
  <div class="content">
    <Header />
      <transition name="fade"
        leave-active-class="animated fadeOutLeft"
        enter-active-class="animated fadeInLeft"
        mode="out-in" >
          <router-view />
      </transition>
  </div>
</template>


<script>
import Header from '@/components/header/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
section{
  min-height:100vh;
  height:auto;
}
#app {
  font-family: Poppin 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color:black;
}
*{
  padding: 0;
  margin: 0;
}
.vertical-align{
  position:absolute;
  transform:translateY(-50%);
  -ms-transform:translateY(-50%);
}

.fade-leave-to,
.fade-enter-from{
  opacity:0;
  // transform:translateX(50%);
}
.fade-enter-active, .fade-leave-active{
  transition: all .5s ease !important;
}

</style>
