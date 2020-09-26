// var str = "how can mirrors be real if our eyes aren't real";
// console.log(caps(str));

// function caps(str){
//     var firstChar = str.slice(0,1);
//     var restLetter = str.slice(1, str.length);
//     restLetter = restLetter.toLowerCase;
//     return restLetter;
// }

// function capitalizeFirstLetter(string) {
//     var firstChar = string.slice(0,1);
//     var capsChar = firstChar.toUpperCase();
//     var restChar = string.slice(1, string.length);
//     restChar = restChar.toLowerCase();
//     var complete = capsChar + restChar;
//     return complete;
// }

// var name = prompt("Enter your name");
// var result = capitalizeFirstLetter(name);
// console.log(result);

function hey(){
    var yourName = document.getElementById("yourName").value;
    var partnerName = document.getElementById("partnerName").value;
    var number = Math.random();
    number = number * 100;
    number = Math.floor(number) + 1;
    var firstStatement = "The love score of between  " + yourName + " and " + partnerName + " is " + number + "%. Not good";
    var secondStatement = "The love score of between  " + yourName + " and " + partnerName + " is " + number + "%. Good";
    var thirdStatement = "The love score of between  " + yourName + " and " + partnerName + " is " + number + "%. Vey good";
    var fourthStatement = "The love score of between  " + yourName + " and " + partnerName + " is " + number + "%. Excellent";
    var lastStatement = "The love score of between  " + yourName + " and " + partnerName + " is " + number + "%. Perfect";
    if(number >= 0 && number <= 30){
        document.querySelector("h1").innerText = firstStatement;
    } else if (number >= 31 && number <= 60){
        document.querySelector("h1").innerText = secondStatement;
    } else if (number >= 61 && number <= 90){
        document.querySelector("h1").innerText = thirdStatement;
    } else if (number >= 91 && number <= 99){
        document.querySelector("h1").innerText = fourthStatement;
    } else {
        document.querySelector("h1").innerText = lastStatement;
    }
}
function changeColor(changeColor){
    document.body.style.backgroundColor = changeColor;
}
function backColor(backColor){
    document.body.style.backgroundColor = backColor;
}
console.log("Hello World");