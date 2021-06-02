<template>
  <div class="aboutContent">
    <section class="aboutContent-top">
     <div class="square square1" style="top: 5vh; left: 5vw;" :style="{ transform: mediumParallax + ' rotateZ(20deg) ' }">
      </div>
      <div class="square square2" style="top: 20vh; right: 15vw;" :style="{ transform:  slowParallax + ' rotateZ(40deg) ' }">
      </div>
      <div class="square square3" style="top: 12vh; right: 35vw;" :style="{ transform:  slowParallax + ' rotateZ(60deg) ' }">
      </div>
      <div class="square square2" style="top: 22vh; right: 55vw;" :style="{ transform:  slowParallax + ' rotateZ(100deg) ' }">
      </div>
      <div class="square square1" style="top: 35vh; left: 18vw;" :style="{ transform:  slowParallax + ' rotateZ(160deg) ' }">
      </div>
      <div class="square square2" style="top: 35vh; right: 24vw;" :style="{ transform:  mediumParallax + ' rotateZ(75deg) ' }">
      </div>
      <div class="square square3" style="bottom: 2vh; right: 12vw;" :style="{ transform:  slowParallax + ' rotateZ(125deg) ' }">
      </div>
      <div class="square square2" style="top: 65vh; left: 12vw;" :style="{ transform:  mediumParallax + ' rotateZ(82deg) ' }">
      </div>
      <div class="square square2" style="bottom: 5vh; left: 28vw;" :style="{ transform:  slowParallax + ' rotateZ(35deg) ' }">
      </div>
      <div class="square square3" style="bottom: 25vh; right: 52vw;" :style="{ transform:  fastParallax + ' rotateZ(125deg) ' }">
      </div>
      <div class="square square2" style="top: 65vh; left: 72vw;" :style="{ transform:  mediumParallax + ' rotateZ(82deg) ' }">
      </div>
      <span>Ab</span>
      <div class="cube">
        <div class="top"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="left"></div>
        <div class="front"></div>
        <div class="back"></div>
      </div>
      <span>ut Me</span>
    </section>
    
    <section class="firstAbout">
      <div class="square square1" style="top: 5vh; left: 5vw;" :style="{ transform: fastParallax + ' rotateZ(20deg) ' }">
      </div>
      <div class="square square2" style="top: 20vh; right: 15vw;" :style="{ transform:  mediumParallax + ' rotateZ(40deg) ' }">
      </div>
      <div class="square square3" style="top: 12vh; right: 35vw;" :style="{ transform:  slowParallax + ' rotateZ(60deg) ' }">
      </div>
      <div class="square square2" style="top: 22vh; right: 55vw;" :style="{ transform:  fastParallax + ' rotateZ(100deg) ' }">
      </div>
      <div class="square square1" style="top: 35vh; left: 18vw;" :style="{ transform:  slowParallax + ' rotateZ(160deg) ' }">
      </div>
      <div class="square square2" style="top: 35vh; right: 24vw;" :style="{ transform:  mediumParallax + ' rotateZ(75deg) ' }">
      </div>
      <div class="square square3" style="bottom: 2vh; right: 12vw;" :style="{ transform:  slowParallax + ' rotateZ(125deg) ' }">
      </div>
      <div class="square square2" style="top: 65vh; left: 12vw;" :style="{ transform:  mediumParallax + ' rotateZ(82deg) ' }">
      </div>
      <div class="square square2" style="bottom: 5vh; left: 28vw;" :style="{ transform:  slowParallax + ' rotateZ(35deg) ' }">
      </div>
      <div class="square square3" style="bottom: 25vh; right: 52vw;" :style="{ transform:  fastParallax + ' rotateZ(125deg) ' }">
      </div>
      <div class="square square2" style="top: 65vh; left: 72vw;" :style="{ transform:  mediumParallax + ' rotateZ(82deg) ' }">
      </div>

      <div class="firstAboutContent">
        <div class="pcimg" v-scrollanimation>
          <img src="../../../assets/pandaPC.png" />
        </div>
        <div class="descWrapper" v-scrollanimation>
          <div class="desc">
            A Passionate, Enthusiastic and High initiative Fullstack Developer. I enjoy turning complex problems into reality. Serving clients
            with a wonderful design and best quality code.            
          </div>
          <div class="descCard">
            <!-- <div class="card">2 Years <span>Experiences</span></div> -->
            <div class="card"><ICountUp
            :startVal="clients.startVal"
            :endVal="clients.endVal"
            :duration="clients.duration"
            :options="clients.options"
            id="counter1"
            /><span>Clients</span></div>
            <div class="card"><ICountUp
            :startVal="projects.startVal"
            :endVal="projects.endVal"
            :duration="projects.duration"
            :options="projects.options"
            id="counter2"
            /><span>Projects</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="secondAbout">
      <div class="square square1" style="top: 5vh; left: 5vw;" :style="{ transform: fastParallax + ' rotateZ(20deg) ' }">
      </div>
      <div class="square square2" style="top: 20vh; right: 15vw;" :style="{ transform:  mediumParallax + ' rotateZ(40deg) ' }">
      </div>
      <div class="square square3" style="top: 12vh; right: 35vw;" :style="{ transform:  slowParallax + ' rotateZ(60deg) ' }">
      </div>
      <div class="square square2" style="top: 22vh; right: 55vw;" :style="{ transform:  fastParallax + ' rotateZ(100deg) ' }">
      </div>
      <div class="square square1" style="top: 35vh; left: 18vw;" :style="{ transform:  slowParallax + ' rotateZ(160deg) ' }">
      </div>
      <div class="square square2" style="top: 35vh; right: 24vw;" :style="{ transform:  mediumParallax + ' rotateZ(75deg) ' }">
      </div>
      <div class="square square3" style="bottom: 2vh; right: 12vw;" :style="{ transform:  slowParallax + ' rotateZ(125deg) ' }">
      </div>
      <div class="square square2" style="top: 65vh; left: 12vw;" :style="{ transform:  mediumParallax + ' rotateZ(82deg) ' }">
      </div>
      <div class="square square2" style="bottom: 5vh; left: 28vw;" :style="{ transform:  slowParallax + ' rotateZ(35deg) ' }">
      </div>
      <div class="square square3" style="bottom: 25vh; right: 52vw;" :style="{ transform:  fastParallax + ' rotateZ(125deg) ' }">
      </div>
      <div class="square square2" style="top: 65vh; left: 72vw;" :style="{ transform:  mediumParallax + ' rotateZ(82deg) ' }">
      </div>

      <div class="secondAboutContent">
        <div class="titleWrapper">
          <div class="title">
            Skills Overview
            <div></div>
          </div>
        </div>
          <div class="skills">
            <div class="card" v-scrollanimation>
              <div class="title">Frontend</div>
              <div class="skillListWrapper">
                <div class="skillList">
                  <ul>
                    <li>Vue.js</li>
                    <li>React.js</li>
                    <li>Angular.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card" v-scrollanimation>
              <div class="title">Backend</div>
              <div class="skillListWrapper">
                <div class="skillList">
                  <ul>
                    <li>Laravel</li>
                    <li>Node.js</li>
                    <li>ASP .NET C#</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>

    </section>

    <section class="firstAbout">
      <div class="firstAboutContent">
        <div class="pcimg" v-scrollanimation>
          <img src="../../../assets/gen.png" />
        </div>
        <div class="descWrapper" v-scrollanimation>
          <div class="desc">
            Besides developing websites, I love influencing peoples around the globe via YouTube. It provides me a place where I can 
            express myself and entertain others.       
          </div>
          <div class="descCard">
            <!-- <div class="card">2 Years <span>Experiences</span></div> -->
            <div class="card"><ICountUp
            :startVal="clients.startVal"
            :endVal="4200"
            :duration="clients.duration"
            :options="clients.options"
            /><span>Subscribers</span></div>
            <div class="card"><ICountUp
            :startVal="projects.startVal"
            :endVal="850000"
            :duration="projects.duration"
            :options="projects.options"
            /><span>Views</span></div>
            <div class="card"><ICountUp
            :startVal="projects.startVal"
            :endVal="200"
            :duration="projects.duration"
            :options="projects.options"
            /><span>Videos</span></div>
          </div>
        </div>
      </div>
    </section>

  </div>


</template>

<script type="text/babel">
import ICountUp from 'vue-countup-v2';

export default {
  name: 'About',
  components: {
    ICountUp
  },
  data(){
    return{
      slowParallax: 'translateY(0)',
      mediumParallax: 'translateY(0)',
      fastParallax: 'translateY(0)',
      projects:{
        startVal: 0,
        endVal: 5,
        decimals: 0,
        duration: 2,
        options: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: '+'
            },
      },
      clients:{
        startVal: 0,
        endVal: 3,
        decimals: 0,
        duration: 2,
        options: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: '+',
            },
      },
    }
  },
  mounted() {
    document.addEventListener.call(window, "scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      // console.log("Test")
       var scrollPosition = window.pageYOffset
       this.slowParallax = "translateY(" + scrollPosition * -.3 + "px)";
       this.mediumParallax = "translateY(" + scrollPosition * -0.5 + "px)";
       this.fastParallax = "translateY(" + scrollPosition * -.8 + "px)";

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./About.scss";
</style>
