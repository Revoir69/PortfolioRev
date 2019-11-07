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


    var tl2 = new TimelineMax();
    tl2.set('.primero',  {display: 'none', delay: 3})
    .set('.segundo', {display: 'block', delay: .4})
    .to('.me1', .8, {opacity: 1, delay: 1})
    .to('.me1', .8, {opacity: 0, delay:.4})
    .to('.me3', .6, {opacity: 1})
    .to('.me3', .6, {opacity: 0, delay:.4})
    .to('.me2', .7, {opacity: 1})
    .to('.me2', .7, {opacity: 0, delay:.4})
    .to('.segundo', .8, {opacity: 0})
    .set('.segundo', {display: 'none'})
    .to('#logo_wc', 1, {opacity: 1, delay: 1})
    .to('#logo_wc', .8, {opacity: 0, delay: 1.5})
    .set('.first', {display: 'none'})
    .set('.second', {display: 'block'})
    .to('.second', .8, {opacity: 1})

    TweenMax.to('.profi', 1, {height: 200, delay: .5})
    TweenMax.to('.worki', 1, {height: 200, delay: .5})
    TweenMax.set('.second', {display: 'none', opacity: 0})

});



