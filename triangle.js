var inputs = document.querySelectorAll(".angle-input")
var button = document.querySelector("#is-triangle-btn")
var output = document.querySelector("#output")


function calculateSum(Angle1,Angle2, Angle3){
var angleSum = Angle1 + Angle2 + Angle3;
return angleSum;
}



function formTriangle() {
 var angleSum = calculateSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (angleSum === 180){
        output.innerText = "Triangle is form"
    } else {
        output.innerText = "Triangle is not form"
    }
    
}




button.addEventListener("click", formTriangle)