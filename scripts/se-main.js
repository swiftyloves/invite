$(document).ready(function(){

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
    sequence.next = function (){
        var a=this;id=(a.currentFrameID!==a.numberOfFrames)?(a.currentFrameID+1):(a.currentFrameID),(a.active===!1||void 0===a.active?a.goTo(id,1):a.goTo(id,1,!0))
    }
    sequence.prev = function (){
        var a=this;id=(1===a.currentFrameID)?1:a.currentFrameID-1,a.active===!1||void 0===a.active?a.goTo(id,-1):a.goTo(id,-1,!0)
    }
});