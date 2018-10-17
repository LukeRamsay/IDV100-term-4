$(function() {
    
//api
    
 var randomMovieArray = ['Star Wars', 'Harry Potter', 'Lord of the Rings', 'Game of Thrones'];
    
var RandomNumb = Math.floor((Math.random() * randomMovieArray.length) + 0);
    
    
var randomMovie = randomMovieArray[RandomNumb];
    
    console.log(randomMovie);
    
    
    var apiCall = 'http://www.omdbapi.com/?i=tt3896198&apikey=c1d7f8f6&t=Harry+Potter';
    
    $.getJSON(apiCall, randomMovie);
    
    function randomMovie1(movieData){
        console.log(randomMovie1);
    }
    
});