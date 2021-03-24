<template>
  <div class="grid justify-items-stretch">
  <img alt="Vue logo" class="justify-self-center" src="./assets/logo.png">
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <p class="text-rose-800">This is text custom color</p>
  <p class="text-salmon-dark">This is text custom color</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

