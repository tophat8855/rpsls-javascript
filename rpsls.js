$(document).ready(function() {
  $('.buttons').on('click', 'button', function(){
    var randoGenerator = Math.floor(Math.random() * 5);
    var computerThrow;
    var userThrow = $(this).text().toLowerCase();
    switch (randoGenerator) {
      case 0: computerThrow = "rock";
      break;
      case 1: computerThrow = "spock";
      break;
      case 2: computerThrow = "paper";
      break;
      case 3: computerThrow = "lizard";
      break;
      case 4: computerThrow = "scissors";
      break;
      default:
        alert('something went wrong');
    }

    var throwArray = ["rock", "spock", "paper", "lizard", "scissors",];

    var computerValue = throwArray.indexOf(computerThrow);
    var userValue = throwArray.indexOf(userThrow);

    var outcome = (userValue - computerValue) % 5;
    if (outcome === -3) { outcome = 2 };
    console.log(outcome);
    var userWins;
    var imageSource;

    var outcomeArray = [computerThrow, userThrow];

    var outcomeCommentary;
    console.log(outcomeArray);

    if (($.inArray('rock', outcomeArray) > -1) && ($.inArray('spock', outcomeArray) > -1)) {
      outcomeCommentary = "Spock vaporizes rock!";
    } else if (($.inArray('rock', outcomeArray) > -1) && ($.inArray('paper', outcomeArray) > -1)) {
      outcomeCommentary = "Paper smothers rock!";
    } else if (($.inArray('rock', outcomeArray) > -1) && ($.inArray('lizard', outcomeArray) > -1)) {
      outcomeCommentary = "Rock crushes lizard!";
    } else if (($.inArray('rock', outcomeArray) > -1) && ($.inArray('scissors', outcomeArray) > -1)) {
      outcomeCommentary = "Rock smashes scissors!";
    } else if (($.inArray('spock', outcomeArray) > -1) && ($.inArray('paper', outcomeArray) > -1)) {
      outcomeCommentary = "Paper disproves Spock";
    } else if (($.inArray('spock', outcomeArray) > -1) && ($.inArray('lizard', outcomeArray) > -1)) {
      outcomeCommentary = "Lizard poisons Spock!";
    } else if (($.inArray('spock', outcomeArray) > -1) && ($.inArray('scissors', outcomeArray) > -1)) {
      outcomeCommentary = "Spock dulls scissors!";
    } else if (($.inArray('paper', outcomeArray) > -1) && ($.inArray('lizard', outcomeArray) > -1)) {
      outcomeCommentary = "Lizard eat paper!";
    } else if (($.inArray('scissors', outcomeArray) > -1) && ($.inArray('paper', outcomeArray) > -1)) {
      outcomeCommentary = "Scissors cuts paper!";
    } else if (($.inArray('lizard', outcomeArray) > -1) && ($.inArray('scissors', outcomeArray) > -1)) {
      outcomeCommentary = "Scissors decapitates lizard!";
    } else {
      outcomeCommentary = "It's a tie. You can't even think differently than a computer, loser.";
    }

    if ((outcome === 1) || (outcome === 2)) {
      userWins = true;
      $('.header').empty();
      $('.header').append('<h1>Computer chose: ' + computerThrow + ' vs You chose: ' + userThrow + ' </h1>');
      $('.header').append('<h2>' + outcomeCommentary + '</h2>');

      imageSource = $('img').attr('src', 'https://www.theproducersperspective.com/wp-content/uploads/2012/06/YouWin.png');
    } else if (outcome === 0){
      $('.header').empty();
      $('.header').append('<h1>Computer chose: ' + computerThrow + ' vs You chose: ' + userThrow + ' </h1>');
      $('.header').append('<h2>' + outcomeCommentary + '</h2>');

      imageSource = $('img').attr('src', 'http://cdn.memegenerator.net/instances/400x/37915339.jpg');
    } else {
      $('.header').empty();
      userWins = false;
      $('.header').append('<h1>Computer chose: ' + computerThrow + ' vs You chose: ' + userThrow + ' </h1>');
      $('.header').append('<h2>' + outcomeCommentary + '</h2>');

      imageSource= $('img').attr('src', 'http://cdn.meme.am/instances/55293053.jpg');
    }

  });
});
