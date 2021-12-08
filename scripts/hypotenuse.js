var sides = document.querySelectorAll(".sides");
var btn = document.querySelector("#calculate-hypotenuse-btn");
var output = document.querySelector("#output");


function addNSquare () {
    var a = Number(sides[0].value)
    var b = Number(sides[1].value)
    return  a*a + b*b;
}



function calculateHypotenuse() {
    var Z = addNSquare();
    output.innerText = "Hypotenuse is " + Math.sqrt(Z);
}


btn.addEventListener("click", calculateHypotenuse)