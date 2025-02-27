
 $(window).on('load', function(){//need to make sure our window loads before our function runs
    'use strict'

    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageWidth * imageCount) + 'px';
    //add the leftPosition var to change based on which slide is showing 
    let leftPosition = 0;
    let counter = 0;

    $('slider ul').css("width", totalWidth);

    //add click handler for next link and increment the counter.
    //then set the left position to a negative number that ends with 'px'
    //When the link is clicked for the first time the left position will become -400px
    //which slides the whole strip of images to left 400px, putting the second img in the window
    $("#next").click(function(){

        counter++;

        //restart counter
        if(counter === imageCount){
            counter = 0;
        }

        leftPosition = `-${counter * imageWidth}px`;
        //now we need to animate the slide strip using the plugin "easeInQuad"
        $('#slider ul').animate({left: leftPosition}, 700, 'easeInQuad');
    });

    $("#previous").click(function(){

        counter--;

        if (counter < 0) {  // Loop to the last image if counter goes below 0
            counter = imageCount - 1;
        }

        leftPosition = `-${counter * imageWidth}px`;  
        $('#slider ul').animate({left: leftPosition}, 700, 'easeInQuad');
    });

 });


