$(function(){
    
    

    //Navigation
    $('[data-toggle="popover"]').popover();


    $(document).ready(function(){
      $(".slideBtn").click(function(){    
        if($("#sidenav").width() == 0){      
            document.getElementById("sidenav").style.width = "250px";
            document.getElementById("content").style.paddingLeft = "250px";
            document.getElementById("slidebtn").style.paddingLeft = "250px";
        }else{
            document.getElementById("sidenav").style.width = "0";
            document.getElementById("content").style.paddingLeft = "0";
            document.getElementById("slidebtn").style.paddingLeft = "0";
            }
        });
    });
    
    // Api work
    
    var apiRequest1 = 'http://www.omdbapi.com/?i=tt1813757&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest1, moviecallback1);
        
    function moviecallback1(movieData1){
        console.log(movieData1);
    
    var poster1 = movieData1.Poster;
    var title1 = movieData1.Title;
    var plot1 = movieData1.Plot;
    var country1 = movieData1.Country;
    var genre1 = movieData1.Genre;
    var director1 = movieData1.Director;
    var year1 = movieData1.Year;
    var rating1 = movieData1.imdbRating;
        
        
        $(".movie-one").css("background-image", "url(" +poster1+")");
        $(".title-1").text(title1);
        
        
        $(".m1-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title1);
            localStorage.setItem(" Plot ", plot1);
            localStorage.setItem(" Poster ", poster1);
            localStorage.setItem(" Country ", country1);
            localStorage.setItem(" Genre ", genre1);
            localStorage.setItem(" Director ", director1);
            localStorage.setItem(" Year ", year1);
            localStorage.setItem(" Ratinng ", rating1);
            
            
            
        });
        
        $(".m1-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title1);
            localStorage.setItem(" Plot ", plot1);
            localStorage.setItem(" Poster ", poster1);
            
        });
    };
    
    var apiRequest2 = 'http://www.omdbapi.com/?i=tt0780548&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest2, moviecallback2);
        
    function moviecallback2(movieData2){
        console.log(movieData2);
    
    var poster2 = movieData2.Poster;
    var title2 = movieData2.Title;
        
        
        
        $(".movie-two").css("background-image", "url(" +poster2+")");
        $(".title-2").text(title2);
    };
    
    var apiRequest3 = 'http://www.omdbapi.com/?i=tt0111161&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest3, moviecallback3);
        
    function moviecallback3(movieData3){
        console.log(movieData3);
    
    var poster3 = movieData3.Poster;
    var title3 = movieData3.Title;
                
        
        $(".movie-three").css("background-image", "url(" +poster3+")");
        $(".title-3").text(title3);
    };
    
    var apiRequest4 = 'http://www.omdbapi.com/?i=tt3778644&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest4, moviecallback4);
        
    function moviecallback4(movieData4){
        console.log(movieData4);
    
    var poster4 = movieData4.Poster;
    var title4 = movieData4.Title;
        
        
        
        $(".movie-four").css("background-image", "url(" +poster4+")");
        $(".title-4").text(title4);
    };
    
    var apiRequest5 = 'http://www.omdbapi.com/?i=tt0214915&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest5, moviecallback5);
        
    function moviecallback5(movieData5){
        console.log(movieData5);
    
    var poster5 = movieData5.Poster;
    var title5 = movieData5.Title;
        
        
        
        $(".movie-five").css("background-image", "url(" +poster5+")");
        $(".title-5").text(title5);
    };
    
    
    
    
    
    
    
    //Filter work
    
    var filteryear = 'http://www.omdbapi.com/?i=tt1813757&apikey=c1d7f8f6&y="1998"';
    
    $.getJSON(filteryear, filtercallback);
    
    function filtercallback(filteryear1){
    console.log(filteryear1);
    }
    
    
    
    // Jquery Styling
    
    $(".movie-one").mouseenter(function(){
        $(".m1-overlay").css("visibility" , "visible");
        $(".m1-vd").css("visibility" , "visible");
        $(".m1-wl").css("visibility" , "visible");
        $(".title-1").css("visibility" , "visible");
    });
    
    $(".movie-one").mouseleave(function(){
        $(".m1-overlay").css("visibility" , "hidden");
        $(".m1-vd").css("visibility" , "hidden");
        $(".m1-wl").css("visibility" , "hidden");
        $(".title-1").css("visibility" , "hidden");
    });
    
    $(".movie-two").mouseenter(function(){
        $(".m2-overlay").css("visibility" , "visible");
        $(".m2-vd").css("visibility" , "visible");
        $(".m2-wl").css("visibility" , "visible");
        $(".title-2").css("visibility" , "visible");
    });
    
    $(".movie-two").mouseleave(function(){
        $(".m2-overlay").css("visibility" , "hidden");
        $(".m2-vd").css("visibility" , "hidden");
        $(".m2-wl").css("visibility" , "hidden");
        $(".title-2").css("visibility" , "hidden");
    });
    
    $(".movie-three").mouseenter(function(){
        $(".m3-overlay").css("visibility" , "visible");
        $(".m3-vd").css("visibility" , "visible");
        $(".m3-wl").css("visibility" , "visible");
        $(".title-3").css("visibility" , "visible");
    });
    
    $(".movie-three").mouseleave(function(){
        $(".m3-overlay").css("visibility" , "hidden");
        $(".m3-vd").css("visibility" , "hidden");
        $(".m3-wl").css("visibility" , "hidden");
        $(".title-3").css("visibility" , "hidden");
    });
    
    $(".movie-four").mouseenter(function(){
        $(".m4-overlay").css("visibility" , "visible");
        $(".m4-vd").css("visibility" , "visible");
        $(".m4-wl").css("visibility" , "visible");
        $(".title-4").css("visibility" , "visible");
    });
    
    $(".movie-four").mouseleave(function(){
        $(".m4-overlay").css("visibility" , "hidden");
        $(".m4-vd").css("visibility" , "hidden");
        $(".m4-wl").css("visibility" , "hidden");
        $(".title-4").css("visibility" , "hidden");
    });
    
    $(".movie-five").mouseenter(function(){
        $(".m5-overlay").css("visibility" , "visible");
        $(".m5-vd").css("visibility" , "visible");
        $(".m5-wl").css("visibility" , "visible");
        $(".title-5").css("visibility" , "visible");
    });
    
    $(".movie-five").mouseleave(function(){
        $(".m5-overlay").css("visibility" , "hidden");
        $(".m5-vd").css("visibility" , "hidden");
        $(".m5-wl").css("visibility" , "hidden");
        $(".title-5").css("visibility" , "hidden");
    });
});