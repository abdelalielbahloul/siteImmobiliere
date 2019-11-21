$(document).ready(function() {

    $(document).mousemove(function(e) {
        $('.cursor').css({'top':(e.pageY+10)+'px','left':(e.pageX-4)+'px'});
    });

    $(document).click(function() {
        $('.cursor').addClass('expaind');
        
        setTimeout(() => {
            $('.cursor').removeClass('expaind');
        }, 900);
    });


})