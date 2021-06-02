<template>
  <div class="homeContent">
    <div class="infoWrapper">
      <div class="info">
        <div class="info1"><span>Hello World!</span> My name is</div>
        <div class="info2">Nicky Hendrik Sen</div>
        <div class="info3">I'm a <span class="profession">{{profession}}{{typer}}</span></div>
      </div>
    </div>
    <img src="../../../assets/me-home.jpg">
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      profession: "",
      tickingInterval: null,
      professions: ['Web Developer', 'Youtuber', 'Body Builder'],
      professionIndex: 0,
      professionWait: 0,
      professionWriting: true,
      typer: '|',
    }
  },
  methods:{
    loadProfession(){
      this.typerInterval = setInterval(() => {
        if(this.typer == "|") this.typer = "";
        else this.typer = "|";
      }, 1000);
      this.tickingInterval = setInterval(() => {
        if(this.professionWriting){
          this.profession =  this.professions[this.professionIndex].substring(0, this.profession.length+1);
          if(this.profession.length == this.professions[this.professionIndex].length){
            this.professionWriting = false;
          }
        }
        else{
          if(this.professionWait < 40){
            this.professionWait+=1;
          }
          else{
            this.profession =  this.professions[this.professionIndex].substring(0, this.profession.length-1);
            if(this.profession.length == 0){
              this.professionIndex = (this.professionIndex+1)%this.professions.length;
              this.professionWait = 0;
              this.professionWriting = true;
            }
          }
        }
      }, 50)
    },
  },
  beforeUnmount(){
    clearInterval(this.tickingInterval)
    clearInterval(this.typerInterval)
  },
  mounted(){
      this.loadProfession()
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './Home.scss';
</style>
