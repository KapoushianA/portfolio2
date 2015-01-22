/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $(".oranges").css("background-color", "cyan"); 
    $("p:first").css("color", "blue");
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("h1").bind("click", mouseClick);   
    //these are id's//
    $('#replaceWText').bind('click', replaceWText);
    $('#addPara').bind('click', addAPara);
    $('#removePara').bind('click', removeAPara);   
    
    $('#hide').bind('click', hideThePage);
    $('#show').bind('click', showThePage);
    
    $('#superHumans').accordion({header: "h3"});
    $('#superHumans').css('width', '400px');
    
    $('h3').css('background', 'cyan');
    
    
});
//hide page moves the page to the left//
function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}
//show page brings back the page//
function showThePage(){
    $('div').show('fold', {}, 1500);
    $('#show').hide('puff', {}, 1500);
}
//remove a para removes a paragraph//
function removeAPara(){
    $('#randPara p:last').remove();
}
//this replaces the text when you click on it//
function replaceWText(){
    $('#randPara').append('Replaced!');
}
//hover over armen is cool and it will change//
function mouseOutMe (){
    $("h1").html("Welcome");
}
//this is the switch from hover//
function mouseOverMe (){
    $("h1").html("Hovered");
}
//this changes all the text to what i put in the mouse click//
function mouseClick (){
    $("p").html("Pop-UP");
}
//this keeps adding paragraphs when clicked//
function addAPara() {
    $('#randPara').append('<p>Boom</p>');
}
