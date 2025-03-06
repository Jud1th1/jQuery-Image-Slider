/* Change the slider so that it runs on a timer instead of using the next and prev buttons
Additional Challenge: How can you make your slideshow stop changing slides, 
while a use hovers their mouse over the slides? */

//1. Remove unneeded bits-> i.e the buttons in the html

//2. Remove the click handlers. 
    //For the next button remove the first line and closing braces,leave the guts
//3. Add the setInterval function which takes two parameters. 
    // The first is a function that you pass in
    // The second is the amount of time before it goes onto the next slide

$(window).on('load', function(){
    'use strict'

    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageWidth * imageCount) + 'px';
    let leftPosition = 0;
    let counter = 0;

    $('slider ul').css("width", totalWidth);

    let mySlider = setInterval( slider,3000); //running slider function for 3 seconds

    function slider(){
        counter++;
            //restart counter
            if(counter === imageCount){
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
                $('#slider ul').animate({left: leftPosition}, 700, 'easeInQuad');
            }
    };

    document.getElementById('slider').addEventListener('mouseover', function(){
        clearInterval(mySlider);
    });

    document.getElementById('slider').addEventListener('mouseout', function(){
        mySlider = setInterval( slider,3000);
    });
});