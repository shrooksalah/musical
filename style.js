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
         
 audio = new Audio('songs/'+song);
        if(!audio.currentTime){
            $('#duration').html('0.00');
        }
        
        $('.song-name').text(title);
//        insert cover
        $('.cover').attr('src','image/'+cover);
        $('#playlist li').removeClass('active');
       element.addClass('active');
    };
//    -----sound--system
   
//  --start----progress----
   
        $('.progress').animate({
	
	
	width:'100%',
	
},10000);
//    ------end----progress
//----------play----pause
$('#play').click(function(){
    
    audio.play();
});
    
  $('#pause').click(function(){
    
    audio.pause();
});  
    
//      $(audio).on("canplay", function () {
//        alert(this.duration);
//           var mmmm= audio.duration;
//    console.log(mmmm);
//          
//          
//          
//     var sss= audio.currentTime;
//    console.log(sss);
//    }); 
  
    
    
    
    
    
    function showDuration(){
    $(audio).on("canplay", function () {
    var s =parseInt(audio.currentTime % 60);
   var m =parseInt((audio.currentTime/60 )% 60);
       console.log(s);
        console.log(m);
        
        if(s<10){
            s='0'+s;
        }
        $('#duration').html(m+'.'+s);
        var value=0;
        if(audio.currentTime>0){
            value= Math.floor((100/ audio.duration)*audio.currentTime);
        }
        $(".progress").css('width',value+'s');
        });
        
    
    };
//----------play ------pause
   
//-------playlist------    
    
    
    
});