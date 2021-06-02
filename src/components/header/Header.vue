<template>
    <div class="header" :class="{change_color: scrollPosition > windowHeight, bar_change: bar_change}"  >
      <router-link to="/" class="logo">
        <div id="logoNicky">Nicky</div>
        <div id="logoSen">Sen</div>
      </router-link>
      <div class="bar_container" v-on:click="myFunction()">
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact Me</router-link></li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
    return{
      scrollPosition: null,
      windowHeight:0,
      bar_change: false,
    }
  },
  mounted() {
    document.addEventListener.call(window, "scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
       this.windowHeight = window.innerHeight/2
    },
    myFunction() {
      this.bar_change = !this.bar_change
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "./Header.scss";
</style>