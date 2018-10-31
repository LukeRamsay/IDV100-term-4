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
    var plot2 = movieData2.Plot;
    var country2 = movieData2.Country;
    var genre2 = movieData2.Genre;
    var director2 = movieData2.Director;
    var year2 = movieData2.Year;
    var rating2 = movieData2.imdbRating;
        
        
        
        $(".movie-two").css("background-image", "url(" +poster2+")");
        $(".title-2").text(title2);
        
        $(".m2-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title2);
            localStorage.setItem(" Plot ", plot2);
            localStorage.setItem(" Poster ", poster2);
            localStorage.setItem(" Country ", country2);
            localStorage.setItem(" Genre ", genre2);
            localStorage.setItem(" Director ", director2);
            localStorage.setItem(" Year ", year2);
            localStorage.setItem(" Ratinng ", rating2);
            
            
            
        });
        
        $(".m2-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title2);
            localStorage.setItem(" Plot ", plot2);
            localStorage.setItem(" Poster ", poster2);
            
        });
    };
    
    var apiRequest3 = 'http://www.omdbapi.com/?i=tt0111161&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest3, moviecallback3);
        
    function moviecallback3(movieData3){
        console.log(movieData3);
    
    var poster3 = movieData3.Poster;
    var title3 = movieData3.Title;
    var plot3 = movieData3.Plot;
    var country3 = movieData3.Country;
    var genre3 = movieData3.Genre;
    var director3 = movieData3.Director;
    var year3 = movieData3.Year;
    var rating3 = movieData3.imdbRating;
                
        
        $(".movie-three").css("background-image", "url(" +poster3+")");
        $(".title-3").text(title3);
        
         $(".m3-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title3);
            localStorage.setItem(" Plot ", plot3);
            localStorage.setItem(" Poster ", poster3);
            localStorage.setItem(" Country ", country3);
            localStorage.setItem(" Genre ", genre3);
            localStorage.setItem(" Director ", director3);
            localStorage.setItem(" Year ", year3);
            localStorage.setItem(" Ratinng ", rating3);
            
            
            
        });
        
        $(".m3-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title3);
            localStorage.setItem(" Plot ", plot3);
            localStorage.setItem(" Poster ", poster3);
            
        });
    };
    
    var apiRequest4 = 'http://www.omdbapi.com/?i=tt3778644&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest4, moviecallback4);
        
    function moviecallback4(movieData4){
        console.log(movieData4);
    
    var poster4 = movieData4.Poster;
    var title4 = movieData4.Title;
    var plot4 = movieData4.Plot;
    var country4 = movieData4.Country;
    var genre4 = movieData4.Genre;
    var director4 = movieData4.Director;
    var year4 = movieData4.Year;
    var rating4 = movieData4.imdbRating;
        
        
        
        $(".movie-four").css("background-image", "url(" +poster4+")");
        $(".title-4").text(title4);
        
         $(".m4-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title4);
            localStorage.setItem(" Plot ", plot4);
            localStorage.setItem(" Poster ", poster4);
            localStorage.setItem(" Country ", country4);
            localStorage.setItem(" Genre ", genre4);
            localStorage.setItem(" Director ", director4);
            localStorage.setItem(" Year ", year4);
            localStorage.setItem(" Ratinng ", rating4);
            
            
            
        });
        
        $(".m4-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title4);
            localStorage.setItem(" Plot ", plot4);
            localStorage.setItem(" Poster ", poster4);
            
        });
    };
    
    var apiRequest5 = 'http://www.omdbapi.com/?i=tt0214915&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest5, moviecallback5);
        
    function moviecallback5(movieData5){
        console.log(movieData5);
    
    var poster5 = movieData5.Poster;
    var title5 = movieData5.Title;
    var plot5 = movieData5.Plot;
    var country5 = movieData5.Country;
    var genre5 = movieData5.Genre;
    var director5 = movieData5.Director;
    var year5 = movieData5.Year;
    var rating5 = movieData5.imdbRating;
        
        
        
        $(".movie-five").css("background-image", "url(" +poster5+")");
        $(".title-5").text(title5);
        
        $(".m5-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title5);
            localStorage.setItem(" Plot ", plot5);
            localStorage.setItem(" Poster ", poster5);
            localStorage.setItem(" Country ", country5);
            localStorage.setItem(" Genre ", genre5);
            localStorage.setItem(" Director ", director5);
            localStorage.setItem(" Year ", year5);
            localStorage.setItem(" Ratinng ", rating5);
            
            
            
        });
        
        $(".m5-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title5);
            localStorage.setItem(" Plot ", plot5);
            localStorage.setItem(" Poster ", poster5);
            
        });
    };
    
    var apiRequest6 = 'http://www.omdbapi.com/?i=tt0068646&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest6, moviecallback6);
        
    function moviecallback6(movieData6){
        console.log(movieData6);
    
    var poster6 = movieData6.Poster;
    var title6 = movieData6.Title;
    var plot6 = movieData6.Plot;
    var country6 = movieData6.Country;
    var genre6 = movieData6.Genre;
    var director6 = movieData6.Director;
    var year6 = movieData6.Year;
    var rating6 = movieData6.imdbRating;
        
        
        $(".movie-six").css("background-image", "url(" +poster6+")");
        $(".title-6").text(title6);
        
        $(".m6-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title6);
            localStorage.setItem(" Plot ", plot6);
            localStorage.setItem(" Poster ", poster6);
            localStorage.setItem(" Country ", country6);
            localStorage.setItem(" Genre ", genre6);
            localStorage.setItem(" Director ", director6);
            localStorage.setItem(" Year ", year6);
            localStorage.setItem(" Ratinng ", rating6);
            
            
            
        });
        
        $(".m6-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title6);
            localStorage.setItem(" Plot ", plot6);
            localStorage.setItem(" Poster ", poster6);
            
        });
        
    };
    
    var apiRequest7 = 'http://www.omdbapi.com/?i=tt0071562&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest7, moviecallback7);
        
    function moviecallback7(movieData7){
        console.log(movieData7);
    
    var poster7 = movieData7.Poster;
    var title7 = movieData7.Title;
    var plot7 = movieData7.Plot;
    var country7 = movieData7.Country;
    var genre7 = movieData7.Genre;
    var director7 = movieData7.Director;
    var year7 = movieData7.Year;
    var rating7 = movieData7.imdbRating;
        
        
        
        $(".movie-seven").css("background-image", "url(" +poster7+")");
        $(".title-7").text(title7);
        
        $(".m7-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title7);
            localStorage.setItem(" Plot ", plot7);
            localStorage.setItem(" Poster ", poster7);
            localStorage.setItem(" Country ", country7);
            localStorage.setItem(" Genre ", genre7);
            localStorage.setItem(" Director ", director7);
            localStorage.setItem(" Year ", year7);
            localStorage.setItem(" Ratinng ", rating7);
            
            
            
        });
        
        $(".m7-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title7);
            localStorage.setItem(" Plot ", plot7);
            localStorage.setItem(" Poster ", poster7);
            
        });
    };
    
    var apiRequest8 = 'http://www.omdbapi.com/?i=tt0110912&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest8, moviecallback8);
        
    function moviecallback8(movieData8){
        console.log(movieData8);
    
    var poster8 = movieData8.Poster;
    var title8 = movieData8.Title;
    var plot8 = movieData8.Plot;
    var country8 = movieData8.Country;
    var genre8 = movieData8.Genre;
    var director8 = movieData8.Director;
    var year8 = movieData8.Year;
    var rating8 = movieData8.imdbRating;
                
        
        $(".movie-eight").css("background-image", "url(" +poster8+")");
        $(".title-8").text(title8);
        
        $(".m8-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title8);
            localStorage.setItem(" Plot ", plot8);
            localStorage.setItem(" Poster ", poster8);
            localStorage.setItem(" Country ", country8);
            localStorage.setItem(" Genre ", genre8);
            localStorage.setItem(" Director ", director8);
            localStorage.setItem(" Year ", year8);
            localStorage.setItem(" Ratinng ", rating8);
            
            
            
        });
        
        $(".m8-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title8);
            localStorage.setItem(" Plot ", plot8);
            localStorage.setItem(" Poster ", poster8);
            
        });
    };
    
    var apiRequest9 = 'http://www.omdbapi.com/?i=tt0080684&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest9, moviecallback9);
        
    function moviecallback9(movieData9){
        console.log(movieData9);
    
    var poster9 = movieData9.Poster;
    var title9 = movieData9.Title;
    var plot9 = movieData9.Plot;
    var country9 = movieData9.Country;
    var genre9 = movieData9.Genre;
    var director9 = movieData9.Director;
    var year9 = movieData9.Year;
    var rating9 = movieData9.imdbRating;
        
        
        
        $(".movie-nine").css("background-image", "url(" +poster9+")");
        $(".title-9").text(title9);
        
        $(".m9-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title9);
            localStorage.setItem(" Plot ", plot9);
            localStorage.setItem(" Poster ", poster9);
            localStorage.setItem(" Country ", country9);
            localStorage.setItem(" Genre ", genre9);
            localStorage.setItem(" Director ", director9);
            localStorage.setItem(" Year ", year9);
            localStorage.setItem(" Ratinng ", rating9);
            
            
            
        });
        
        $(".m9-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title9);
            localStorage.setItem(" Plot ", plot9);
            localStorage.setItem(" Poster ", poster9);
            
        });
    };
    
    var apiRequest10 = 'http://www.omdbapi.com/?i=tt1853728&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest10, moviecallback10);
        
    function moviecallback10(movieData10){
        console.log(movieData10);
    
    var poster10 = movieData10.Poster;
    var title10 = movieData10.Title;
    var poster10 = movieData10.Poster;
    var title10 = movieData10.Title;
    var plot10 = movieData10.Plot;
    var country10 = movieData10.Country;
    var genre10 = movieData10.Genre;
    var director10 = movieData10.Director;
    var year10 = movieData10.Year;
    var rating10 = movieData10.imdbRating;
        
        
        
        $(".movie-ten").css("background-image", "url(" +poster10+")");
        $(".title-10").text(title10);
        
        $(".m10-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title10);
            localStorage.setItem(" Plot ", plot10);
            localStorage.setItem(" Poster ", poster10);
            localStorage.setItem(" Country ", country10);
            localStorage.setItem(" Genre ", genre10);
            localStorage.setItem(" Director ", director10);
            localStorage.setItem(" Year ", year10);
            localStorage.setItem(" Ratinng ", rating10);
            
            
            
        });
        
        $(".m10-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title10);
            localStorage.setItem(" Plot ", plot10);
            localStorage.setItem(" Poster ", poster10);
            
        });
    };
    
    var apiRequest11 = 'http://www.omdbapi.com/?i=tt1502407&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest11, moviecallback11);
        
    function moviecallback11(movieData11){
        console.log(movieData11);
    
    var poster11 = movieData11.Poster;
    var title11 = movieData11.Title;
    var poster11 = movieData11.Poster;
    var title11 = movieData11.Title;
    var plot11 = movieData11.Plot;
    var country11 = movieData11.Country;
    var genre11 = movieData11.Genre;
    var director11 = movieData11.Director;
    var year11 = movieData11.Year;
    var rating11 = movieData11.imdbRating;
        
        
        
        $(".movie-eleven").css("background-image", "url(" +poster11+")");
        $(".title-11").text(title11);
        
        $(".m11-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title11);
            localStorage.setItem(" Plot ", plot11);
            localStorage.setItem(" Poster ", poster11);
            localStorage.setItem(" Country ", country11);
            localStorage.setItem(" Genre ", genre11);
            localStorage.setItem(" Director ", director11);
            localStorage.setItem(" Year ", year11);
            localStorage.setItem(" Ratinng ", rating11);
            
            
            
        });
        
        $(".m11-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title11);
            localStorage.setItem(" Plot ", plot11);
            localStorage.setItem(" Poster ", poster11);
            
        });
    };
    
    var apiRequest12 = 'http://www.omdbapi.com/?i=tt0088763&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest12, moviecallback12);
        
    function moviecallback12(movieData12){
        console.log(movieData12);
    
    var poster12 = movieData12.Poster;
    var title12 = movieData12.Title;
    var poster12 = movieData12.Poster;
    var title12 = movieData12.Title;
    var plot12 = movieData12.Plot;
    var country12 = movieData12.Country;
    var genre12 = movieData12.Genre;
    var director12 = movieData12.Director;
    var year12 = movieData12.Year;
    var rating12 = movieData12.imdbRating;
        
        
        
        $(".movie-twelve").css("background-image", "url(" +poster12+")");
        $(".title-12").text(title12);
        
        $(".m12-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title12);
            localStorage.setItem(" Plot ", plot12);
            localStorage.setItem(" Poster ", poster12);
            localStorage.setItem(" Country ", country12);
            localStorage.setItem(" Genre ", genre12);
            localStorage.setItem(" Director ", director12);
            localStorage.setItem(" Year ", year12);
            localStorage.setItem(" Ratinng ", rating12);
            
            
            
        });
        
        $(".m12-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title12);
            localStorage.setItem(" Plot ", plot12);
            localStorage.setItem(" Poster ", poster12);
            
        });
    };
    
    var apiRequest13 = 'http://www.omdbapi.com/?i=tt0114709&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest13, moviecallback13);
        
    function moviecallback13(movieData13){
        console.log(movieData13);
    
    var poster13 = movieData13.Poster;
    var title13 = movieData13.Title;
    var poster13 = movieData13.Poster;
    var title13 = movieData13.Title;
    var plot13 = movieData13.Plot;
    var country13 = movieData13.Country;
    var genre13 = movieData13.Genre;
    var director13 = movieData13.Director;
    var year13 = movieData13.Year;
    var rating13 = movieData13.imdbRating;
                
        
        $(".movie-thirteen").css("background-image", "url(" +poster13+")");
        $(".title-13").text(title13);
        
        $(".m13-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title13);
            localStorage.setItem(" Plot ", plot13);
            localStorage.setItem(" Poster ", poster13);
            localStorage.setItem(" Country ", country13);
            localStorage.setItem(" Genre ", genre13);
            localStorage.setItem(" Director ", director13);
            localStorage.setItem(" Year ", year13);
            localStorage.setItem(" Ratinng ", rating13);
            
            
            
        });
        
        $(".m13-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title13);
            localStorage.setItem(" Plot ", plot13);
            localStorage.setItem(" Poster ", poster13);
            
        });
    };
    
    var apiRequest14 = 'http://www.omdbapi.com/?i=tt0361748&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest14, moviecallback14);
        
    function moviecallback14(movieData14){
        console.log(movieData14);
    
    var poster14 = movieData14.Poster;
    var title14 = movieData14.Title;
    var poster14 = movieData14.Poster;
    var title14 = movieData14.Title;
    var plot14 = movieData14.Plot;
    var country14 = movieData14.Country;
    var genre14 = movieData14.Genre;
    var director14 = movieData14.Director;
    var year14 = movieData14.Year;
    var rating14 = movieData14.imdbRating;
        
        
        
        $(".movie-fourteen").css("background-image", "url(" +poster14+")");
        $(".title-14").text(title14);
        
        $(".m14-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title14);
            localStorage.setItem(" Plot ", plot14);
            localStorage.setItem(" Poster ", poster14);
            localStorage.setItem(" Country ", country14);
            localStorage.setItem(" Genre ", genre14);
            localStorage.setItem(" Director ", director14);
            localStorage.setItem(" Year ", year14);
            localStorage.setItem(" Ratinng ", rating14);
            
            
            
        });
        
        $(".m14-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title14);
            localStorage.setItem(" Plot ", plot14);
            localStorage.setItem(" Poster ", poster14);
            
        });
    };
    
    var apiRequest15 = 'http://www.omdbapi.com/?i=tt0012349&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest15, moviecallback15);
        
    function moviecallback15(movieData15){
        console.log(movieData15);
    
    var poster15 = movieData15.Poster;
    var title15 = movieData15.Title;
    var poster15 = movieData15.Poster;
    var title15 = movieData15.Title;
    var plot15 = movieData15.Plot;
    var country15 = movieData15.Country;
    var genre15 = movieData15.Genre;
    var director15 = movieData15.Director;
    var year15 = movieData15.Year;
    var rating15 = movieData15.imdbRating;
        
        
        
        $(".movie-fiveteen").css("background-image", "url(" +poster15+")");
        $(".title-15").text(title15);
        
        $(".m15-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title15);
            localStorage.setItem(" Plot ", plot15);
            localStorage.setItem(" Poster ", poster15);
            localStorage.setItem(" Country ", country15);
            localStorage.setItem(" Genre ", genre15);
            localStorage.setItem(" Director ", director15);
            localStorage.setItem(" Year ", year15);
            localStorage.setItem(" Ratinng ", rating15);
            
            
            
        });
        
        $(".m15-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title15);
            localStorage.setItem(" Plot ", plot15);
            localStorage.setItem(" Poster ", poster15);
            
        });
    };
    
    var apiRequest16 = 'http://www.omdbapi.com/?i=tt0086250&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest16, moviecallback16);
        
    function moviecallback16(movieData16){
        console.log(movieData16);
    
    var poster16 = movieData16.Poster;
    var title16 = movieData16.Title;
    var plot16 = movieData16.Plot;
    var country16 = movieData16.Country;
    var genre16 = movieData16.Genre;
    var director16 = movieData16.Director;
    var year16 = movieData16.Year;
    var rating16 = movieData16.imdbRating;
        
        
        $(".movie-sixteen").css("background-image", "url(" +poster16+")");
        $(".title-16").text(title16);
        
        $(".m16-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title16);
            localStorage.setItem(" Plot ", plot16);
            localStorage.setItem(" Poster ", poster16);
            localStorage.setItem(" Country ", country16);
            localStorage.setItem(" Genre ", genre16);
            localStorage.setItem(" Director ", director16);
            localStorage.setItem(" Year ", year16);
            localStorage.setItem(" Ratinng ", rating16);
            
            
            
        });
        
        $(".m16-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title16);
            localStorage.setItem(" Plot ", plot16);
            localStorage.setItem(" Poster ", poster16);
            
        });
        
    };
    
    var apiRequest17 = 'http://www.omdbapi.com/?i=tt0076759&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest17, moviecallback17);
        
    function moviecallback17(movieData17){
        console.log(movieData17);
    
    var poster17 = movieData17.Poster;
    var title17 = movieData17.Title;
    var poster17 = movieData17.Poster;
    var title17 = movieData17.Title;
    var plot17 = movieData17.Plot;
    var country17 = movieData17.Country;
    var genre17 = movieData17.Genre;
    var director17 = movieData17.Director;
    var year17 = movieData17.Year;
    var rating17 = movieData17.imdbRating;
        
        
        
        $(".movie-seventeen").css("background-image", "url(" +poster17+")");
        $(".title-17").text(title17);
        
        $(".m17-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title17);
            localStorage.setItem(" Plot ", plot17);
            localStorage.setItem(" Poster ", poster17);
            localStorage.setItem(" Country ", country17);
            localStorage.setItem(" Genre ", genre17);
            localStorage.setItem(" Director ", director17);
            localStorage.setItem(" Year ", year17);
            localStorage.setItem(" Ratinng ", rating17);
            
            
            
        });
        
        $(".m17-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title17);
            localStorage.setItem(" Plot ", plot17);
            localStorage.setItem(" Poster ", poster17);
            
        });
    };
    
    var apiRequest18 = 'http://www.omdbapi.com/?i=tt3748528&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest18, moviecallback18);
        
    function moviecallback18(movieData18){
        console.log(movieData18);
    
    var poster18 = movieData18.Poster;
    var title18 = movieData18.Title;
    var poster18 = movieData18.Poster;
    var title18 = movieData18.Title;
    var plot18 = movieData18.Plot;
    var country18 = movieData18.Country;
    var genre18 = movieData18.Genre;
    var director18 = movieData18.Director;
    var year18 = movieData18.Year;
    var rating18 = movieData18.imdbRating;
                
        
        $(".movie-eightteen").css("background-image", "url(" +poster18+")");
        $(".title-18").text(title18);
        
        $(".m18-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title18);
            localStorage.setItem(" Plot ", plot18);
            localStorage.setItem(" Poster ", poster18);
            localStorage.setItem(" Country ", country18);
            localStorage.setItem(" Genre ", genre18);
            localStorage.setItem(" Director ", director18);
            localStorage.setItem(" Year ", year18);
            localStorage.setItem(" Ratinng ", rating18);
            
            
            
        });
        
        $(".m18-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title18);
            localStorage.setItem(" Plot ", plot18);
            localStorage.setItem(" Poster ", poster18);
            
        });
    };
    
    var apiRequest19 = 'http://www.omdbapi.com/?i=tt2527336&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest19, moviecallback19);
        
    function moviecallback19(movieData19){
        console.log(movieData19);
    
    var poster19 = movieData19.Poster;
    var title19 = movieData19.Title;
    var poster19 = movieData19.Poster;
    var title19 = movieData19.Title;
    var plot19 = movieData19.Plot;
    var country19 = movieData19.Country;
    var genre19 = movieData19.Genre;
    var director19 = movieData19.Director;
    var year19 = movieData19.Year;
    var rating19 = movieData19.imdbRating;
        
        
        
        $(".movie-nineteen").css("background-image", "url(" +poster19+")");
        $(".title-19").text(title19);
        
        $(".m19-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title19);
            localStorage.setItem(" Plot ", plot19);
            localStorage.setItem(" Poster ", poster19);
            localStorage.setItem(" Country ", country19);
            localStorage.setItem(" Genre ", genre19);
            localStorage.setItem(" Director ", director19);
            localStorage.setItem(" Year ", year19);
            localStorage.setItem(" Ratinng ", rating19);
            
            
            
        });
        
        $(".m19-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title19);
            localStorage.setItem(" Plot ", plot19);
            localStorage.setItem(" Poster ", poster19);
            
        });
    };
    
    var apiRequest20 = 'http://www.omdbapi.com/?i=tt2488496&apikey=c1d7f8f6';
    
    $.getJSON(apiRequest20, moviecallback20);
        
    function moviecallback20(movieData20){
        console.log(movieData20);
    
    var poster20 = movieData20.Poster;
    var title20 = movieData20.Title;
    var poster20 = movieData20.Poster;
    var title20 = movieData20.Title;
    var plot20 = movieData20.Plot;
    var country20 = movieData20.Country;
    var genre20 = movieData20.Genre;
    var director20 = movieData20.Director;
    var year20 = movieData20.Year;
    var rating20 = movieData20.imdbRating;
        
        
        
        $(".movie-twenty").css("background-image", "url(" +poster20+")");
        $(".title-20").text(title20);
        
        $(".m20-vd").on("click", function(){
            
            localStorage.setItem(" Title ", title20);
            localStorage.setItem(" Plot ", plot20);
            localStorage.setItem(" Poster ", poster20);
            localStorage.setItem(" Country ", country20);
            localStorage.setItem(" Genre ", genre20);
            localStorage.setItem(" Director ", director20);
            localStorage.setItem(" Year ", year20);
            localStorage.setItem(" Ratinng ", rating20);
            
            
            
        });
        
        $(".m20-wl").on("click", function(){
            
            localStorage.setItem(" Title ", title20);
            localStorage.setItem(" Plot ", plot20);
            localStorage.setItem(" Poster ", poster20);
            
        });
    };
    
    //Filter work
    
    
    
    
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
    
    $(".movie-six").mouseenter(function(){
        $(".m6-overlay").css("visibility" , "visible");
        $(".m6-vd").css("visibility" , "visible");
        $(".m6-wl").css("visibility" , "visible");
        $(".title-6").css("visibility" , "visible");
    });
    
    $(".movie-six").mouseleave(function(){
        $(".m6-overlay").css("visibility" , "hidden");
        $(".m6-vd").css("visibility" , "hidden");
        $(".m6-wl").css("visibility" , "hidden");
        $(".title-6").css("visibility" , "hidden");
    });
    
    $(".movie-seven").mouseenter(function(){
        $(".m7-overlay").css("visibility" , "visible");
        $(".m7-vd").css("visibility" , "visible");
        $(".m7-wl").css("visibility" , "visible");
        $(".title-7").css("visibility" , "visible");
    });
    
    $(".movie-seven").mouseleave(function(){
        $(".m7-overlay").css("visibility" , "hidden");
        $(".m7-vd").css("visibility" , "hidden");
        $(".m7-wl").css("visibility" , "hidden");
        $(".title-7").css("visibility" , "hidden");
    });
    
    $(".movie-eight").mouseenter(function(){
        $(".m8-overlay").css("visibility" , "visible");
        $(".m8-vd").css("visibility" , "visible");
        $(".m8-wl").css("visibility" , "visible");
        $(".title-8").css("visibility" , "visible");
    });
    
    $(".movie-eight").mouseleave(function(){
        $(".m8-overlay").css("visibility" , "hidden");
        $(".m8-vd").css("visibility" , "hidden");
        $(".m8-wl").css("visibility" , "hidden");
        $(".title-8").css("visibility" , "hidden");
    });
    
    $(".movie-nine").mouseenter(function(){
        $(".m9-overlay").css("visibility" , "visible");
        $(".m9-vd").css("visibility" , "visible");
        $(".m9-wl").css("visibility" , "visible");
        $(".title-9").css("visibility" , "visible");
    });
    
    $(".movie-nine").mouseleave(function(){
        $(".m9-overlay").css("visibility" , "hidden");
        $(".m9-vd").css("visibility" , "hidden");
        $(".m9-wl").css("visibility" , "hidden");
        $(".title-9").css("visibility" , "hidden");
    });
    
    $(".movie-ten").mouseenter(function(){
        $(".m10-overlay").css("visibility" , "visible");
        $(".m10-vd").css("visibility" , "visible");
        $(".m10-wl").css("visibility" , "visible");
        $(".title-10").css("visibility" , "visible");
    });
    
    $(".movie-ten").mouseleave(function(){
        $(".m10-overlay").css("visibility" , "hidden");
        $(".m10-vd").css("visibility" , "hidden");
        $(".m10-wl").css("visibility" , "hidden");
        $(".title-10").css("visibility" , "hidden");
    });
    
    $(".movie-eleven").mouseenter(function(){
        $(".m11-overlay").css("visibility" , "visible");
        $(".m11-vd").css("visibility" , "visible");
        $(".m11-wl").css("visibility" , "visible");
        $(".title-11").css("visibility" , "visible");
    });
    
    $(".movie-eleven").mouseleave(function(){
        $(".m11-overlay").css("visibility" , "hidden");
        $(".m11-vd").css("visibility" , "hidden");
        $(".m11-wl").css("visibility" , "hidden");
        $(".title-11").css("visibility" , "hidden");
    });
    
    $(".movie-twelve").mouseenter(function(){
        $(".m12-overlay").css("visibility" , "visible");
        $(".m12-vd").css("visibility" , "visible");
        $(".m12-wl").css("visibility" , "visible");
        $(".title-12").css("visibility" , "visible");
    });
    
    $(".movie-twelve").mouseleave(function(){
        $(".m12-overlay").css("visibility" , "hidden");
        $(".m12-vd").css("visibility" , "hidden");
        $(".m12-wl").css("visibility" , "hidden");
        $(".title-12").css("visibility" , "hidden");
    });
    
    $(".movie-thirteen").mouseenter(function(){
        $(".m13-overlay").css("visibility" , "visible");
        $(".m13-vd").css("visibility" , "visible");
        $(".m13-wl").css("visibility" , "visible");
        $(".title-13").css("visibility" , "visible");
    });
    
    $(".movie-thirteen").mouseleave(function(){
        $(".m13-overlay").css("visibility" , "hidden");
        $(".m13-vd").css("visibility" , "hidden");
        $(".m13-wl").css("visibility" , "hidden");
        $(".title-13").css("visibility" , "hidden");
    });
    
    $(".movie-fourteen").mouseenter(function(){
        $(".m14-overlay").css("visibility" , "visible");
        $(".m14-vd").css("visibility" , "visible");
        $(".m14-wl").css("visibility" , "visible");
        $(".title-14").css("visibility" , "visible");
    });
    
    $(".movie-fourteen").mouseleave(function(){
        $(".m14-overlay").css("visibility" , "hidden");
        $(".m14-vd").css("visibility" , "hidden");
        $(".m14-wl").css("visibility" , "hidden");
        $(".title-14").css("visibility" , "hidden");
    });
    
    $(".movie-fiveteen").mouseenter(function(){
        $(".m15-overlay").css("visibility" , "visible");
        $(".m15-vd").css("visibility" , "visible");
        $(".m15-wl").css("visibility" , "visible");
        $(".title-15").css("visibility" , "visible");
    });
    
    $(".movie-fiveteen").mouseleave(function(){
        $(".m15-overlay").css("visibility" , "hidden");
        $(".m15-vd").css("visibility" , "hidden");
        $(".m15-wl").css("visibility" , "hidden");
        $(".title-15").css("visibility" , "hidden");
    });
    
    $(".movie-sixteen").mouseenter(function(){
        $(".m16-overlay").css("visibility" , "visible");
        $(".m16-vd").css("visibility" , "visible");
        $(".m16-wl").css("visibility" , "visible");
        $(".title-16").css("visibility" , "visible");
    });
    
    $(".movie-sixteen").mouseleave(function(){
        $(".m16-overlay").css("visibility" , "hidden");
        $(".m16-vd").css("visibility" , "hidden");
        $(".m16-wl").css("visibility" , "hidden");
        $(".title-16").css("visibility" , "hidden");
    });
    
    $(".movie-seventeen").mouseenter(function(){
        $(".m17-overlay").css("visibility" , "visible");
        $(".m17-vd").css("visibility" , "visible");
        $(".m17-wl").css("visibility" , "visible");
        $(".title-17").css("visibility" , "visible");
    });
    
    $(".movie-seventeen").mouseleave(function(){
        $(".m17-overlay").css("visibility" , "hidden");
        $(".m17-vd").css("visibility" , "hidden");
        $(".m17-wl").css("visibility" , "hidden");
        $(".title-17").css("visibility" , "hidden");
    });
    
    $(".movie-eightteen").mouseenter(function(){
        $(".m18-overlay").css("visibility" , "visible");
        $(".m18-vd").css("visibility" , "visible");
        $(".m18-wl").css("visibility" , "visible");
        $(".title-18").css("visibility" , "visible");
    });
    
    $(".movie-eightteen").mouseleave(function(){
        $(".m18-overlay").css("visibility" , "hidden");
        $(".m18-vd").css("visibility" , "hidden");
        $(".m18-wl").css("visibility" , "hidden");
        $(".title-18").css("visibility" , "hidden");
    });
    
    $(".movie-nineteen").mouseenter(function(){
        $(".m19-overlay").css("visibility" , "visible");
        $(".m19-vd").css("visibility" , "visible");
        $(".m19-wl").css("visibility" , "visible");
        $(".title-19").css("visibility" , "visible");
    });
    
    $(".movie-nineteen").mouseleave(function(){
        $(".m19-overlay").css("visibility" , "hidden");
        $(".m19-vd").css("visibility" , "hidden");
        $(".m19-wl").css("visibility" , "hidden");
        $(".title-19").css("visibility" , "hidden");
    });
    
    $(".movie-twenty").mouseenter(function(){
        $(".m20-overlay").css("visibility" , "visible");
        $(".m20-vd").css("visibility" , "visible");
        $(".m20-wl").css("visibility" , "visible");
        $(".title-20").css("visibility" , "visible");
    });
    
    $(".movie-twenty").mouseleave(function(){
        $(".m20-overlay").css("visibility" , "hidden");
        $(".m20-vd").css("visibility" , "hidden");
        $(".m20-wl").css("visibility" , "hidden");
        $(".title-20").css("visibility" , "hidden");
    });
});