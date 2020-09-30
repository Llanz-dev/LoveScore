/* function capitalizeFirstLetter(string) {
    var firstChar = string.slice(0,1);
    var capsChar = firstChar.toUpperCase();
    var restChar = string.substr(1);
    restChar = restChar.toLowerCase();
    var complete = capsChar + restChar;
    return complete;
} */


// Creating new and shorter capitalization of First Letter 
// and fixing the orginal code that when you type paul jolou in the box 
// it returns this "Paul jolou" without capitalizating the first letter of jolou 
function capitalizeFirstLetter(string) {
    let arr = string.split(' ');
    let cap = arr.map(i => {
       return i[0].toUpperCase() + i.slice(1)
    });
    return cap.join(' ');
}


function hey(){
    var yourName = document.getElementById("yourName").value;
    var partnerName = document.getElementById("partnerName").value;
    yourName = capitalizeFirstLetter(yourName);
    partnerName = capitalizeFirstLetter(partnerName);
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
