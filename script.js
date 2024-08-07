let allBoxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let turnO = true;
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetFunc = () => {
  turnO = true;
  boxEnable();
  msgContainer.classList.add("hide");
};

const boxdisable = () => {
  for (box of allBoxes) {
    box.disabled = true;
  }
};

const boxEnable = () => {
  for (box of allBoxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.color = "#914f1e";
  }
};

const result = () => {
  let isDraw = true;
  for (pattern of winningPattern) {
    let pos1Val = allBoxes[pattern[0]].innerText;
    let pos2Val = allBoxes[pattern[1]].innerText;
    let pos3Val = allBoxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        msg.innerText = `Winner is ${pos1Val}`;
        msgContainer.classList.remove("hide");
        boxdisable();
        return;
      }
    }

    if (pos1Val == "" || pos2Val == "" || pos3Val == "") {
      isDraw = false;
    }

    if (isDraw) {
      msg.innerText = "It is a draw";
      msgContainer.classList.remove("hide");
    }
  }
};

allBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      box.style.color = "#1A3636";
      turnO = true;
      box.disabled = true;
    }

    result();
  });
});

resetBtn.addEventListener("click", resetFunc);
newGame.addEventListener("click", resetFunc);
