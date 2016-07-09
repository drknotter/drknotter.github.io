$(function() {
    
    var w = $('#header').width();
    $('#header').css({width:'0px'});
    $('#header').animate({width:w+'px'},400,'swing',
                         function(){
                             $(this).width('100%')
                             $('#content').animate({opacity:1.0});
                         });
    
});