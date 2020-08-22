let bigNumber = 1e308,
    biggerNumber = 1e309;
console.log(bigNumber);
console.log(biggerNumber);
var x = 0.2 + 0.1;
console.log(x);
var x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x)
let myString = 'Not just me, all ProGrads love to code💻 '
console.log(myString)

console.log(9 + "9")

var grade = 'B';
var result;

switch (grade) {
    case 'A': {
        result += "10";
        break;
    }
    case 'B': {
        result += " 9";
        break;
    }
    case 'C': {
        result += " 8";
        break;
    }
    default:
        result += " 0";
}
console.log(result);

var i = 0;
while (i < 0) {
    console.log("hi");
}

var text = ""
var i;
for (i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    text += "The number is " + i + "\n";
}
console.log(text);

var a = [1, , 2];
console.log(a[1]);

var a = [1];
var b = [2, 3];
console.log(a + b);