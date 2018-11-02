$(function(){
    $('[data-toggle="popover"]').popover();
});

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

$(function(){
  
  var api1 = 'http://www.omdbapi.com/?i=tt7040874&apikey=c1d7f8f6';
	
	$.getJSON(api1, movie1);
	
		function movie1(moviedata1){
			console.log(moviedata1);
				var poster1 = moviedata1.Poster;
				var title1 = moviedata1.Title;
			
		$(".poster-one").css("background-image", "url(" + poster1 + ")");
		$(".title-one").text(title1);
			
			
		};
	
		$(".poster-one").on("mouseenter" , function(){
				$(".overlay-1").css("visibility", "visible");
			});
	
		$(".poster-one").on("mouseleave" , function(){
				$(".overlay-1").css("visibility", "hidden");
			});
	
	
	
	
	
	var api2 = 'http://www.omdbapi.com/?i=tt3104988&apikey=c1d7f8f6';
	
	$.getJSON(api2, movie2);
	
		function movie2(moviedata2){
			console.log(moviedata2);
				var poster2 = moviedata2.Poster;
				var title2 = moviedata2.Title;
			
		$(".poster-two").css("background-image", "url(" + poster2 + ")");
		$(".title-two").text(title2);
			
		};
	
		$(".poster-two").on("mouseenter" , function(){
				$(".overlay-2").css("visibility", "visible");
			});
	
		$(".poster-two").on("mouseleave" , function(){
				$(".overlay-2").css("visibility", "hidden");
			});
	
	
	var api3 = 'http://www.omdbapi.com/?i=tt3846674&apikey=c1d7f8f6';
	
	$.getJSON(api3, movie3);
	
		function movie3(moviedata3){
			console.log(moviedata3);
				var poster3 = moviedata3.Poster;
				var title3 = moviedata3.Title;
			
		$(".poster-three").css("background-image", "url(" + poster3 + ")");
		$(".title-three").text(title3);
			
		};
	
		$(".poster-three").on("mouseenter" , function(){
				$(".overlay-3").css("visibility", "visible");
			});
	
		$(".poster-three").on("mouseleave" , function(){
				$(".overlay-3").css("visibility", "hidden");
			});
	
	var api4 = 'http://www.omdbapi.com/?i=tt5304992&apikey=c1d7f8f6';
	
	$.getJSON(api4, movie4);
	
		function movie4(moviedata4){
			console.log(moviedata4);
				var poster4 = moviedata4.Poster;
				var title4 = moviedata4.Title;
			
		$(".poster-four").css("background-image", "url(" + poster4 + ")");
		$(".title-four").text(title4);
			
		};
	
		$(".poster-four").on("mouseenter" , function(){
				$(".overlay-4").css("visibility", "visible");
			});
	
		$(".poster-four").on("mouseleave" , function(){
				$(".overlay-4").css("visibility", "hidden");
			});
	
	var api5 = 'http://www.omdbapi.com/?i=tt5164432&apikey=c1d7f8f6';
	
	$.getJSON(api5, movie5);
	
		function movie5(moviedata5){
			console.log(moviedata5);
				var poster5 = moviedata5.Poster;
				var title5 = moviedata5.Title;
			
		$(".poster-five").css("background-image", "url(" + poster5 + ")");
		$(".title-five").text(title5);
			
		};
	
		$(".poster-five").on("mouseenter" , function(){
				$(".overlay-5").css("visibility", "visible");
			});
	
		$(".poster-five").on("mouseleave" , function(){
				$(".overlay-5").css("visibility", "hidden");
			});
	
	var api6 = 'http://www.omdbapi.com/?i=tt6512428&apikey=c1d7f8f6';
	
	$.getJSON(api6, movie6);
	
		function movie6(moviedata6){
			console.log(moviedata6);
				var poster6 = moviedata6.Poster;
				var title6 = moviedata6.Title;
			
		$(".poster-six").css("background-image", "url(" + poster6 + ")");
		$(".title-six").text(title6);
			
		};
	
		$(".poster-six").on("mouseenter" , function(){
				$(".overlay-6").css("visibility", "visible");
			});
	
		$(".poster-six").on("mouseleave" , function(){
				$(".overlay-6").css("visibility", "hidden");
			});
	
	var api7 = 'http://www.omdbapi.com/?i=tt4154756&apikey=c1d7f8f6';
	
	$.getJSON(api7, movie7);
	
		function movie7(moviedata7){
			console.log(moviedata7);
				var poster7 = moviedata7.Poster;
				var title7 = moviedata7.Title;
			
		$(".poster-seven").css("background-image", "url(" + poster7 + ")");
		$(".title-seven").text(title7);
			
		};
	
		$(".poster-seven").on("mouseenter" , function(){
				$(".overlay-7").css("visibility", "visible");
			});
	
		$(".poster-seven").on("mouseleave" , function(){
				$(".overlay-7").css("visibility", "hidden");
			});
				
	var api8 = 'http://www.omdbapi.com/?i=tt5463162&apikey=c1d7f8f6';
	
	$.getJSON(api8, movie8);
	
		function movie8(moviedata8){
			console.log(moviedata8);
				var poster8 = moviedata8.Poster;
				var title8 = moviedata8.Title;
			
		$(".poster-eight").css("background-image", "url(" + poster8 + ")");
		$(".title-eight").text(title8);
			
		};
	
		$(".poster-eight").on("mouseenter" , function(){
				$(".overlay-8").css("visibility", "visible");
			});
	
		$(".poster-eight").on("mouseleave" , function(){
				$(".overlay-8").css("visibility", "hidden");
			});
  
  	
	
	var api9 = 'http://www.omdbapi.com/?i=tt7040874&apikey=c1d7f8f6';
	
	$.getJSON(api9, movie9);
	
		function movie9(moviedata9){
			console.log(moviedata9);
				var poster9 = moviedata9.Poster;
				var title9 = moviedata9.Title;
			
		$(".poster-one-1").css("background-image", "url(" + poster9 + ")");
		$(".title-one-1").text(title9);
			
			
		};
	
		$(".poster-one-1").on("mouseenter" , function(){
				$(".overlay-9").css("visibility", "visible");
			});
	
		$(".poster-one-1").on("mouseleave" , function(){
				$(".overlay-9").css("visibility", "hidden");
			});
	
	var api10 = 'http://www.omdbapi.com/?i=tt3104988&apikey=c1d7f8f6';
	
	$.getJSON(api10, movie10);
	
		function movie10(moviedata10){
			console.log(moviedata10);
				var poster10 = moviedata10.Poster;
				var title10 = moviedata10.Title;
			
		$(".poster-two-2").css("background-image", "url(" + poster10 + ")");
		$(".title-two-2").text(title10);
			
		};
	
		$(".poster-two-2").on("mouseenter" , function(){
				$(".overlay-9").css("visibility", "visible");
			});
	
		$(".poster-two-2").on("mouseleave" , function(){
				$(".overlay-9").css("visibility", "hidden");
			});
	
	
	var api11 = 'http://www.omdbapi.com/?i=tt3846674&apikey=c1d7f8f6';
	
	$.getJSON(api11, movie11);
	
		function movie11(moviedata11){
			console.log(moviedata11);
				var poster11 = moviedata11.Poster;
				var title11 = moviedata11.Title;
			
		$(".poster-three-3").css("background-image", "url(" + poster11 + ")");
		$(".title-three-3").text(title11);
			
		};
	
		$(".poster-three-3").on("mouseenter" , function(){
				$(".overlay-9").css("visibility", "visible");
			});
	
		$(".poster-three-3").on("mouseleave" , function(){
				$(".overlay-9").css("visibility", "hidden");
			});
	
	var api12 = 'http://www.omdbapi.com/?i=tt5304992&apikey=c1d7f8f6';
	
	$.getJSON(api12, movie12);
	
		function movie12(moviedata12){
			console.log(moviedata12);
				var poster12 = moviedata12.Poster;
				var title12 = moviedata12.Title;
			
		$(".poster-four-4").css("background-image", "url(" + poster12 + ")");
		$(".title-four-4").text(title12);
			
		};
	
		$(".poster-four-4").on("mouseenter" , function(){
				$(".overlay-9").css("visibility", "visible");
			});
	
		$(".poster-four-4").on("mouseleave" , function(){
				$(".overlay-9").css("visibility", "hidden");
			});
	
  });

	

