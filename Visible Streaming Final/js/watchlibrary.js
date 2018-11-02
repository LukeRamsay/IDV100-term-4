$(function(){
  
   apiRequest.onload = function(){
	 var data = JSON.parse(this.response);
	   
	   function createContainers(img_scr){
		   $(".container-10").append("<div class='container-10 col-xs-3'><img src=" + img_src + "></div>")
	   }
   
	   for(i = 0; i < data.photos.length; i++){
			img_src =data.photos[i].img_src;
			currentImages = 1 + i;
			
			createContainers(img_src);
		}
   
   
   
  
   }
});

$(".container-10").on("click", function(){
			var storageReference = +$(this).find("#photo-id").text();
			console.log(storageReference);
		
			for(i = 0; i < data.photos.length; i++){
				
				if( data.photos[i].id === storageReference){
					var imageSource = data.photos[i].img_src
					loacalStorage.setItem("imageSource",imageSource);
					
				}
				
			}
		apiRequest.send();
	
		});