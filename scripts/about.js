$(function() {

    

    $("#content .sectionTitle").click(function(){

        var oldHeight = $(this).parent().height();
        $(this).parent().height('auto');
        var newHeight = $(this).parent().height();
        $(this).parent().height(oldHeight);
        if( newHeight == oldHeight )
            newHeight = 72;

        $('#content .sectionTitle').not(this).parent().animate({height:'72px'});
        $(this).parent().animate({'height':newHeight+'px'},400,'swing',function(){$(this).height('auto');});
    });
    
});
