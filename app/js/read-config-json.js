// import config from "./server-config";
import thisConfig  from './server-config.json';

// var { config } = require('./server-config.json');
const axios = require('axios');

export const readConfigInfo = () => {
  // const thisConfig = config;

  // console.log('config', config);

  // console.log('thisConfig', thisConfig);
  // let thisConfig;
  axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  fetch('/server-config.json').then(response => {
    response.json().then(json => {
      thisConfig = json;
      console.log("thisConfig", thisConfig);
    });
  });

  return thisConfig;
}


// function loadJSON(callback) {

//   var xobj = new XMLHttpRequest();
//       xobj.overrideMimeType("application/json");
//   xobj.open('GET', 'server-config..json', true); // Replace 'appDataServices' with the path to your file
//   xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == "200") {
//           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//           callback(xobj.responseText);
//         }
//   };
//   xobj.send(null);
// }


// function init() {
//   loadJSON(function(response) {
//    // Parsing JSON string into object
//      var actual_JSON = JSON.parse(response);
//   });
//  }
