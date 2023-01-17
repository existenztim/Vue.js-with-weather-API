<template>
  <main>
    <div class="search-box">
      <input class="search-bar"
        type="text"
        placeholder="Search..."
        v-model="query"/> <!--binds it to {query} var-->
    </div>
    <div class ="query">{{ query }} {{ country }}</div> <!--might capitalize first letter-->
    <div class ="temp">{{ temp }}</div>
    <div class ="weather">{{ weather }}</div>
  </main>
  <!--<HelloWorld msg="Vite + Vue" /> self closing tag-->
</template>

<script setup>
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
// behöver ej importa om komponenten ej har script

const apiKey = '7453b8cce1610c8d5caa675608b66681';
const url = 'https://api.openweathermap.org/data/2.5/';
const query = 'Stockholm';
const units = 'metric';
const country = ref('');
const temp = ref('');
const weather = ref('');

const fetchWheater = () => {
  fetch(`${url}weather?q=${query}&units=${units}&APPID=${apiKey}`) // the query string
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      temp.value = json.main.temp;
      country.value = json.sys.country;
      weather.value = json.weather[0].main;
      temp.value += ' °c';
    })
    .catch((err) => {
      console.error(err);
    });
};
fetchWheater();

</script>

<style scoped>

</style>
