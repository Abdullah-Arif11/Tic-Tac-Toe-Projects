let winnerMsg = document.querySelector(".winner-msg");
let turnIndicator = document.querySelector(".turn-indicator");
let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector("#reset");
let turnX = true;
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
    turnChanger();
  });
});
const checkWinner = () => {
  for (pattern of winningPattern) {
    let pstVal1 = boxes[pattern[0]].innerText;
    let pstVal2 = boxes[pattern[1]].innerText;
    let pstVal3 = boxes[pattern[2]].innerText;
    if (pstVal1 != "" && pstVal2 != "" && pstVal3 != "") {
      if (pstVal1 === pstVal2 && pstVal2 === pstVal3) {
        showWinner(pstVal1);
        boxes[pattern[0]].style.backgroundColor = "black";
        boxes[pattern[1]].style.backgroundColor = "black";
        boxes[pattern[2]].style.backgroundColor = "black";
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
};
const showWinner = (winner) => {
  winnerMsg.innerText = `Winner is ${winner}`;
  winnerMsg.classList.remove("hide");
};

const turnChanger = () => {
  turnIndicator.innerText = `Turn : ${turnX ? "X" : "O"}`;
};

reset.addEventListener("click", () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "white";
    winnerMsg.classList.add("hide")
  }
});
