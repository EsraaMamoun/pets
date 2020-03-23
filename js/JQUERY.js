'use strict';

$(function () {
    $('#start').html("Go!");
});

$('p'); //select all element p.

$('#yes').hide();  //hidden the element (id --> yes).

$('.why').show(); // Show elemnt (class --> why).

$('p.pE'); //select all p elemnt whith class pE.

$('p:first'); //select the first p elemnt.

$('p,div'); //select all p and div elemnts.

$('*'); //select all element of the DOM.

$('p a'); //select all a links which are inside paragraph tag.

$(function () {
    var value = $('#n').attr('href');
    alert(value);
});

$(function () {
    var ll = $('#y').attr("href", "https://www.youtube.com/watch?v=-oTq-FfOsBk");
});

$('p a').removeAttr('href');

$(function () {
    var E = $('#b').html(); //return only the text content whith <b> tag.
    alert(E);
});

$(function () {
    var E = $('#b').text(); //return only the text content whithout <b> tag (the HTML markup).
    alert(E);
});

$(function () {
    var e = $("#e").text("Hello!");
});

$(function () {
    var e2 = $("#e2").html("<b> Hello! </b>");  //we use the html becuase we include the HTML markup.
});

var name = $("#name").val();
function submitMe() {
    alert(name);
}

$('#demo1').append(' <b> Esra\'a </b>');

$('#demo1').prepend('Oh, ')

$('#demo2').after(' <b> Esra\'a </b>');

$("#demo2").before('Hi, ');


var txt = $("<span></span>").text(" I'm here");
var txt2 = $("<span></span>").text(" but not  a long time.");
$('#demo3').append(txt,txt2);

$('#demo3').addClass('test');

$('span').removeClass('removeIt');

    $("button").click(function(){
        $("#letSee").toggleClass('red');
    });

