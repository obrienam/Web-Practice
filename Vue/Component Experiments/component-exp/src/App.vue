<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="My first vue app"/>
    <VueSticker :d="224" className="example" prefix="--"></VueSticker>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VueSticker from 'vue-sticker'
export default {
  name: 'app',
  components: {
    HelloWorld,
    VueSticker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.example--main-image {
  background-image: url('assets/auto.png');
}
.example--backside-image {
  background-image: url('assets/decept.png')

}
.example--focus {
  box-shadow: 0 0 5px 10px rgba(0,0,0,.4)
}
</style>
