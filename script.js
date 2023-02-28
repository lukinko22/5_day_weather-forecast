// Where city inputs will be stored
let cityName = [];


// Buttons created and populated with city history. On click event to create search
function createButtons (array) {
    $('#history').empty();

    array.forEach(el => {
        $('#history').append(
            $(`<button type="button" class="cities btn btn-secondary btn-lg btn-block">${el}</button>`));
    });

    $("button.cities").on("click", function(event) {
        event.preventDefault();
        let click = $(this)[0].innerText;
        $('#search-input').val(click);
        $('#search-button').trigger("click");
        $('#search-input').val('');
    });
}
// pulls city from local storage
function start () {
    cityName = JSON.parse(localStorage.getItem('cityName')) || [];
    createButtons(cityName);
}

// if button is empty, a new city is pushed onto the button
function buttonsCity (city) {
    if (city != '' && cityName.includes(city) != true) {        
        cityName.push(city); 
        localStorage.setItem('cityName', JSON.stringify(cityName));
        createButtons(cityName);
    }
}

// Div created to hold the data of the forecast
function forecastDiv (day, image, temp, wind, humidity) {
    let weather = $(`<div class="col forecast-tiles">
                        <h3>${day}</h3>
                        <p>${image}</p>
                        <p>Temp: ${temp} C</p>
                        <p>Wind: ${wind} KPH</p>
                        <p>Humidity: ${humidity}</p>
                    </div>`);
    $('#forecast').append(weather);
}
