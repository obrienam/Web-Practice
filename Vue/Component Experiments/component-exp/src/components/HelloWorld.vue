<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg2 }}</h1>
    <h1>{{ msg3 }}</h1>
    <h3>Resources:</h3>
    <ul>
      
      <li><a href="https://github.com/obrienam/Web-Practice/tree/master/Vue/Component%20Experiments/component-exp" >Source Code</a></li>
      <li><a href="https://github.com/KamilOcean/vue-sticker?ref=madewithvuejs.com" >VueSticker Component</a></li>
      <li><a href="https://github.com/egoist/vue-slim-tabs" >Slim-Tabs Component</a></li>
      <li><a href="https://vuejs.org/" >Vuejs Website</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    msg2: String,
    msg3: String
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
</style>
