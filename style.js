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
    $('#playlist li').on('click',function(){ 
    $(this).addClass('play');
    });
    var audio;
    
    initAuto($('#playlist li:first-child'));
    
    
    function initAuto(element){
        var song = element.attr('song');
        var title = element.text();
        var cover = element.attr('cover');
        var artist = element.attr('artist');
        
//        creat audio obgect
         
 audio = new Audio('songs/'+song);

        
        $('.song-name').text(title);
//        insert cover
        $('.cover').attr('src','image/'+cover);
        $('#playlist li').removeClass('active');
       element.addClass('active');
    };
//    -----sound--system
   

//----------play----pause
$('#play').click(function(){
    
    audio.play();
});
    
  $('#pause').click(function(){
    
    audio.pause();
}); 
    
   
    
    
    
    
 $(audio).bind("timeupdate",function(){
     
     $('#duration').html(formatTime(this.currentTime))
     
         var valPro= 0;
    if(audio.currentTime>0){
valPro= Math.floor((100/audio.duration)*audio.currentTime);
        $(".progress").css('width',valPro +'%');
    }
     
     console.log(valPro);
 });
     
function formatTime(seconds){
    var seconds= Math.round(seconds);
    var minutes = Math.floor(seconds/60);
    seconds= Math.floor(seconds % 60);
     if (seconds<10){
         seconds='0'+seconds;
     }
    
    

  return minutes+":"+seconds;  
    
};

     
    

    
        
        
    

//----------play ------pause
   
//-------playlist------    
    
    
    
});