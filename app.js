// Much of the logic that went into this developing this jQuery game from Alex Merced's AM Coder YouTube playlist
// https://www.youtube.com/playlist?list=PLY6oTPmKnKbYC-NRcAFVN4_R5D3HRmKGu


//////////////////////////////
// APP STATE
//////////////////////////////

const state = {
  player1: 0,
  player2: 0,
  player1Turn: true,
  questionNumber: 0,
}

let questions = [];
let questionsCopy = [];
let maxQuestions = 0;
const winScore = 2;


//////////////////////////////
// MAIN DOM ELEMENTS
//////////////////////////////

const $question = $("#question");
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $p1Score = $("#player1 h4");
const $p2Score = $("#player2 h4");


//////////////////////////////
// FUNCIONS
//////////////////////////////

const chooseAnswer = (e, question) => {
  // to-do: fix the current player class toggling
  $("#player1").toggleClass("current-turn");
  $("#player2").toggleClass("current-turn");

  if (e.target.innerText === question.answer) {
    if (state.player1Turn) {
      state.player1++;
      state.player1Turn = !state.player1Turn;
    } else {
      state.player2++;
      state.player1Turn = !state.player1Turn;
    }
    setBoard(questions);
  } else {
    setBoard(questions);
    state.player1Turn = !state.player1Turn;
  }
}


const setBoard = q => {
  // Get a random index with a random question
  const randomIndex = Math.floor(Math.random() * q.length);
  const randomQuestion = q[randomIndex];
  state.questionNumber++;
  if (state.questionNumber === 1) {
    $("#player1").toggleClass("current-turn");
  }

  // if nobody wins and questions are over, game is over
  if (state.questionNumber > maxQuestions) {
    gameOver(q);
  } else {
    q.splice(randomIndex, 1);

    // Update the question
    $question.text(`Question ${state.questionNumber} of ${maxQuestions}: ${randomQuestion.question}`);
    $a.text(randomQuestion.a);
    $b.text(randomQuestion.b);
    $c.text(randomQuestion.c);
    $d.text(randomQuestion.d);

    // Update the players' scores
    $p1Score.text(state.player1);
    $p2Score.text(state.player2);

    // if a player hasn't won yet...
    if (state.player1 < winScore && state.player2 < winScore) {
      $("li").off();
      $("li").on("click", e => {
        chooseAnswer(e, randomQuestion);
      });
    } else {
      if (state.player1 === winScore) {
        $("li").off();
        $("#player1").addClass("winner");
        $("#player1 h3").text("Player 1 wins!");
      } else {
        $("li").off();
        $("#player2").addClass("winner");
        $("#player2 h3").text("Player 2 wins!");
      }
      handleModal(q);
    }
  }
}


// reset the board and start the game over
const boardReset = q => {
  const $resetText = $("<h2>Play again?</h2>");
  const $resetDiv = $("<div id='reset'>").append($resetText);
  $("#modal-textbox").append($resetDiv);
  $("#player1").removeClass("current-turn");
  $("#player2").removeClass("current-turn");

  // reset to all default game values
  $resetText.on("click", () => {
    state.player1 = 0;
    state.player2 = 0;
    state.player1Turn = true;
    state.questionNumber = 0;
    $("#modal").css("display", "none");

    $("#player1").removeClass("winner");
    $("#player2").removeClass("winner");
    $("#player1 h3").text("Player 1");
    $("#player2 h3").text("Player 2");


    // need to copy the original list of questions array to start the game over
    questions = [...questionsCopy];
    $resetDiv.remove();
    $(".gameover").remove();
    setBoard(questions);
  })
}


const gameOver = q => {
  $("li").off();

  const $h2 = $("<h2>").addClass("gameover").css({
    "margin": "auto",
    "background": "white",
    "width": "fit-content",
  });
  const $h1 = $("<h1>").addClass("gameover").text("GAME OVER").css({
    "color": "red",
    "width": "fit-content",
    "margin": "5px auto",
  });

  // $(".modal-textbox").append($h1).append($h2);

  if (state.player1 > state.player2) {
    $("#player1 h3").text("Player 1 WINS!")
    $("#player1").addClass("winner");
  } else if (state.player2 > state.player1) {
    $("#player2 h3").text("Player 2 WINS!");
    $("#player2").addClass("winner");
  } else {
    $h2.text("It's a draw!");
  }
  $("#modal-textbox").append($h1).append($h2);
  handleModal(questions);
}

const handleModal = (questions) => {
  $("#modal").css("display", "block");
  boardReset(questions);
}



// To-do list
///////////////
// DONE: create a win condition for a player
// DONE: create a reset button once win condition is reached
// style for mobile
// DONE: highlight each player's score when it's their turn
// DONE: make it so questions only show once per game (array.pop on the array of questions)
// put in a modal at the end of the game with the player who won, click to reset, etc.
// put in a countdown timer for each question



//////////////////////////////
// MAIN APP LOGIC
// Note: this is where the program begins
//////////////////////////////


const URL = "https://cdn.contentful.com/spaces/fho9ut5q5jt4/environments/master/entries?access_token=AJoEH4OEk9QKtT_Je2t2k6G3CJM4_1v8vs4M71O1MfA&content_type=triviaq";

$.ajax(URL)
  .then(data => {
    questions = data.items.map(q => q.fields);
    maxQuestions = questions.length;
    questionsCopy = [...questions];
    setBoard(questions);
  })