var baseNHeight = document.querySelector(".sides");
var btn = document.querySelector("#calculate-area");
var output = document.querySelector("#output-area");


function calculation(){
    var base = Number(baseNHeight[0].value)
    var height = Number(baseNHeight[1].value)
    return 0.5*base*height ;
}



function calculateArea() {
    var area = calculation()
    output.innerText ="Area of the triangle is " + area;
}


btn.addEventListener("click", calculateArea)
