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
  userAnswer: [0, 0, 0],
  currentQuestion: 4,
  score: -1
};

function updateCurQuestion(appState){
  appState.currentQuestion++;
}

function getQuestion(appState){
  return appState.question[appState.currentQuestion];
}

function addAnswer(appState, answer){
  appState.userAnswer.push(answer);
}

//Current tally of right answers.
function numRightAnswers(appState){
  let numRights = 0;
  appState.userAnswer.forEach(function(element, numRights){
    if(element === 0){
      numRights++;
    }
  });
  //   element => 
  //   if(element === 0){
  //     numRights++;
  //   }
  // );
  return numRights;
}

//Should be a final score.
function calcScore(appState){

  if( appState.score === -1){
    appState.score = appState.userAnswer[0];
  }
  else{
    let currScore = appState.score;
    currScore = appState.userAnswer.forEach(function(element, currScore){
      currScore += element;
    });
    appState.score = currScore; 
  }
}


//Rendering function
function displayQuestion(appState){
  const question = appState.question[appState.currentQuestion];
  const answers = appState.answer[appState.currentQuestion];

  if(answers.length < 4){
    return `<legend>${question}?</legend>
          <input type="radio" name="answer-1" id="ans-right" value="0"><label for="ans-right">${answers[0]}</label>
          <input type="radio" name="answer-2" id="ans-wrong" value="1"><label for="ans-wrong">${answers[1]}</label>`;
  }else{
    return `<legend>${question}?</legend>
          <input type="radio" name="answer-1" id="ans-right" value="0" checked><label for="ans-right">${answers[0]}</label>
          <input type="radio" name="answer-2" id="ans-wrong-1" value="1"><label for="ans-wrong-1">${answers[1]}</label>
          <input type="radio" name="answer-3" id="ans-wrong-2" value="2"><label for="ans-wrong-2">${answers[2]}</label>
          <input type="radio" name="answer-4" id="ans-wrong-3" value="2"><label for="ans-wrong-3">${answers[3]}</label>
  `;
}
}


function displayAnswer(appState){
  const current = appState.currentQuestion;
  const uA = appState.userAnswer[current];

  if(uA !== 0){
    alert(`You're wrong. The answer is ${appState.answer[0]}. `);
  }
  else{
    alert(`Yup, you got it. The answer is ${appState.answer[0]}. `);
  }
}


//Listeners - will call state mod & rendering functions
console.log(displayQuestion(appState));

