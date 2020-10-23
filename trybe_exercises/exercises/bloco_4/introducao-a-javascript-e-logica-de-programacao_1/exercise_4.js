let x;
function qualValor(x) {
    let result = Math.sign(x);
        if (result == 1) {
            console.log("positive");
        }
        if (result == -1) {
            console.log("negative");
        } else {
            console.log("zero");
        }
};