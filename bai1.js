function isPrime(n) {
    let count = 0;
    if(n == 2 || n == 3)
        return true;
    for (let i = 2; i <= n/2;i++) {
        if (n % i == 0)
             count++;
    }
    if (count == 0)
        return true;
}
function showString() {
    var a = [];
    var x = document.getElementById("number").value;
    for (let i = 2; i <= x ;i++ ){
        if (isPrime(i))
            a.push(i);
    }
    document.getElementById("show").innerHTML = "<hr/>"+ "Dãy số nguyên tố là: "+ a.join(" ") ;
}
function enterPress(evt) {
    if (evt.keyCode == 13)
        showString();
}
function docReady() {
    window.addEventListener('keydown',enterPress)
}