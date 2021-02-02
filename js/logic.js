//cities already declared
var cities = [" "]
var APIKey = "deefa433382a6d1f06e77bd7935cf556"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cities + "&appid=" + APIKey;

//started eventListener but page keeps refreshing w/ event.preventDefault() 
$("#addCty").on("click", function (event) {
    event.preventDefault();

    var city = $('#userInput').val();
    console.log(city);

    cities.push(city)
    console.log(cities)

    addButtons()
})








// function that will create the buttons for the cities array
// function addButtons() {
//     console.log("new cites added")
//     $("#newCity").empty()
//     for (var i = 0; i < cities.length; i++) {

//         var cityButton = $("<button>");

//         cityButton.text(cities[i])

//         $("#newCity").append(cityButton)
//     }
// }

// //ajax will retrieve the data from the API
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(queryURL)

//     //once data has been retrieved data will be placed into corresponding elements
//     //used classes from HTML to add data
//     $(".cityName").text(response.name);
//     $(".humidity").text("Humidity: " + response.main.humidity);
//     $(".wind").text("Wind Speed: " + response.wind.speed)
//     // $(".uvIndex").text("UV Index: " + response.)

//     var temperature = (response.main.temp - 273.15) * 1.80 + 32;
//     $(".temp").text("Temperature(K): " + response.main.speed);
//     $(".temp").text("Temperature(F): " + temperature.toFixed(2));


// })








// addButtons()