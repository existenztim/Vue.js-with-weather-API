/*
Syntax för variable/funktioner utan setup :
api key 7453b8cce1610c8d5caa675608b66681

//variables

export default {
  data () {
    return {
      variabel1 = hej;
      variabel2 = 123;
    }
  };

//functions

  methods: {
    function1(){},
    function2(){},
  }

}
*/

// Glöm ej import {ref} from "vue";!"
/** vill du sätta ett värde på en variable?
 Tänk på att vue är reaktivt och ska värdet kunna ändras använd "ref(false);" */

// fetch(url)
//   .then(res => { //res = response
//     console.log(res);
//     return res.json();
//   })
//   .then(json => {
//     console.log('Aktuell temperatur:', json.value[0].value, 'grader');
//     console.log('Resterande data:');
//     console.log(json);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Du kan använda v-if="variable" i html om ett element ska synas eller ej beroende på true/false-->
// {{ 5*2 }} mustach tag, där kan man skriva ren js-->

// {
//   "coord": {
//     "lon": 18.0649,
//     "lat": 59.3326
//   },
//   "weather": [
//     {
//       "id": 804,
//       "main": "Clouds",
//       "description": "overcast clouds",
//       "icon": "04n"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 3.96,
//     "feels_like": -0.03,
//     "temp_min": 3,
//     "temp_max": 4.47,
//     "pressure": 974,
//     "humidity": 92
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 5.14,
//     "deg": 180
//   },
//   "clouds": {
//     "all": 100
//   },
//   "dt": 1673825710,
//   "sys": {
//     "type": 1,
//     "id": 1788,
//     "country": "SE",
//     "sunrise": 1673854171,
//     "sunset": 1673879084
//   },
//   "timezone": 3600,
//   "id": 2673730,
//   "name": "Stockholm",
//   "cod": 200
// }
