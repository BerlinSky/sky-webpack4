const axios = require('axios');
// import config from "./server-config.json";


export const readConfigInfo = () => {
  // const thisConfig = config;

  // console.log('config', config);

  // console.log('thisConfig', thisConfig);

  axios.get('server-config.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log(error);

  });


  // fetch('/server-config.json').then(function (response) {
  //   console.log(response.json())
  //   }).then(function (json) {
  //     console.log('parsed json', json)
  //   }).catch(function (ex) {
  //     console.log('parsing failed', ex)
  //   })

  // return thisConfig;
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
