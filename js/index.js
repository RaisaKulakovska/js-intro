
var welcome = document.querySelector('.Welcome');
var input_search = document.querySelector('.search');

// console.log(input_search);
input_search.addEventListener("click", get_img);

let name = "Shrek";

let url = `http://www.omdbapi.com/?apikey=d2b38cad&t=${name}`;

function get_img () {
    console.log("Works");

    fetch(url)
        .then(
            function (response) {
                // console.log(response)
                return response.json();
            }
        )
        .then(
            function (data) {
                console.log(data.Poster);
               
            }
        )

}