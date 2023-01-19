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
      console.log(json);
      iconSrc.value = '';
      temp.value = (Math.round(json.main.temp));
      country.value = json.sys.country;
      weather.value = json.weather[0].main;
      iconSrc.value += json.weather[0].icon;
      temp.value += ' °c';
    })
    .catch((err) => {
      console.error(err);
      iconSrc.value = '';
      temp.value = '';
      country.value = '';
      weather.value = '';
      iconSrc.value = '';
      temp.value = '';
      query.value = 'Could not find location';
    });
};

</script>

<style scoped lang="scss">
  main {
    height: 80vh;

    h1 {
      font-size: clamp(1rem, 5vw, 4rem);
      text-align: center;
    }
    .card-container{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      background-color: rgb(54, 54, 54);
    //   .search-box {

    //     .search-bar{

    //     }
    //   }
    //   .weather-box {
    //   }
     }
}
</style>
