
var number = 2;
var myName = "Yash patidar ";

function myfunc() {
    if (number == 2) {
        var takeInputvalue = document.getElementById("inputValue").value;
        document.getElementById("secondPara").innerHTML = takeInputvalue;
    }
    else {
        var takeInputvalue = "I am inside else statement so i can't print anything";
        document.getElementById("secondPara").innerHTML = takeInputvalue;
    }
}
function callFunction() {
    myfunc();
    document.getElementById("secondP-------------ara").style.color="orange";
}