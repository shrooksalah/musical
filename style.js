$(function(){
   'use strict';
    var myText ='hello in my world',
   
    
    i=0;
   var typeWriter = setInterval(function(){
    document.getElementById('type').textContent += myText[i];
     i = i + 1;
       
       if(i > myText.length -1){
        clearInterval(typeWriter);
    }
    },200);
    
    
// ----------playlist------
    
    var audio;
    
    initAuto($('#playlist li:first-child'));
    
    
    function initAuto(element){
        var song = element.attr('song');
        var title = element.text();
        var cover = element.attr('cover');
        var artist = element.attr('artist');
        
//        creat audio obgect
         
 audio = new Audio('songs'+song);
        if(!audio.currentTime){
            $('#song-time').html('0.00');
        }
        
        $('.song-name').text(title);
//        insert cover
        $('.cover').attr('src','image/'+cover);
        $('#playlist li').removeClass('active');
       element.addClass('active');
    };
//    -----sound--system
   
  
    
//    $("#volume").hide ();
//$("#volum").click (function (){
//$("#volume").toggle ();
//});
//$("#volum").focusout (function (){
//$("#volume").hide ();
//});
//$("#volume").click (function (){
//$("#volume").show ();
//});
   


   
//-------playlist------    
    
    
    
});