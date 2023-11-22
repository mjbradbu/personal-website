var i = 0;
var txt = "hi, my name is";
var speed = 500;
var delay = 1000;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing-effect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(function() {
            i = 0;
            document.getElementById("typing-effect").innerHTML = '';
            typeWriter();
        }, delay);
    }
}

window.onload = function () {
    typeWriter();
};

