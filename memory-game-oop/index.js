const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
  "img/img7.jpg",
  "img/img8.jpg",
  "img/img9.jpg",
];
class Card {
  constructor(image) {
    this.image = image;
    this.matched = false;
    this.element = document.createElement("div");
    this.element.classList.add("card");
    this.element.addEventListener("click", this.reveal.bind(this));
  }
  reveal() {
    if (!this.matched && Game.revealedCards.length < 2) {
      this.element.style.backgroundImage = `url(${this.image})`;
      this.element.classList.add("revealed");
      Game.revealedCards.push(this);
    }
    if (Game.revealedCards.length == 2) {
      setTimeout(() => {
        Game.checkMatch();
      }, 500);
    }
  }
  hide() {
    this.element.style.backgroundImage = ``;
    this.element.classList.remove("revealed");
  }
  matchFound() {
    this.matched = true;
    this.element.classList.add("matched");
  }
}
class Game {
  static revealedCards = [];
  static matchedPairs = 0;
  static startTime = null;
  static interval = null;
  static start(images) {
    this.startTime = Date.now();
    this.interval = setInterval(() => {
      document.getElementById("gameTime").textContent = (
        (Date.now() - this.startTime) /
        1000
      ).toFixed(2);
    }, 100);
    const board = document.querySelector(".gameboard");
    board.innerHTML = ``;
    const cards = images.concat(images).map((img) => new Card(img));
    this.shuffle(cards).forEach((card) => board.appendChild(card.element));
    setTimeout(() => {
      cards.forEach((card) => card.hide());
    }, 3000);
  }
  static shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }
  static checkMatch() {
    console.log(this.revealedCards);
    if (this.revealedCards[0].image === this.revealedCards[1].image) {
      this.revealedCards[0].matchFound();
      this.revealedCards[1].matchFound();
      if (this.matchedPairs === 9) {
        clearInterval(this.interval);
        alert(
          "Congrats! Your game time is:" +
            document.getElementById("time").textContent +
            " seconds"
        );
      }
    } else {
      this.revealedCards[0].hide();
      this.revealedCards[1].hide();
    }
    this.revealedCards = [];
  }
}
Game.start(images);
