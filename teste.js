function film( url) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("data in popular component did mount", data);
        })
}

var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"

film(url)