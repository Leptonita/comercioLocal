import { DataBarris } from '../components/dataBarris';
const config = require('../config.json');



async function getLatLong(barrio){
  const BCN = 'Barcelona, Spain'
  
  const url = config.lat_long_api_url;
  const key = config.lat_long_api_key;

  return  await fetch(`${url}?access_key=${key}&query=${barrio}, ${BCN}`)
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.data.length > 0)
        return [jsonResponse.data[0].latitude, jsonResponse.data[0].longitude]
    })
}


async function getLatLongForNeighbourhoods(){
  const result = []
  await DataBarris.map(location => { return {
    'name': location.name, 'score': location.score, 
  }})
    .forEach(locationName => {
      getLatLong(locationName.name)
        .then(latLong => { 
          result.push({...locationName, 'latLongValue': latLong})
        })
        .catch(error => console.log(locationName))


    })

  console.log(result);

  return result;
}


export { 
  getLatLong, 
  getLatLongForNeighbourhoods 
}