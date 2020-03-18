var array = new Array();

function inputArray() {
    //   let n = document.getElementById("element").value;
    var x = document.getElementById("num1").value;
    array.push(x);
    alert("So "+ x+" đã được thêm vào dãy số");
    document.getElementById("num1").value = "";
}

function showOdd() {
    let total = 0;
    for (let i = 0; i< array.length;i++){
        if (array[i] % 2 != 0)
            total += parseInt(array[i]);
    }
    document.getElementById("string").innerHTML = "<hr/>"+"Dãy số là: "+ array+"</br> Tổng các số lẻ trong dãy là "+ total;
}

function enterPress(evt) {
    if (evt.keyCode == 32)
        inputArray();
    if (evt.keyCode == 13)
        showOdd();
}
function docReady() {
    window.addEventListener('keydown',enterPress)
}