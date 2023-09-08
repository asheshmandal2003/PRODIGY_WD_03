const container = document.querySelectorAll(".container");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const container3 = document.querySelector(".container-3");
const container4 = document.querySelector(".container-4");
const container5 = document.querySelector(".container-5");
const container6 = document.querySelector(".container-6");
const container7 = document.querySelector(".container-7");
const container8 = document.querySelector(".container-8");
const container9 = document.querySelector(".container-9");
const reset = document.querySelector(".reset");
const p = document.querySelector("p");

let flag = 0;
let count = 0;

container1.addEventListener("click", () => {
  handleClick(container1);
});
container2.addEventListener("click", () => {
  handleClick(container2);
});
container3.addEventListener("click", () => {
  handleClick(container3);
});
container4.addEventListener("click", () => {
  handleClick(container4);
});
container5.addEventListener("click", () => {
  handleClick(container5);
});
container6.addEventListener("click", () => {
  handleClick(container6);
});
container7.addEventListener("click", () => {
  handleClick(container7);
});
container8.addEventListener("click", () => {
  handleClick(container8);
});
container9.addEventListener("click", () => {
  handleClick(container9);
});
reset.addEventListener("click", () => {
  container.forEach((x) => {
    flag = 0;
    count = 0;
    x.disabled = false;
    x.textContent = "";
    x.style.background = "#fff";
    p.innerHTML = `<b>'0'</b> is Player 1 & <b>'X'</b> is Player 2`;
  });
});

function handleClick(container) {
  if (flag === 0) {
    flag = 1;
    count++;
    container.textContent = "0";
    container.style.background = "#999";
    container.style.color = "#fff";
    container.disabled = true;
    is0Winner();
    isDraw();
  } else {
    flag = 0;
    count++;
    container.textContent = "X";
    container.style.background = "#999";
    container.style.color = "#fff";
    container.disabled = true;
    isXWinner();
    isDraw();
  }
}

function is0Winner() {
  if (
    container1.textContent === "0" &&
    container2.textContent === "0" &&
    container3.textContent === "0" &&
    container2.textContent === "0"
  ) {
    container.forEach((x) => (x.disabled = true));
    container1.style.background = "green";
    container2.style.background = "green";
    container3.style.background = "green";
    container1.style.color = "#fff";
    container2.style.color = "#fff";
    container3.style.color = "#fff";
    p.textContent = "Player 1 is the winner!";
  } else if (
    container1.textContent === "0" &&
    container5.textContent === "0" &&
    container5.textContent === "0" &&
    container9.textContent === "0"
  ) {
    container.forEach((x) => (x.disabled = true));
    container1.style.background = "green";
    container5.style.background = "green";
    container9.style.background = "green";
    container1.style.color = "#fff";
    container5.style.color = "#fff";
    container9.style.color = "#fff";
    p.textContent = "Player 1 is the winner!";
  } else if (
    container1.textContent === "0" &&
    container4.textContent === "0" &&
    container4.textContent === "0" &&
    container7.textContent === "0"
  ) {
    container.forEach((x) => (x.disabled = true));
    container1.style.background = "green";
    container4.style.background = "green";
    container7.style.background = "green";
    container1.style.color = "#fff";
    container4.style.color = "#fff";
    container7.style.color = "#fff";
    p.textContent = "Player 1 is the winner!";
  } else if (
    container4.textContent === "0" &&
    container5.textContent === "0" &&
    container5.textContent === "0" &&
    container6.textContent === "0"
  ) {
    container.forEach((x) => (x.disabled = true));
    container4.style.background = "green";
    container5.style.background = "green";
    container6.style.background = "green";
    container3.style.background = "green";
    container4.style.color = "#fff";
    container5.style.color = "#fff";
    container6.style.color = "#fff";
    p.textContent = "Player 1 is the winner!";
  } else if (
    container7.textContent === "0" &&
    container8.textContent === "0" &&
    container8.textContent === "0" &&
    container9.textContent === "0"
  ) {
    container.forEach((x) => (x.disabled = true));
    container7.style.background = "green";
    container8.style.background = "green";
    container9.style.background = "green";
    container7.style.color = "#fff";
    container8.style.color = "#fff";
    container9.style.color = "#fff";
    p.textContent = "Player 1 is the winner!";
  } else if (
    container3.textContent === "0" &&
    container5.textContent === "0" &&
    container5.textContent === "0" &&
    container7.textContent === "0"
  ) {
    container.forEach((x) => (x.disabled = true));
    container3.style.background = "green";
    container5.style.background = "green";
    container7.style.background = "green";
    container3.style.color = "#fff";
    container5.style.color = "#fff";
    container7.style.color = "#fff";
    p.textContent = "Player 1 is the winner!";
  } else if (
    container2.textContent === "0" &&
    container5.textContent === "0" &&
    container5.textContent === "0" &&
    container8.textContent === "0"
  ) {
    container.forEach((x) => (x.disabled = true));
    container2.style.background = "green";
    container5.style.background = "green";
    container8.style.background = "green";
    container2.style.color = "#fff";
    container5.style.color = "#fff";
    container8.style.color = "#fff";
    p.textContent = "Player 1 is the winner!";
  } else if (
    container3.textContent === "0" &&
    container6.textContent === "0" &&
    container6.textContent === "0" &&
    container9.textContent === "0"
  ) {
    container.forEach((x) => (x.disabled = true));
    container3.style.background = "green";
    container6.style.background = "green";
    container9.style.background = "green";
    container3.style.color = "#fff";
    container6.style.color = "#fff";
    container9.style.color = "#fff";
    p.textContent = "Player 1 is the winner!";
  }
}

function isXWinner() {
  if (
    container1.textContent === "X" &&
    container2.textContent === "X" &&
    container3.textContent === "X" &&
    container2.textContent === "X"
  ) {
    container.forEach((x) => (x.disabled = true));
    container1.style.background = "green";
    container2.style.background = "green";
    container3.style.background = "green";
    container1.style.color = "#fff";
    container2.style.color = "#fff";
    container3.style.color = "#fff";
    p.textContent = "Player 2 is the winner!";
  } else if (
    container1.textContent === "X" &&
    container5.textContent === "X" &&
    container5.textContent === "X" &&
    container9.textContent === "X"
  ) {
    container.forEach((x) => (x.disabled = true));
    container1.style.background = "green";
    container5.style.background = "green";
    container9.style.background = "green";
    container1.style.color = "#fff";
    container5.style.color = "#fff";
    container9.style.color = "#fff";
    p.textContent = "Player 2 is the winner!";
  } else if (
    container1.textContent === "X" &&
    container4.textContent === "X" &&
    container4.textContent === "X" &&
    container7.textContent === "X"
  ) {
    container.forEach((x) => (x.disabled = true));
    container1.style.background = "green";
    container4.style.background = "green";
    container7.style.background = "green";
    container1.style.color = "#fff";
    container4.style.color = "#fff";
    container7.style.color = "#fff";
    p.textContent = "Player 2 is the winner!";
  } else if (
    container4.textContent === "X" &&
    container5.textContent === "X" &&
    container5.textContent === "X" &&
    container6.textContent === "X"
  ) {
    container.forEach((x) => (x.disabled = true));
    container4.style.background = "green";
    container5.style.background = "green";
    container6.style.background = "green";
    container3.style.background = "green";
    container4.style.color = "#fff";
    container5.style.color = "#fff";
    container6.style.color = "#fff";
    p.textContent = "Player 2 is the winner!";
  } else if (
    container7.textContent === "X" &&
    container8.textContent === "X" &&
    container8.textContent === "X" &&
    container9.textContent === "X"
  ) {
    container.forEach((x) => (x.disabled = true));
    container7.style.background = "green";
    container8.style.background = "green";
    container9.style.background = "green";
    container7.style.color = "#fff";
    container8.style.color = "#fff";
    container9.style.color = "#fff";
    p.textContent = "Player 2 is the winner!";
  } else if (
    container3.textContent === "X" &&
    container5.textContent === "X" &&
    container5.textContent === "X" &&
    container7.textContent === "X"
  ) {
    container.forEach((x) => (x.disabled = true));
    container3.style.background = "green";
    container5.style.background = "green";
    container7.style.background = "green";
    container3.style.color = "#fff";
    container5.style.color = "#fff";
    container7.style.color = "#fff";
    p.textContent = "Player 2 is the winner!";
  } else if (
    container2.textContent === "X" &&
    container5.textContent === "X" &&
    container5.textContent === "X" &&
    container8.textContent === "X"
  ) {
    container.forEach((x) => (x.disabled = true));
    container2.style.background = "green";
    container5.style.background = "green";
    container8.style.background = "green";
    container2.style.color = "#fff";
    container5.style.color = "#fff";
    container8.style.color = "#fff";
    p.textContent = "Player 2 is the winner!";
  } else if (
    container3.textContent === "X" &&
    container6.textContent === "X" &&
    container6.textContent === "X" &&
    container9.textContent === "X"
  ) {
    container.forEach((x) => (x.disabled = true));
    container3.style.background = "green";
    container6.style.background = "green";
    container9.style.background = "green";
    container3.style.color = "#fff";
    container6.style.color = "#fff";
    container9.style.color = "#fff";
    p.textContent = "Player 2 is the winner!";
  }
}

function isDraw() {
  if (count === 9) {
    container.forEach((x) => {
      x.style.background = "crimson";
      x.style.color = "#fff";
      p.textContent = "Draw!";
    });
  }
}
