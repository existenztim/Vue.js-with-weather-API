<template>
  <main>
    <div class="search-box">
      <input class="search-bar" type="text" placeholder="Search..."/>
    </div>
    <div class ="query">{{ query }}</div>
    <div class ="temp">{{ temp }}</div>
  </main>
  <!--<HelloWorld msg="Vite + Vue" /> self closing tag-->
</template>

<script setup>
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
// behöver ej importa om komponenten ej har script

const apiKey = '7453b8cce1610c8d5caa675608b66681';
const url = 'https://api.openweathermap.org/data/2.5/';
const query = 'stockholm';
const units = 'metric';
const temp = ref();
// https://github.com/TylerPottsDev/weather-vue/blob/master/src/App.vue
const fetchWheater = () => {
  fetch(`${url}weather?q=${query}&units=${units}&APPID=${apiKey}`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      console.log(json);
      console.log(json.main.temp);
      temp.value = json.main.temp;
      temp.value += ' grader';
    })
    .catch((err) => {
      console.error(err);
    });
};
fetchWheater();

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
