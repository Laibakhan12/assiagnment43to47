function abd(){
    alert("Thank you for purchasing")
}
function abc(){
    alert("Thank you for press link")
}
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
var a = "img1.jpg";
var b = "img2.jpg";

function imgchange(){
    var imageElement = document.getElementById('image');
    imageElement.src = b;
}
function img(){
    var imageElement = document.getElementById('image');
    imageElement.src = a;
}

var counter = 0;
function update(){
    var counterElement = document.getElementById('counter');
    counterElement.innerText=counter;
}
function increase(){
    counter++;
    update();
}
function decrease(){
    counter--;
    update();
}