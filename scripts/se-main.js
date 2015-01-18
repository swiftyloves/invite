$(document).ready(function(){

    console.log('navigator.userAgen: ',navigator.userAgen);
    $('#sequence').css('display','block');
    var options = {
        // autoPlay: true,
        autoPlayDelay: 1500,
        preventDelayWhenReversingAnimations: true,
        preloader: true,
        KeyEvents: {
            right: "next"
        }
    }
    var sequence = $("#sequence").sequence(options).data("sequence");
    console.log(sequence.prev);
    sequence.next = function (){
        var a=this;id=(a.currentFrameID!==a.numberOfFrames)?(a.currentFrameID+1):(a.currentFrameID),(a.active===!1||void 0===a.active?a.goTo(id,1):a.goTo(id,1,!0))
    }
    sequence.prev = function (){
        var a=this;id=(1===a.currentFrameID)?1:a.currentFrameID-1,a.active===!1||void 0===a.active?a.goTo(id,-1):a.goTo(id,-1,!0)
    }
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.cake').addClass('cake-mobile');
        $('.table').addClass('table-mobile');
        $('.beckie').addClass('beckie-mobile');
        $('.laugh').addClass('laugh-mobile');
    }
});