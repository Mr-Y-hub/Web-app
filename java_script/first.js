
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

    const hash1=string_to_int_array("spaghetti1245");
    const hash = int_array_to_text(string_to_int_array(int_array_to_text(string_to_int_array("spaghetti1245"))));
    document.getElementById("secondPara").innerHTML = hash1;
    
}
function string_to_int_array(str){
    const intArr = [];

    for(let i=0;i<str.length;i++){
      const charcode = str.charCodeAt(i);

      const partA = Math.floor(charcode / 26);
      const partB = charcode % 26;

      intArr.push(partA);
      intArr.push(partB);
    }

    return intArr;
  }

  function int_array_to_text(int_array){
    let txt = '';

    for(let i=0;i<int_array.length;i++){
      txt += String.fromCharCode(97 + int_array[i]);
    }

    return txt;
  }
