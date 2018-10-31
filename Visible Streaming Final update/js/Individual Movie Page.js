$(function(){
    
            var movieTitle = localStorage.getItem(" Title ");
            var moviePlot = localStorage.getItem(" Plot ");
            var moviePoster = localStorage.getItem(" Poster ");
            var movieCountry = localStorage.getItem(" Country ");
            var movieGenre = localStorage.getItem(" Genre ");
            var movieDirector = localStorage.getItem(" Director ");
            var movieYear = localStorage.getItem(" Year ");
            var movieRating = localStorage.getItem(" Ratinng ");
    
    
            $("#trailer").css('background-image', 'url(' + moviePoster+ ')');
            $(".movie-details").find("#title").text(movieTitle);
            $(".movie-details").find("#plot").text(moviePlot);   
            $(".movie-details").find("#director").text(movieDirector);   
            $(".movie-details").find("#year").text(movieYear);   
            $(".movie-details").find("#country").text(movieCountry);   
            $(".movie-details").find("#imdbRating").text(movieRating); 
    
    
            $("#ATW").on("click", function(){
                
                console.log("Button is working");
                
                localStorage.setItem("filmTitle", movieTitle);
                localStorage.setItem("filmPlot", moviePlot);
                localStorage.setItem("filmPoster", moviePoster);
                localStorage.setItem("filmCountry", movieCountry);
                localStorage.setItem("filmGenre", movieGenre);
                localStorage.setItem("filmDirector", movieDirector);
                localStorage.setItem("filmYear", movieYear);
                localStorage.setItem("filmRating", movieRating);
  
                
            });
    

});


















