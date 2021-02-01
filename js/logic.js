//cities already declared
var cities = ["Austin", "Chicago", "New York", "Orlando", "San Francisco", "Seattle", "Denver", "Atlanta"]

// function that will create the buttons for the cities array
function addButtons() {
    // console.log("new cites added")
    $("#newCity").empty()
    for (var i = 0; i < cities.length; i++) {

        var cityButton = $("<button>");

        cityButton.text(cities[i])

        $("#newCity").append(cityButton)

    }


}






addButtons()