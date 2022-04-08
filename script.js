const city = "Lviv";

function getData(city) {
  const config =
    "http://api.weatherstack.com/current?access_key=1ade29aa7d94359ad433192e54e98bce&query=" +
    city;

  return axios.get(config);
}

function getRender(res){
    
    console.log(res);
    let cityName = document.getElementById("cityBlock");
    cityName.textContent = res.data.location.name;
    console.log(cityName);

    let cityTemperature = document.getElementById("temperature");

   cityTemperature.textContent  = res.data.current.temperature + "'C";

   let weatherDescrip = document.getElementById("details");
   weatherDescrip.textContent = res.data.current.weather_descriptions[0];

   let cityTime = document.getElementById("time");
   cityTime.textContent = res.data.location.localtime;

   let wind = document.getElementById("wind");
   wind.textContent = "Wind: " +res.data.current.wind_speed + "m/s";

   let pressure = document.getElementById("pressure");
   pressure.textContent = "Pressure: "+res.data.current.pressure + "hPa";

   let humidity = document.getElementById("humidity");
   humidity.textContent = "Humidity: " + res.data.current.humidity + "%" ;

   document.searchForm.elements.buttonSearch.addEventListener("click",function getSearch(event){
     let input = document.searchForm.elements.inputSearch.value;
        getData(input).then((data) =>{getRender(data)});
  })

}

getData(city).then((data) =>{getRender(data)});
