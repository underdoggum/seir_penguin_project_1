// Much of the logic that went into this developing this jQuery game from Alex Merced's AM Coder YouTube playlist
// https://www.youtube.com/playlist?list=PLY6oTPmKnKbYC-NRcAFVN4_R5D3HRmKGu


//////////////////////////////
// APP STATE
//////////////////////////////

const state = {
  player1: 0,
  player2: 0,
  player1Turn: true,
}

let questions = [];


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

// console.log(p1Score, p2Score)


//////////////////////////////
// FUNCIONS
//////////////////////////////

const chooseAnswer = (e, question) => {
  // console.log(e);
  if (e.target.innerText === question.answer) {
    console.log("correct answer", state.player1Turn);
    if (state.player1Turn) {
      state.player1++;
      state.player1Turn = !state.player1Turn;
    } else {
      state.player2++;
      state.player1Turn = !state.player1Turn;
    }
    setBoard(questions);
  } else {
    console.log("incorrect", state.player1Turn);
    setBoard(questions);
    state.player1Turn = !state.player1Turn;
  }
}

const setBoard = q => {
  // Get a random index with a random question
  const randomIndex = Math.floor(Math.random() * q.length);
  const randomQuestion = q[randomIndex];

  // Update the question
  $question.text(randomQuestion.question);
  $a.text(randomQuestion.a);
  $b.text(randomQuestion.b);
  $c.text(randomQuestion.c);
  $d.text(randomQuestion.d);

  //Update the players' scores
  $p1Score.text(state.player1);
  $p2Score.text(state.player2);

  $("li").off();
  $("li").on("click", e => {
    chooseAnswer(e, randomQuestion);
  });
}


// randomize answers per question function


//////////////////////////////
// MAIN APP LOGIC
//////////////////////////////






const URL = "https://cdn.contentful.com/spaces/fho9ut5q5jt4/environments/master/entries?access_token=AJoEH4OEk9QKtT_Je2t2k6G3CJM4_1v8vs4M71O1MfA&content_type=triviaq";

$.ajax(URL)
  .then(data => {
    questions = data.items.map(q => q.fields);
    // console.log(questions);
    // console.log(data.items[0].fields);
    setBoard(questions);
  })