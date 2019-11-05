$(document).ready(function() {

    var tl = new TimelineMax({repeat: -1,repeatDelay: 4});

        tl.to('.glitch', 0.1, {skewX:70,ease: Power4.easeInOut})
        .to('.glitch', 0.04, {skewX:0,ease: Power4.easeInOut})
        .to('.glitch', 0.04, {opacity:0})
        .to('.glitch', 0.04, {opacity:1})
        .to('.glitch', 0.04, {x:-20})
        .to('.glitch', 0.04, {x:0})
        .add("split", 0)
        .to('.top', 0.5, {x:-60,ease: Power4.easeInOut},'split')
        .to('.bottom', 0.5, {x:60,ease: Power4.easeInOut},'split')
        .to('.glitch', 0.08, { className: '+=redShadow'},'split')

        .to('h1', 0, { scale:1.1},'split')
        .to('h1', 0, { scale:1}, "+=0.02")

        .to('.glitch', 0.08, { className: '-=redShadow'}, "+=0.09")
        .to('.glitch', 0.03,{ className: '+=greenShadow'},'split')
        .to('.glitch', 0.03,{ className: '-=greenShadow'},"+=0.01")

        .to('.top', 0.2, {x:0,ease: Power4.easeInOut})
        .to('.bottom', 0.2, {x:0,ease: Power4.easeInOut})

        .to('.glitch', 0.02, {scaleY:1.1,ease: Power4.easeInOut})
        .to('.glitch', 0.04, {scaleY:1,ease: Power4.easeInOut})

        var tl1 = new TimelineMax({repeat: -1,repeatDelay: 4, paused: true});

        tl1.to('#photoP', 0.2, {css: { '-webkit-filter': 'invert(90%)' }})
        .to('#photoP', 0.2, {css: { '-webkit-filter': 'none' }})
        .to('#photoP', 0.4, {css: { '-webkit-filter': 'invert(90%)' }})
        .to('#photoP', 0.4, {css: { '-webkit-filter': 'none' }})
        .to('#photoP', 0.1, {css: { '-webkit-filter': 'invert(90%)' }})
        .to('#photoP', 0.1, {css: { '-webkit-filter': 'none' }})

    $("#photoP").hover(function(){
        tl1.play();

    }, function(){
        tl1.pause();
    }); 
 

    TweenMax.to('.profi', 1, {height: 200, delay: .5})
    TweenMax.to('.worki', 1, {height: 200, delay: .5})
});



