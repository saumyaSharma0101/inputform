const questions = [
  {
    id: 1001,
    question: "Who are the actors in The Internship?",
    answers: [
      "Ben Stiller, Jonah Hill",
      "Courteney Cox, Matt LeBlanc",
      "Kaley Cuoco, Jim Parsons",
      "Vince Vaughn, Owen Wilson",
    ],
    correctIndex: 3,
  },
  {
    id: 1002,
    question: "What is the capital of Spain?",
    answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
    correctIndex: 2,
  },
  {
    id: 1003,
    question:
      "What are the school colors of the University of Texas at Austin?",
    answers: [
      "Black, Red",
      "Blue, Orange",
      "White, Burnt Orange",
      "White, Old gold, Gold",
    ],
    correctIndex: 2,
  },
  {
    id: 1004,
    question: "When was Mahatma Gandhi born?",
    answers: [
      "October 2, 1869",
      "December 15, 1872",
      "July 18, 1918",
      "January 15, 1929",
    ],
    correctIndex: 0,
  },
  {
    id: 1005,
    question: "What is 65 times 52?",
    answers: ["117", "3120", "3380", "3520"],
    correctIndex: 2,
  },
  {
    id: 1006,
    question: "How tall is Mount Everest?",
    answers: [
      "6,683 ft (2,037 m)",
      "7,918 ft (2,413 m)",
      "19,341 ft (5,895 m)",
      "29,029 ft (8,847 m)",
    ],
    correctIndex: 3,
  },
  {
    id: 1007,
    question: "When did The Avengers come out?",
    answers: ["May 2, 2008", "May 4, 2012", "May 3, 2013", "April 4, 2014"],
    correctIndex: 1,
  },
];

var score = 0;               

questions.forEach((ques, index) => {
  var divEl = document.createElement("div");
  divEl.classList.add("list");
  divEl.innerHTML = `Question ${index + 1} : ${ques.question}`;
  var quiz = document.getElementById("quiz");
  quiz.appendChild(divEl);
  var div2 = document.createElement("div");
  div2.classList.add("options");
  div2.id = ques.id;
  var opt = ques.answers;
  opt.forEach((ans, ind) => {
    var inputEle = document.createElement("input");
    var label = document.createElement("label");
    var brtag = document.createElement("br");
    inputEle.type = "radio";
    inputEle.name = ques.id;
    inputEle.value = ind;
    inputEle.addEventListener("click", function (e) {
      let quesId = e.target.name;
      let selectedQues = questions.filter((item) => item.id == quesId);
      let correctAnswerIndex = selectedQues[0].correctIndex;
      let selectedIndexValue = e.target.value;
      //   console.log(
      //     selectedQues[0],
      //     correctAnswerIndex,
      //     selectedIndexValue,
      //     selectedQues[0].id
      //   );

      var fields = document
        .getElementById(selectedQues[0].id)
        .getElementsByTagName("input");
      for (var i = 0; i < fields.length; i++) {
        fields[i].disabled = true;
      }
      if (selectedIndexValue == correctAnswerIndex) {
        score++;
        label.style.color = "green";
      }else{
        label.style.color = "red";
      }
    });
    label.innerText = ans;
    div2.appendChild(inputEle);
    div2.appendChild(label);
    div2.appendChild(brtag);
  });
  divEl.appendChild(div2);
});

var buttonEle = document.getElementById("submitTest");
var scoreEle = document.getElementById("score");
buttonEle.addEventListener("click", function () {
  scoreEle.innerHTML = score;
});
