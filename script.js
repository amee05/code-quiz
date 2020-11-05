let questions = [
  {
    que: "Hyper Text Markup Language Stand For?",
    choices: ["JavaScript", "XHTML", "CSS", "HTML"],
    correcAns: "HTML"
  },
  {
    que: "Which language is used for styling web pages?",
    choices: ["HTML", "JQuery", "CSS", "XML"],
    correcAns: "CSS"
  },
  {
    que: "Which one of these is a styling library?",
    choices: ["Python", "JQuery", "Bootstrap", "React"],
    correcAns: "Bootstrap"
  }
];

let score = 0;
let index = 0;

let startBtn = document.querySelector('#start-btn');
let qBox = document.querySelector("#qBox");
let timer = document.querySelector("#timer");

let timeLeft = 40;
let wrong = 10;

let interval = 0;
let ulCreate = document.createElement("ul");

startBtn.addEventListener("click", function () {
  if (interval === 0) {
    interval = setInterval(function () {
      timeLeft--;
      timer.textContent = "Time: " + timeLeft;

      if (timeLeft <= 0) {
        clearInterval(interval);
        fin();
        timer.textContent = "Time!"

      }
    }, 1000);
  }
  showQuestion(index);



})

function showQuestion(index) {
  qBox.innerHTML = "";
  ulCreate.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    que = questions[index].que;
    choices = questions[index].choices;
    qBox.textContent = que;
  }

  choices.forEach(function (newEl) {
    let showchoices = document.createElement("li");
    showchoices.textContent = newEl;
    qBox.appendChild(ulCreate);
    ulCreate.appendChild(showchoices);
    showchoices.addEventListener("click", (tracking));
  })
}

function tracking(event) {
  let choice = event.target;

  if (choice.matches("li")) {

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "newDiv");

    if (choice.textContent === questions[index].correcAns) {
      score++;
      newDiv.textContent = "Correct!"
    } else {
      timeLeft = timeLeft - wrong;
      newDiv.textContent = "Wrong! -10 seconds"
    }
  }

  index++;

  if (index >= questions.length) {
    fin();
    newDiv.textContent = "The quiz has ended!";
  } else {
    showQuestion(index);
  }
  qBox.appendChild(newDiv);
}

function fin() {
  qBox.innerHTML = "";
  timer.style.display = "none";

  let end = document.createElement("h1");
  end.setAttribute("id", "end");
  end.textContent = "Your Score"

  qBox.appendChild(end);

  let msg = document.createElement("p");
  msg.setAttribute("id", "msg");
  msg.textContent = "Your final score is " + score;

  qBox.appendChild(msg);

}