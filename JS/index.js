///  <reference types="../@types/jquery"/>

$('.icon').on('click' , function() {
    $('.sideBar').animate({width: 'toggle'} , 600);
});

$('.btn-close').on('click' , function() {
    $('.sideBar').animate({width: 'toggle'} , 600);
});

$('a[href^="#"]').on('click', function(e) {

    let secId = $(e.target).attr('href');
    let secOff = $(secId).offset().top;

    $('body').animate({ scrollTop: secOff }, 1000);
    $('.sideBar').animate({width: 'toggle'} , 600);
});

$('.num').on('click' , function(e) {
    $(e.target).next().slideToggle(500);
    $(e.target).parent().siblings().find('p').slideUp(500);
});

let currentDate = new Date();
let targetDate = new Date('2025-05-25T12:00:00');
let diff = targetDate.getTime() - currentDate.getTime();

function countDown() {
    let remainingTime = diff - (new Date().getTime() - currentDate.getTime());

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((135326526 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    $('.seconds h3').text(`${seconds} S`);
    $('.minutes h3').text(`${minutes} M`);
    $('.hours h3').text(`${hours} H`);
    $('.days h3').text(`${days} D`);
};

setInterval(countDown , 1000);
$(function() { countDown() });

$('textarea').on('input' , function() {
    let chars = $('textarea').val().length;
    let count = 100;
    
    $('.number').text(count - chars);
});