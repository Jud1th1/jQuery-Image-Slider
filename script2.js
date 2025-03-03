//Version 2 solution:


$(window).on('load', function(){
    'use strict'

    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageWidth * imageCount) + 'px';
    //add the leftPosition var to change based on which slide is showing 
    let leftPosition = 0;
    let counter = 0;

    $('slider ul').css("width", totalWidth);


    $("#next").click(function(){

        counter++;

        //restart counter
        if(counter === imageCount){
            //clone our ul so that it can repeat when we go prev/next
            $("#slider ul").clone().appendTo("#slider");
            $("#slider ul").last().css("left", imageWidth + "px");

            leftPosition = `-${totalWidth}`;

            $("#slider ul").last().animate({left: 0}, 700, 'easeInQuad');
            $("#slider ul").first().animate({left: leftPosition}, 700, 'easeInQuad', function(){
                $("#slider ul").first().remove();
            });

            counter = 0;
        }
        else{
            leftPosition = `-${counter * imageWidth}px`;
            //now we need to animate the slide strip using the plugin "easeInQuad"
            $('#slider ul').animate({left: leftPosition}, 700, 'easeInQuad');
        }

    });

    $("#previous").click(function(){
        counter--;
        if (counter < 0){
            counter = imageCount -1;

            $("#slider ul").clone().appendTo("#slider");
            $("#slider ul").last().css("left", `-${totalWidth}`);
            leftPosition = `-${counter * imageWidth}px`;
            $("#slider ul").last().animate({left: leftPosition}, 700, "easeInQuad");
            $("#slider ul").first().animate({left: `${imageWidth}px`}, 700, "easeInQuad", function (){
                $("#slider ul").first().remove();
            });
        }else{
            leftPosition = `-${counter * imageWidth}px`;
            $('#slider ul').animate({left: leftPosition}, 700, 'easeInQuad');
        }
    });
    

});

 