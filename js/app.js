$(document).ready(function() {

    $( ".pasar" ).click(function() {
        var tl = new TimelineMax();
        tl.set('.first', {display: 'none'})
        .set('.second', {display: 'block'})
         .to('.second', .8, {opacity: 1})
      });

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
    .set('.segundo',  {display: 'none', delay: 2})
    .to('.me1', .8, {opacity: 1, delay: 1})
    .to('.me1', .8, {opacity: 0, delay:.4})
    .to('.me3', .6, {opacity: 1})
    .to('.me3', .6, {opacity: 0, delay:.4})
    .to('.me2', .7, {opacity: 1})
    .to('.me2', .7, {opacity: 0, delay:.4})
    .set('.me2, .me1',  {display: 'none'})
    .set('#logo_wc',  {display: 'block'})
    .to('#logo_wc', 2, {opacity: 1, y: 300, delay: 1})
    .to('#logo_wc', .8, {opacity: 0, delay: .5})
    .set('.first', {display: 'none'})
    .set('.second', {display: 'block'})
    .to('.second', .8, {opacity: 1})

    TweenMax.to('.profi', 1, {height: 200, delay: .5})
    TweenMax.to('.worki', 1, {height: 200, delay: .5})
    TweenMax.set('.second, .c1, .c2, .c3, .c4, .hr1, .hr2, .hr3, .txt-wrk, .tlt-wrk, .wrk', {display: 'none', opacity: 0})

    var alturaC = $(".category").outerHeight(true) +20
    console.log(alturaC);

    var tl3 = new TimelineMax();
    tl3.to('.c4', .4, {opacity: 1, display: 'block'})
    .to('.c4', .5, {y: alturaC})
    .set('.c4',  {y:0})
    .set('.c3, .hr3',  {display: 'block'})
    .to('.c3, .hr3', .4, {opacity: 1})
    .to('.c4, .c3, .hr3', .5, {y: alturaC})
    .set('.c4, .c3, .hr3',  {y:0})
    .to('.c2, .hr2', .4, {opacity: 1, display: 'block'})
    .to('.c4, .c3, .hr3, .c2, .hr2', .5, {y: alturaC})
    .set('.c4, .c3, .hr3, .c2, .hr2',  {y:0})
    .to('.c1, .hr1', .4, {opacity: 1, display: 'block'})

    var tl4 = new TimelineMax();
    tl4.to('.tlt-wrk', .1, {opacity: 1, display: 'block'})
    .to('.tlt-wrk', .1, {opacity: 0, display: 'none'})
    .to('.tlt-wrk', .1, {opacity: 1, display: 'block'})
    .to('.tlt-wrk', .1, {opacity: 0, display: 'none'})
    .to('.tlt-wrk', .1, {display: 'block'})
    .to('.tlt-wrk', 1, {opacity: 1})
    .to('.txt-wrk', .1, {opacity: 1, display: 'block'})
    .to('.txt-wrk', .1, {opacity: 0, display: 'none'})
    .to('.txt-wrk', .1, {opacity: 1, display: 'block'})
    .to('.txt-wrk', .1, {opacity: 0, display: 'none'})
    .to('.txt-wrk', .1, {display: 'block'})
    .to('.txt-wrk', 1, {opacity: 1})
    .to('.wrk', 1, {opacity: 1, display: 'block'})



    CSSPlugin.defaultTransformPerspective = 1000;

//we set the backface 
TweenMax.set($(".cardBack"), {rotationY:-180});

$.each($(".cardCont"), function(i,element) {
  
	var frontCard = $(this).children(".cardFront"),
      backCard = $(this).children(".cardBack"),
      tl = new TimelineMax({paused:true});
	
	tl
		.to(frontCard, 1, {rotationY:180})
		.to(backCard, 1, {rotationY:0},0)
		.to(element, .5, {z:50},0)
		.to(element, .5, {z:0},.5);
	
	element.animation = tl;
  
});

$(".cardCont").hover(elOver, elOut);

function elOver() {
    this.animation.play();
}

function elOut() {
    this.animation.reverse();
}


});



