// generate legend
//generate input for answers - radio buttons

//state objects
const Answers = [
    ["Obviously", "I'm Lame"], ["OF COURSE!!!", "I live under a rock"],
    ["Always", "The Browns?"], ["Is there anyone greater?", "What about MJ?"],
    ["Will Smith", "P Diddy", "Kanye", "Some guy?"]
];

const Question = [
  "Does it suck that the Patriots won the superbowl", "Is Wonder Women the gratest female superhero",
  "Are the Redskins worse than the Browns", "Is Serena Williams the greatest athlete of all time",
  "Who sang Wild Wild West"
];


const appState = {
  question: Question,
  answer: Answers,
  userAnswer: [],
  currentQuestion: -1,
  score: -1
};

function updateCurQuestion(appState){
  appState.currentQuestion++;
  console.log(appState.currentQuestion);
}

function getQuestion(appState){
  return appState.question[appState.currentQuestion];
}

function getAnswers(appState){
  return appState.answer[appState.currentQuestion];
}

function addAnswer(appState, answer){
  appState.userAnswer.push(answer|0);
  console.log(appState.userAnswer);
}

//Current tally of right answers.
function numRightAnswers(appState){
  let numRights = 0;
  appState.userAnswer.forEach(function(element){
    if(element === 0){
      //console.log("hellloooooooo");
      numRights++;
      //console.log(numRights);
    }
  });
  //   element =>
  //   if(element === 0){
  //     numRights++;
  //   }
  // );
  //console.log(numRights);
  return numRights;
}

//Should be a final score.
function calcScore(appState){

  if(appState.score === -1){
    appState.score = appState.userAnswer[0];
    //console.log(appState.score);
  }
  else{
    let currScore = appState.score;
    appState.userAnswer.forEach(function(element){
      currScore += element;
      console.log(element);
    });
    appState.score = currScore;
  }
}


//Rendering function
function displayQuestion(appState){
  console.log(appState.currentQuestion);
  const question = getQuestion(appState);
  const answers = getAnswers(appState);

  if(answers.length < 4){
    return `<legend>${question}?</legend>
          <input type="radio" name="answer" id="ans-right" value="0"><label for="ans-right">${answers[0]}</label>
          <input type="radio" name="answer" id="ans-wrong" value="1"><label for="ans-wrong">${answers[1]}</label>`;
  }else{
    return `<legend>${question}?</legend>
          <input type="radio" name="answer" id="ans-right" value="0" checked><label for="ans-right">${answers[0]}</label>
          <input type="radio" name="answer" id="ans-wrong-1" value="1"><label for="ans-wrong-1">${answers[1]}</label>
          <input type="radio" name="answer" id="ans-wrong-2" value="2"><label for="ans-wrong-2">${answers[2]}</label>
          <input type="radio" name="answer" id="ans-wrong-3" value="2"><label for="ans-wrong-3">${answers[3]}</label>
  `;
}
}

function renderQuestion(appState, element){
  let Currquestion = appState.currentQuestion;
  console.log(appState.currentQuestion);
  console.log(Currquestion);
  if(Currquestion < 0){
    Currquestion = 0; 
    updateCurQuestion(appState);
  }
  let printHTML = displayQuestion(appState);
  printHTML += `${Currquestion} out of ${appState.question.length}
  <input type="button" class="ansQuest" name="submit" value="submit">`;
  console.log(printHTML);
  element.html(printHTML);
}


//START HERE - LOOK AT MEEEEEEEEEE
function displayAnswer(appState){
  const current = appState.currentQuestion;
  console.log("RIGHT HERE " + current);
  const uA = appState.userAnswer[current];
  console.log("ME ME EMEMEME " + uA);

  if(uA !== 0){
    alert(`You're wrong. The answer is ${appState.answer[current][0]}. `);
  }
  else{
    alert(`Yup, you got it. ${appState.answer[current][0]}. `);
  }
}

function displayComplete(appState){
  const done = appState.currentQuestion;
  calcScore(appState);
  const total = appState.score;
  let correct = numRightAnswers(appState);
  // appState.userAnswer.forEach(function(element){
  //   if(element === 0){
  //     correct++;
  //   }
  // });
  let html = '';
  console.log(total);
  if( total === 0){
  html += `<div>Way to go. You know your stuff.`;
  }else{
  html += `<div>Better luck next time.`;
  }
  html += `You got ${correct} out of ${appState.question.length}</div>
  <input type="button" name="new quiz" value="new quiz">`;
  console.log(html);
}


//Listeners - will call state mod & rendering functions
function addListeners(){

  $(".container").on("click", '.start_quiz', function(event){
    event.preventDefault();
    renderQuestion(appState, $('.container'));
  });

  $(".container").on("click", '.ansQuest', function(event){
    event.preventDefault();
    const clickedItem = ($("input[name='answer']:checked").val());
    addAnswer(appState, clickedItem);
    displayAnswer(appState);
    renderQuestion(appState, $('.container'));
  });

  // $(".container").on("click", '.start_quiz', function(event){
  //   event.preventDefault();
  //   renderQuestion(appState, $('.container'));
  // });

  // $( "button.alert" ).on( "click", function() {
  //       event.preventDefault();
  //       console.log( "A button with the alert class was clicked!" );
  //   });
 
}

$(function () {

addListeners();

});


//console.log(displayQuestion(appState));
//renderQuestion(appState);
//displayComplete(appState);
