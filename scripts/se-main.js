$(document).ready(function(){
    console.log('navigator.userAgen: ',navigator.userAgen);
    if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#sequence').css('display','block');
        var options = {
            autoPlay: true,
            autoPlayDelay: 3000
        }
        // var sequence = $("#sequence").sequence(options).data("sequence");
        var sequence = $("#sequence").sequence().data("sequence");
        $('.device').css('display','none');
    }else{
        $('.device').css('display','block');
        $('#sequence').css('display','none');
    }
});