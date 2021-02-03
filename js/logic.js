//cities variable w empty array
var cities = []
var APIKey = "deefa433382a6d1f06e77bd7935cf556"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cities + "&appid=" + APIKey;



//started eventListener but page keeps refreshing w/ event.preventDefault() 
$("#addCity").on("click", function (event) {
    event.preventDefault();

    var city = $('#userInput').val();
    console.log(city);

    cities.push(city)
    console.log(cities)

    addButtons()
    searchWeather(city)
})


// function that will create the buttons for the cities array
function addButtons(event) {
    // event.stopPropagation()
    // console.log("new cites added")
    $("#newCity").empty()
    for (var i = 0; i < cities.length; i++) {
        // creating button for each element in cities.length array
        var cityButton = $("<button>");
        //button text
        cityButton.addClass("addedCity");
        cityButton.text(cities[i])
        //append cityButton to #newCity
        $("#newCity").append(cityButton)
    }
}




function searchWeather(city) {
    //ajax will retrieve the data from the API
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial",
        method: "GET"
    }).then(function (response) {
        console.log("weather", response)

        //once data has been retrieved data will be placed into corresponding elements
        //used classes from HTML to add data
        $(".cityName").text(response.name);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".wind").text("Wind Speed: " + response.wind.speed)
        // $(".uvIndex").text("UV Index: " + response.)
        $(".imageIcon").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
        var temperature = (response.main.temp)
        console.log(response.main.temp)
        // $(".temp").text("Temperature (K) " + response.main.temp);
        $(".temp").text("Temperature (F): " + temperature.toFixed(2));
        // column.empty()
        forecast(city)
        // column.empty()
    })




}

function forecast(city) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial",
        method: "GET", dataType: "json"
    }).then(function (response) {
        console.log("forecast", response)
        // column.empty()
        for (var i = 0; i < response.list.length; i++) {
            if (response.list[i].dt_txt.indexOf("15:00:00") !== -1) {
                var column = $("<div>").addClass("col-md-2")
                var card = $("<div>").addClass("card bg-primary text-white")
                var body = $("<div>").addClass("card-body p-2")
                var title = $("<h5>").addClass("card-title").text(new Date(response.list[i].dt_txt).toLocaleDateString())
                var image = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png")
                var humidity = $("<p>").addClass("card-text").text("humidity: " + response.list[i].main.humidity)
                var temperature = $("<p>").addClass("card-text").text("Temperature: " + response.list[i].main.temp_max)
                column.empty()
                column.append(card.append(body.append(title, image, temperature, humidity)))
                $("#fiveDay").append(column)
                // console.log(temperature)
                // column.empty()
            }
        }
    })
}











// $(document).on("click", ".addedCity", searchWeather())
addButtons()