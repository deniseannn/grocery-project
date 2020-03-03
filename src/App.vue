<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
    <custBtn></custBtn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "Your first Vue Component"
    }
  },
  methods: {
    greeting: function() {
      return "Week 6 of BT3103";
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #991893a8;
  margin-top: 60px;
  font-size: 40px;
}
</style>
