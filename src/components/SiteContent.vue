<template>
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
</template>

<script setup>
import { ref } from 'vue';

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
  .card-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-color: rgb(54, 54, 54);

    .search-box {
      margin: 2rem;
      input {
        height: 60%;
        margin: 1rem;
      }
      button {
        border: 1px solid black;
      }
    }
    .weather-box {
      padding: 2rem;
      background-color: rgb(76, 140, 196);
      border-radius: 5%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3)
      0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      .temp{
        padding: 2rem 0 2rem 0;
        font-size: 3rem;
      }
    }
  }
</style>
