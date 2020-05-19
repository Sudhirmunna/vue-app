<template>
  <div class="hello">
    <h1>Hello {{ msg }} !!!</h1>

    <button @click="changeMsg">Emit event to container app</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    changeMsg() {
      this.$emit("changeMsg", this.msg);
      console.log('message emit from child component')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 h1{
      font-size: 1.25em !important;
    }
</style>
