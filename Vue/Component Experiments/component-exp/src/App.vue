<template>
  <div id="app">
    <div id = "banner">
      <img alt="Vue logo" src="./assets/logo.png">
      Vue Test Website
    </div>
    <tabs className=".vue-tablist">
      <tab title="Home">
        <HelloWorld msg="A simple vuejs experimentation page."/>
      </tab> 
      <tab title="Stickers">
        <div id = sticker>
           <VueSticker :d="224" className="example" prefix="--"></VueSticker>
        </div>
      </tab>
       
    </tabs>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VueSticker from 'vue-sticker'
import { Tabs, Tab } from 'vue-slim-tabs'
export default {
  name: 'app',
  components: {
    HelloWorld,
    VueSticker,
    Tabs,
    Tab
  }
}
</script>

<style>
#banner {
  transform:scale(0.5);
  text-align: left;
  transform-origin:left;
  margin-top:-100px;
  margin-bottom:-50px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:150px;
  width:150%
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#sticker{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
}

.vue-tablist {
  list-style: none;
  display: flex;
  padding-left: 0;
  border-bottom: 1px solid #e2e2e2;
}

.vue-tab {
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-bottom-color: #e2e2e2;
  border-radius: 3px 3px 0 0;
  background-color: white;
  position: relative;
  bottom: -1px;
}

.vue-tab[aria-selected="true"] {
  border-color: #e2e2e2;
  border-bottom-color: transparent;
}

.vue-tab[aria-disabled="true"] {
  cursor: not-allowed;
  color: #999;
}
.example--main-image {
  background-image: url('assets/auto.png');
}
.example--backside-image {
  background-image: url('assets/decept.png')

}

</style>
