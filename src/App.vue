<template>
  <main>
    <div class="search-box">
      <input class="search-bar"
        type="text"
        placeholder="Search..."
        v-model="query"
        @keypress.enter="fetchWheater"/> <!--call function when enter is pressed-->
    </div>
    <div class ="query">{{ query }} {{ country }}</div> <!--might capitalize first letter-->
    <div class ="temp">{{ temp }}</div>
    <div class ="weather">{{ weather }} <img :src="`http://openweathermap.org/img/wn/${iconSrc}.png`"></div> <!--https://openweathermap.org/weather-conditions-->
  </main>
  <!--<HelloWorld msg="Vite + Vue" /> self closing tag-->
</template>

<script setup>
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
// behöver ej importa om komponenten ej har script

const apiKey = '7453b8cce1610c8d5caa675608b66681';
const url = 'https://api.openweathermap.org/data/2.5/';
const units = 'metric';
const country = ref('');
const temp = ref('');
const weather = ref('');
const query = ref('');
const iconSrc = ref('');

const fetchWheater = () => {
  fetch(`${url}weather?q=${query.value}&units=${units}&APPID=${apiKey}`) // the query string
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      iconSrc.value = '';
      temp.value = (Math.round(json.main.temp));
      country.value = json.sys.country;
      weather.value = json.weather[0].main;
      iconSrc.value += json.weather[0].icon;
      temp.value += ' °c';
      console.log(iconSrc);
    })
    .catch((err) => {
      console.error(err);
    });
};

</script>

<style scoped>

</style>
