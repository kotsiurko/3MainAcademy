//myAPI: b04a034fc18f8d6bb9fee9f009f99d0d


$("#button-addon2").on("click", function () {
   var currentQuery =  $("#query").val();
   getResult(currentQuery);
});


function getResult(query){
    $.ajax({
        url: "https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&language=en-US&query="+query+"&page=1&include_adult=false",
        type: "GET",
        success: function(response){
            parseObjects(response.results);
        }
    });
}



var apiKey = "b04a034fc18f8d6bb9fee9f009f99d0d";
var movieId = "429617";
var imgServer = "https://image.tmdb.org/t/p/w500";
$.ajax({
    url: "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
    type: "GET",
    success: function(response){
        parseObjects(response.results);
    }
});
function parseData(filmData) {
    var imgSrc = imgServer+filmData.poster_path;
    $("#filmImage").attr("src", imgSrc);
    $("#filmTitle").html(filmData.title);
    $("#filmDescription").html(filmData.overview);

}
function parseObjects(responseArray) {

    var container = $("#mainContainer");
    container.empty();
    responseArray.forEach(function (item) {
        var img = imgServer + item.poster_path;
        var movieHref = "https://www.themoviedb.org/movie/"+item.id; // added variable containing link on full movie description
        container.append("    <div class='card' style='width: 18rem;'>\n" +
            "        <img id='filmImage' src='"+img+"' class='card-img-top' alt=''>\n" +
            "        <div class='card-body'>\n" +
            "            <h5 id='filmTitle' class='card-title'>"+ item.title+"</h5>\n" +
            "            <p id='filmDescription' class='card-text'>"+ item.overview+"</p>\n" +
            "            <a href="+movieHref+" class='btn btn-primary'>More about film</a>\n" + // added this link here
            "        </div>\n" +
            "    </div>");

    })
}

/* added function for changing some text */
document.getElementById('button-addon2').onclick = function() {
    document.getElementById('text').textContent="Result of search";
}