var jacob={
  name:"jacob",
  lastName:"Green",
  occupation:"",
  age:"",
  description:"He has a lot of connections and is always willing to help people out -- for a price",
  image:"",
  color:"green"
};
var drOrchid={
  name:"drOrchid",
  lastName:"Orchid",
  occupation:"",
  age:"",
  description:"He has a lot of connections and is always willing to help people out -- for a price",
  image:"",
  color:"white"
};

var victor={
  name:"victor",
  lastName:"Plum",
  occupation:"",
  age:"",
  description:"He has a lot of connections and is always willing to help people out -- for a price",
  image:""
};
var kasandra={
  name:"kassandra",
  lastName:"scarlet",
  occupation:"",
  age:"",
  description:"He has a lot of connections and is always willing to help people out -- for a price",
  image:""
};
var eleanor={
  name:"eleanor",
  lastName:"peackock",
  occupation:"",
  age:"",
  description:"He has a lot of connections and is always willing to help people out -- for a price",
  image:""
};
var jack={
  name:"jack",
  lastName:"mustard",
  occupation:"",
  age:"",
  description:"He has a lot of connections and is always willing to help people out -- for a price",
  image:""
};

var rope={
    name:"rope",
    weight:"",
    color:""
};

var knife={
    name:"knife",
    weight:"",
    color:""
};

var candlestick={
    name:"candlestick",
    weight:"",
    color:""
};

var dumbbell={
    name:"dumbbell",
    weight:"",
    color:""
};

var poison={
    name:"poison",
    weight:"",
    color:""
};

var axe={
    name:"axe",
    weight:"",
    color:""
};

var bat={
    name:"bat",
    weight:"",
    color:""
};

var trophy={
    name:"trophy",
    weight:"",
    color:""
};

var pistol={
    name:"pistol",
    weight:"",
    color:""
};

var suspects=[],gameBoard=[],weapons=[];

suspects.push(jacob,drOrchid,victor,kasandra,eleanor,jack);
weapons.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);
gameBoard.push("Dinning room","Conservatory","Kitchen","Study","Library","Billiard room","Lounge","Ballroom","Hall","A spa","Living room","Observatory","theatre","Guest house","A patio");

 
function chooseCard(stack){
  console.log(stack.length);
  return stack[Math.floor(Math.random()*stack.length)];

}

function createCaseFileConfidential(allSuspects,allWeapons,allRooms){
  caseFileCodidential=[];
  caseFileCodidential[0]=chooseCard(allSuspects);
  caseFileCodidential[1]=chooseCard(allRooms);
  caseFileCodidential[2]=chooseCard(allWeapons);

  return caseFileCodidential;
}



function revealMistery(allSuspects,allRooms,allWeapons){
  return createCaseFileConfidential(allSuspects,allRooms,allWeapons);
}


revealedMistery=revealMistery(suspects,gameBoard,weapons);
console.log("La solucion es:"+revealedMistery[0].name+" "+" "+revealedMistery[1].name +" "+revealedMistery[2]);
