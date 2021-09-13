const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

  https.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=", function (response){
    console.log(response);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description

      console.log(temp, weatherDescription);

      res.send("The temperature in London is " + temp);

    })
  })

  
})


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
