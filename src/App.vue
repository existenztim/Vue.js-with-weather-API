<script setup> /** notera setup, fungerar
 * utan men blir annat syntax, setup mer "fritt", setup är mer likt react syntax */
import HelloWorld from './components/HelloWorld.vue'; // behöver ej importa om komponenten ej har script

const apiKey = '7453b8cce1610c8d5caa675608b66681';
const url = 'https://api.openweathermap.org/data/2.5/';
const query = 'stockholm';
// https://github.com/TylerPottsDev/weather-vue/blob/master/src/App.vue
const fetchWheater = () => {
  fetch(`${url}weather?q=${query}&units=metric&APPID=${apiKey}`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
};

// fetchWheater();
</script>

<template>

  <HelloWorld msg="Vite + Vue" /> <!--self closing tag-->
  <WeatherCards/> <!--det går att ge classer till dessa, så man kan styla i App.vue-->
</template>

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
