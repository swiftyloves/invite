$(document).ready(function(){
	console.log('this is js!!');
    var options = {
        autoPlay: true,
        autoPlayDelay: 3000
    }
    var sequence = $("#sequence").sequence(options).data("sequence");

    sequence.beforeCurrentFrameAnimatesOut = function(){
        //add code to execute here, such as:
        console.log('animates-out',sequence);
        // alert("Do something before the CURRENT frame animates out");
    };

    sequence.beforeNextFrameAnimatesIn = function(){
        //add code to execute here, such as:
        // $('.my-image').css('hight','100px');
        console.log('animates-in',sequence);

        // alert("Do something before the NEXT frame animates in");
    };
});
