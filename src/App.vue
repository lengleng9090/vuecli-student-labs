<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>

      <div class="container">
        <div class="survey-container">
          <form @submit.prevent="submitForm">
            <div>
              <p v-if="invalidNameInput" class="bg-salmon-darkest">Please enter your name!</p>
              <h2 class="heading">
                How was your Vue.js learning experience?
              </h2>
              <label class="label" for="name">Your Name</label>
              <input class="input" id="name" type="text" v-model="enteredName" />
            </div>

            <div>
              <p v-if="invalidRatingInput" class="bg-salmon-darkest">Please choose your learning experience!</p>
              <h2 class="heading">My learning experience was ...</h2>

              <div>
                <input type="radio" name="rating" id="rating-poor" v-model="rating" />
                <label class="label" for="rating-poor">Poor</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-avg" v-model="rating" />
                <label class="label" for="rating-avg">Average</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-great" v-model="rating" />
                <label class="label" for="rating-great">Great</label>
              </div>
            </div>
            <button class="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
   data() {
    return {
      enteredName: '',
      rating: null,
      invalidNameInput: false,
      invalidRatingInput: false
    }
  },
  methods:{
    submitForm(){
      this.invalidNameInput = (this.enteredName === '' ? true : false);
      this.invalidRatingInput = (this.rating === null ? true : false);
      console.log("invalidNameInput : "+this.invalidNameInput);
      console.log("name : "+this.enteredName);
      console.log("invalidRatingInput : "+this.invalidRatingInput);
      console.log("rating : "+this.rating);
    }
  }
}
</script>
