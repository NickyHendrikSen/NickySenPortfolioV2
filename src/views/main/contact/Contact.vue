<template>
  <div class="aboutContent">
    <section class="aboutContent-top">
      <div class="titleWrapper">
        <span>C</span>
        <div class="cube">
          <div class="top"></div>
          <div class="right"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="front"></div>
          <div class="back"></div>
        </div>
        <span>ntact Me</span>
      </div>
    </section>
    
    <section class="emailSection">
      <div class="emailContainer"  v-scrollanimation>
        <div class="container">
            <form  @submit.prevent="sendEmail">
              <label>Name</label>
              <input 
                type="text" 
                v-model="name"
                name="name"
                placeholder="Your Name"
              >
              <label>Email</label>
              <input 
                type="email" 
                v-model="email"
                name="email"
                placeholder="Your Email"
                >
              <label>Message</label>
              <textarea 
                name="message"
                v-model="message"
                cols="30" rows="5"
                placeholder="Message">
              </textarea>
              
              <input type="submit" value="Send">
            </form>
        </div>
      </div>
      <div class="or"  v-scrollanimation>OR</div>
      <div class="contacts"  v-scrollanimation>
      <a href = "https://www.linkedin.com/in/nicky-hendrik-sen-4883b2174/" target="_blank"><fa class="linkedin" :icon="['fab', 'linkedin']" 
                           size="5x" /></a>
      </div>
    </section>

  </div>


</template>

<script >
import emailjs from 'emailjs-com';
export default {
  name: 'Contact',
  components: {
    
  },
  data(){
    return{
      name: '',
      email: '',
      message: ''
    }
  },
  mounted() {
  },
  methods: {
    sendEmail(e) {
      // console.log("Yo")
      try {
        emailjs.sendForm('service_2o69b8l', 'template_8wlevc7', e.target,
        'user_STlHKy7dIxV1KqxJTXc4W', {
          name: this.name,
          email: this.email,
          message: this.message
        }).then((result) => {
          console.log(result)
        })

      } catch(error) {
          console.log({error})
          alert('Failed to send the email!')
          return false
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      e.target.reset()
      alert('Email successfully sent!')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./Contact.scss";
</style>
