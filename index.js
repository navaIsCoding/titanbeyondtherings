const quizData = [
    {
      question: "What is the reason for Titan’s haziness in “Titan Beyond the Rings”? ",
      options: ["The cameras on Cassini could not capture Titan", "It is actually a star", "Titan’s atmosphere", "Titan has large amounts of radiation"],
      answer: "Titan’s atmosphere"
    },
    {
      question: "The rings of Saturn contain small moons",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "Titan can be “seen” better with the power of ___",
      options: ["Infrared", "Better glasses", "A thermal camera"],
      answer: "Infrared"
    },
    {
      question: "Saturn’s rings have the Encke Gap which contains ___",
      options: ["Nothing as it is a gap", "Pan and several thin knotted ringlets"],
      answer: "Pan and several thin knotted ringlets"
    },
    
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();