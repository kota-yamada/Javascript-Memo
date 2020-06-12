$(window).scroll(function(){

    // scroll position
    var st = $(window).scrollTop();

    // if can't get scroll positionl, break
    if(st == null) return;

    // where the floating is shown
    var floatElement = $('#');
    var floatElementTop = floatElement.offset().top;

    // where the floating is ended
    var endFloatButton = $('#Contentswrapper > div.result_cont > p.note');
    var endPosi = endFloatButton.offset().top;

    // floating function
    if (matchMedia('(max-width: 999px)').matches) {
        if (st > floatElementTop) {
            // show the floating 

            // off the floating at the specific points
            if (st < endPosi){
                // show the floating 
            } else {
                // off the floating 
            }
        } else {
            // off the floating 
        }
    } 
});
