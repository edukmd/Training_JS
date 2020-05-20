var circle1 = window.document.getElementById("circle1");
var circle2 = window.document.getElementById("circle2");
var circle3 = window.document.getElementById("circle3");
var flag = 0;
myVar = setInterval(timer, 1000);

function timer() {
    flag++;
    if (flag == 2) {
        circle1.style.filter = "brightness(100%)";
        circle2.style.filter = "brightness(50%)";
        circle3.style.filter = "brightness(50%)";
        circle1.style.boxShadow = "0px 0px 50px 10px red";
        circle2.style.boxShadow = "0px 0px 0px 0px yellow";
        circle3.style.boxShadow = "0px 0px 0px 0px green";
    } else if (flag == 4) {
        circle1.style.filter = "brightness(50%)";
        circle2.style.filter = "brightness(50%)";
        circle3.style.filter = "brightness(100%)";
        circle1.style.boxShadow = "0px 0px 0px 0px red";
        circle2.style.boxShadow = "0px 0px 0px 0px yellow";
        circle3.style.boxShadow = "0px 0px 50px 10px green";
    } else if (flag == 6) {
        flag = 0;
        circle1.style.filter = "brightness(50%)";
        circle2.style.filter = "brightness(100%)";
        circle3.style.filter = "brightness(50%)";
        circle1.style.boxShadow = "0px 0px 0px 0px red";
        circle2.style.boxShadow = "0px 0px 50px 10px yellow";
        circle3.style.boxShadow = "0px 0px 0px 0px rgb(0, 255, 0)";
    }

}