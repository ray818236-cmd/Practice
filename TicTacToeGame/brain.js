// Select all boxes
let boxes = document.querySelectorAll(".box");

// Current turn
let turn = "X";

// Winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

// Check winner
function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                alert("Winner is " + pos1);

                // Disable all boxes
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                });

                return;
            }
        }
    }
}

// Add click event to every box
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        // Prevent clicking filled box
        if (box.innerText !== "") {
            return;
        }

        // Put X or O
        box.innerText = turn;

        // Check winner
        checkWinner();

        // Change turn
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    });
});