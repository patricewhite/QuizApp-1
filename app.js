// generate legend
//generate input for answers - radio buttons

//state objects
const Answers = {
  answers = [
    ["Obviously", "I'm Lame"], ["OF COURSE!!!", "What am I doing with my life"],
    ["Always", "Who are the Browms"], ["Is there anyone greater", "What about MJ"],
    ["Will Smith", "P Diddy", "Kanye", "Some guy?"]
  ]
};

const Question = [
  "Does it suck that the Patriots won the superbowl", "Is Wonder Women the gratest female superhero",
  "Are the Redskins worse than the Browns", "Is Serena Williams the greatest athlete of all time",
  "Who sang Wild Wild West"
];


const appState = {
  question: Question,
  answer: Answers,
  userAnswer: [],
  currentQuestion: -1
};
