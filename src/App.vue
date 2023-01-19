<template>
  <main>
    <h1>Vue.js With Open-Weather-Map API</h1>
    <div class= "card-container">
      <div class="search-box">
        <input class="search-bar"
          type="text"
          placeholder="Type a city name..."
          v-model="query"
          @keypress.enter="fetchWheater"/> <!--call function when enter is pressed-->
        <button @click="fetchWheater">Get data</button> <!--or button is clicked-->
        </div>
      <div class="weather-box" v-if="(typeof weather != 'undefined')">
        <div class ="weather-box-item query">{{ query }} {{ country }}</div>
        <div class ="weather-box-item temp">{{ temp }}</div>
        <div class ="weather-box-item weather">{{ weather }} <img :src="`http://openweathermap.org/img/wn/${iconSrc}.png`"></div> <!--https://openweathermap.org/weather-conditions-->
      </div>
    </div>
  </main>
  <!--<HelloWorld msg="Vite + Vue" /> self closing tag-->
</template>

<script setup>
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
// behöver ej importa om komponenten ej har script

// combine vars in an object?
const apiKey = import.meta.env.VITE_API_KEY;
const url = 'https://api.openweathermap.org/data/2.5/';
const units = 'metric';
const country = ref(''); // '' to make it string type
const temp = ref('');
const weather = ref(); // initially undefined
const query = ref('');
const iconSrc = ref('');
console.log(typeof query.value);
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
    })
    .catch((err) => {
      console.error(err);
    });
};

</script>

<style scoped lang="scss">
  main {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100vh;
    .card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 640px;
    padding: 25px;
  }
  .weather-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 320px;
    max-width: 640px;
  }
  .weather-box-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .temp{
    font-size: 3rem;
    padding: 1rem 0 1rem 0;
  }

  .search-box {
  display: flex;
  flex-direction: row;
  }
}

</style>
