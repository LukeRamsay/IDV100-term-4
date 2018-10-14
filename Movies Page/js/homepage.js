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