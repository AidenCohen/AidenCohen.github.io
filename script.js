alert("im here!!!!!!!!!!");
function draw_circle() {
var Draw_Circle = document.getElementByID("Aiden");
var Circle_Dimensions = Draw_Circle.getContext("2d");
Circle_Dimensions.beginPath();
Circle_Dimensions.arc(100,50,20,0,2*Math.PI);
Circle_Dimensions.stroke();
};

draw_circle();
