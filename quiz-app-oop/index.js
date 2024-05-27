const questionData = [
  [["What weighs the most?"], ["Whale", "Horse", "Cow"], 0],
  [["Which country is in Europe?"], ["Australia", "US", "Poland"], 2],
  [["Which planet is the biggest?"], ["Mercury", "Earth", "Neptun"], 2],
  [["What is the most expensive"], ["Silver", "Gold", "Diamonds"], 2],
];

class Question {
  #title;
  #answers;
  #correctAnswer;

  constructor(title, answers, correctAnswer) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }

  get title() {
    return this.#title;
  }

  get answers() {
    return this.#answers;
  }

  checkAnswer(answer) {
    return this.#correctAnswer === answer;
  }
}

class Quiz {
  #questions;
  #currentQuestionIndex;
  #score;

  constructor(questions) {
    this.#questions = questions.map(
      (question) => new Question(question[0], question[1], question[2])
    );
    this.#currentQuestionIndex = 0;
    this.#score = 0;
  }

  displayQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    answersElement.textContent = "";
    questionElement.textContent =
      this.#questions[this.#currentQuestionIndex].title;

    this.#questions[this.#currentQuestionIndex].answers.forEach(
      (answer, index) => {
        const answerElement = document.createElement("li");
        answerElement.innerHTML = `<label><input type="radio" value=${index} name="answer">${answer}</label>`;
        answersElement.appendChild(answerElement);
      }
    );
  }
  displayResult() {
    const resultElement = document.querySelector("#result");
    resultElement.textContent = `End of the game! You gained ${
      this.#score
    } of ${this.#questions.length}`;
  }
  nextQuestion() {
    const selectedAnswer = document.querySelector(
      "input[name='answer']:checked"
    );
    if (selectedAnswer) {
      if (
        this.#questions[this.#currentQuestionIndex].checkAnswer(
          parseInt(selectedAnswer.value)
        )
      ) {
        this.#score++;
      }
      this.#currentQuestionIndex++;
      if (this.#currentQuestionIndex < this.#questions.length) {
        this.displayQuestion();
      } else {
        this.displayResult();
      }
    } else {
      alert("You have not checked an answer!");
    }
  }
}
const quiz = new Quiz(questionData);
quiz.displayQuestion();
