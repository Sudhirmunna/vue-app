<template>
  <div id="app">
    <img class="icon-style" alt="Vue logo" srcSet="./assets/vue.png">
    <HelloWorld v-bind:msg=message @changeMsg="setMessage"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  props: {
    message: String
  },
  methods: {
    setMessage(value) {
      this.$emit("vueEvent", "Hey "+ value + " this event is from Vue micro app !!");
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.icon-style{
  height: 5em;
}
</style>
