const voteForm = document.querySelector(".vote-form");
const voteOptions = document.querySelector(".vote-select");
const userName = document.querySelector(".username");
const userId = document.querySelector(".userid");
const voteResult = document.querySelector(".vote-results");

/* normally would be hidden in a database */
const validUserIds = new Map([
  ["John", "12345678"],
  ["Adam", "22222222"],
  ["Jessica", "66666666"],
  ["Veronica", "80808080"],
]);

const vote = (e) => {
  e.preventDefault();
  const user = userName.value;
  const id = userId.value;
  const choice = voteOptions.value;

  if (validUserIds.get(user) === id) {
    if (usersVoted.has(user)) {
      alert("You've already voted!");
    } else {
      alert("Vote successful!");
      usersVoted.add(user);
      voteCount.set(choice, voteCount.get(choice) + 1);
    }
  } else {
    alert("Invalid data!");
  }
  updateResults();
};

const voteCount = new Map();
voteCount.set("Option 1", 0);
voteCount.set("Option 2", 0);
voteCount.set("Option 3", 0);

const usersVoted = new Set();

const updateResults = () => {
  let output = "";
  //   for (const [option, count] of voteCount) {
  //     output += `<br>${option} : ${count} got votes.`;
  //   }
  voteCount.forEach((count, option) => {
    output += `<br>${option} : ${count} got votes.`;
  });
  voteResult.innerHTML = output;
};
updateResults();

voteForm.addEventListener("submit", vote);
