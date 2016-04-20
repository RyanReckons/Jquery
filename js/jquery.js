/* HIDE - SHOW */
$(document).ready(function(){
    $("#hide").click(function(){
        $("#first").hide(1000);
    });
    $("#show").click(function(){
        $("#first").show(1000);
    });
});
/* TOGGLE */
$(document).ready(function(){
    $("#tog").click(function(){
        $(".ptog").toggle(300);
    });
});
/* FADE IN */
$(document).ready(function(){
    $("#fadeIn").click(function(){
        $("#fin1").fadeIn();
        $("#fin2").fadeIn("slow");
        $("#fin3").fadeIn(3000);
    });
});
/* FADE OUT */
$(document).ready(function(){
    $("#fadeOut").click(function(){
        $("#fout1").fadeOut();
        $("#fout2").fadeOut("slow");
        $("#fout3").fadeOut(3000);
    });
});
/* FADE TOGGLE */
$(document).ready(function(){
    $("#fadeTog").click(function(){
        $("#ftog1").fadeToggle();
        $("#ftog2").fadeToggle("slow");
        $("#ftog3").fadeToggle(3000);
    });
});
/* FADE TO */
$(document).ready(function(){
    $("#fadeTo").click(function(){
        $("#fto1").fadeTo("slow", 0.15);
        $("#fto2").fadeTo("slow", 0.4);
        $("#fto3").fadeTo("slow", 0.7);
    });
});
/* SIDE DOWN */
$(document).ready(function(){
    $("#slideDwn").click(function(){
        $("#slide1").slideDown("slow");
    });
});
/* SLIDE UP */
$(document).ready(function(){
    $("#slideUp").click(function(){
        $("#slide2").slideUp("slow");
    });
});
/* SLIDE TOGGLE */
$(document).ready(function(){
    $("#slideTog").click(function(){
        $("#slide3").slideToggle("slow");
    });
});
/* ANIMATE */
$(document).ready(function(){
    $("#animate").click(function(){
        $("#Box1").animate({left: '230px'});
    });
});
/* ANIMATE MULTIPLE */
$(document).ready(function(){
    $("#animate2").click(function(){
        $("#Box2").animate({
            left: '200px',
            opacity: '0.5',
            height: '50px',
            width: '50px'
        });
    });
});
/* ANIMATE RELATIVE */
$(document).ready(function(){
    $("#animate3").click(function(){
        $("#Box3").animate({
            left: '230px',
            height: '-=50px',
            width: '-=50px'
        });
    });
});
/* ANIMATE PRE DEFINED */
$(document).ready(function(){
    $("#animate4").click(function(){
        $("#Box4").animate({
            height: 'toggle'
        });
    });
});
/* Animate Queue Functionality */
$(document).ready(function(){
    $("#animate5").click(function(){
        var div = $("#Box5");
        div.animate({height: '30px', opacity: '0.4'}, "slow");
        div.animate({width: '30px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
/* Animate Queue Functionality 2 */
$(document).ready(function(){
    $("#animate6").click(function(){
        var div = $("#Box6");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '5em'}, "slow");
    });
});
/* Animate Queue Functionality 3 */
$(document).ready(function(){
    $("#animate7").click(function(){
        var div = $("#Box7");  
        div.animate({left: '80px'}, "slow");
        div.animate({fontSize: '5em'}, "slow");
    });
});





$(document).ready(function(){
    $("#btn").mouseenter(function(){
        $("#p1").text('Surprise!!!');
      
    });
    $("#btn").mouseleave(function(){
        $("#p1").text('');
    });
});

$(document).ready(function(){
    $("#btn1").mouseenter(function(){
        $("#test1").text("Hello world!");
    });
    $("#btn1").mouseleave(function(){
        $("#test1").text("This is a paragraph.");
    });
});

$(document).ready(function(){
    $("#btn2").mouseenter(function(){
        $("#test2").text("Hello world, how are you!");
    });
    $("#btn2").mouseleave(function(){
        $("#test2").text("This is another paragraph.");
    });
});

$(document).ready(function(){
    
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });
});

$(document).ready(function(){
    $("#btn4").mouseenter(function(){
        console.log($("#test4").text('pickles'));
    });
    $("#btn4").mouseleave(function(){
        console.log($("#test4").text('Hover over button 4 to change me to a pickle!'));
    });
});


/*$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });
});*/
