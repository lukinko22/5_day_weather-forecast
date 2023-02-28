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

