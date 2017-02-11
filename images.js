//This is so that we could load images to an html page
//they will correspond with the game results
//it has nothing to do with the project and it is Sherwin going on a tangent.

var imgArr = ["./images/knife.jpg","./images/pistol.jpg"];
window.onload = function () {
document.getElementById("card1").src = imgArr[cards[1].weapons[1].img];
}
