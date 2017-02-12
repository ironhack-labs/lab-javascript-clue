//This is so that we could load images to an html page
//they will correspond with the game results
//it has nothing to do with the project and it is Sherwin going on a tangent.

var imgArr = ["./images/ballroom.jpg","./images/billiard.jpg",
"./images/candlestick.jpg","./images/colonel-mustard.jpg",
"./images/conservatory.jpg","./images/dining.jpg",
"./images/hall.jpg","./images/kitchen.jpg",
"./images/knife.jpg","./images/lead-pipe.jpg",
"./images/library.jpg","./images/logo.jpg",
"./images/lounge.jpg","./images/miss-scarlet.jpg",
"./images/mr-green.jpg","./images/mrs-peacock.jpg",
"./images/mrs-white.jpg","./images/professor-plum.jpg",
"./images/revolver.jpg","./images/rope.jpg",
"./images/study.jpg","./images/wrench.jpg"];




function imgLoader() {
  document.getElementById("card1").src = imgArr[card1.img];
  document.getElementById("card2").src = imgArr[card2.img];
  document.getElementById("card3").src = imgArr[card3.img];
  var p1 = document.getElementById('name1');
  p1.innerHTML = p1.innerHTML + card1.name;
  var p2 = document.getElementById('name2');
  p2.innerHTML = p2.innerHTML + card2.name;
  var p3 = document.getElementById('name3');
  p3.innerHTML = p3.innerHTML + card3.name;
}
