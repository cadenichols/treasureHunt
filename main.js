'use strict';

var $$ = {
  init: function(){
    $$.numOfBoxes = 9;
    $$.turns = 3;
    $$.gameOn = true;
    $$.treasureIndex = Math.floor(Math.random() * $$.numOfBoxes);

    $$.appendBoxes($$.numOfBoxes);

    $('#turns').text($$.turns);
    $('#boxes').on('click', '.box', $$.boxClicked);
  },
  boxClicked: function(e){
    if($$.gameOn && !$(this).hasClass('wrong')){
      if($(this).index() === $$.treasureIndex) {
        $(this).addClass('treasure');
        $('#message').text('You win!');
        $$.gameOn = false;
      } else {
        $(this).addClass('wrong');
        $$.wrongGuess();
      }      
    }
  },
  wrongGuess: function(){
    $('#turns').text(--$$.turns);
    if(!$$.turns){
      $('#message').text('You lose!');
      $$.gameOn = false;
    }
  },
  appendBoxes: function(num){
    var $boxes = [];
    for(var i = 0; i < num; i++){
      var $box = $('<div>').addClass('box');
      $boxes.push($box);
    }
    $('#boxes').append($boxes);
  }
};


$(document).ready($$.init);
