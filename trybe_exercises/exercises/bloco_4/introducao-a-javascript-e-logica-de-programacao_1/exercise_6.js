let nomeDaPeca;

// Rei--King
// Rainha--Queen
// Bispo--Bishop
// Cavalo--Knight
// Torre--Rook
// Peão--Pawn

function qualMovimento(nomeDaPeca) {
    toLowerCase(nomeDaPeca);
    if (nomeDaPeca === "king"){
        console.log("one square in any direction");
    }
    if (nomeDaPeca === "queen"){
        console.log("diagonally, horizontally or vertically, any number of squares")
    }
    if (nomeDaPeca === "bishop"){
        console.log("diagonally, any number of squares");
    }
    if (nomeDaPeca === "knight"){
        console.log("in L shape, two squares in a horizontal or vertical direction, then move one square horizontally or vertically");
    }
    if (nomeDaPeca === "rook"){
        console.log("horizontally or vertically any number of squares");
    }
    if (nomeDaPeca === "pawn"){
        console.log("vertically forward one square, with the option to move two squares if they have not yet moved")
    } else {
        console.log("not a chess piece!!")
    }
};