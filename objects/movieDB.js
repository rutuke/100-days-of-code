var movies = [
    {
        title: "Titanic",
        hasWatched: false,
        rating: 5
    },
    {
        title: "Snow White",
        hasWatched: true,
        rating: 4
    },
    {
        title: "How to train your dragon",
        hasWatched: false,
        rating: 5
    }
];
function buildString(movie){
    var result = "You have ";
    if (movie.hasWatched = true){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" +  movie.title + "\"";
    result += " - " + movie.rating + " stars";
    return result;
}
movies.forEach(function(movie){
    console.log(buildString(movie));
});