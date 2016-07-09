$(function() {

    $('td .table_thumb').click(
        function() {
            $(this).next('div').css({opacity:0.0,display:'inline'});
            $(this).next('div').animate({opacity:1.0});
        });

    $('td div .close').click(
        function() {
            $(this).parent().animate({opacity:0.0},400,'swing',
                                     function(){
                                         $(this).css({display:'none'});
                                     });
        });
    
});

