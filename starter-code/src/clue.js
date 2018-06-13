// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// * * * * * * * * * * * * 
// * ARREGLOS  * * * * * * 
// * * * * * * * * * * * * 

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];


// * * * * * * * * * * * * 

var mrGreen = { nombre: "Jacob", apellido: "Green", color: "green", descripcion: "He has a lot of connections", 
edad: 45, imagen: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", ocupacion: "Entrepreneur" }

var drOrchid = { nombre: "Doctor", apellido: "Orchid", color: "white", descripcion: "PhD in plant toxicology. Adopted daughter of Mr. Boddys", 
edad: 26, imagen: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", ocupacion: "Scientist"}

var profPlum = { nombre: "Victor", apellido: "Plum", color: "purple", descripcion: "Billionare video game designers", 
edad: 22, imagen: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", ocupacion: "Designer"}

var missScarlet = { nombre: "Kasandra", apellido: "Scarlet", color: "red", descripcion: "She is an A-list movie star with a dark past", 
edad: 31, imagen: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", ocupacion: "Actor"}

var mrsPeacock = { nombre: "Eleanor", apellido: "Peacock", color: "blue", descripcion: "She is from a wealthy family and uses her status and money to earn popularity", 
edad: 36, imagen: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", ocupacion: "Socialité"}

var mrMustard = { nombre: " Jack", apellido: "Mustard", color: "yellow", descripcion: "He is a former football player who tries to get by on his former glory", 
edad: 62, imagen: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", ocupacion: "Retired Football player"}


// * * * * * * * * * * * * 

var cuerda = { arma: "rope", peso: 10 }
var cuchillo = { arma: "knife", peso: 8 }
var candelabro = { arma: "candlestick", peso: 2}
var pesa = { arma: "dumbbell", peso: 30 }
var veneno = { arma: "poison", peso: 2 }
var hacha = { arma: "axe", peso: 15 }
var batte = { arma: "bat", peso: 13 }
var trofeo = { arma: "trophy", peso: 25 }
var pistola = { arma: "pisto", peso: 20 }


var comedor = { room: "Dinning Room" }
var conservatorio = { room: "Conservatory" }
var cocina = { room: "Kitchen" }
var estudio = { room: "Study"}
var biblioteca = { room: "Library"}
var tablero = { room: "Billiard Room"}
var salon = { room: "Lounge"}
var salaPelota = { room: "Ballroom"}
var pasillo = { room:"Hall" }
var espa = { room: "Spa"}
var sala = { room: "Living Room"}
var observatorio = { room: "Observatory"}
var teatro = { room: "Theater"}
var invitados = { room: "Guest House"}
var pat = {room: "Patio"}


charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
weaponsArray.push(cuerda, cuchillo, candelabro, pesa, veneno, hacha, batte,trofeo, pistola);
roomsArray.push(comedor, conservatorio, cocina,estudio, biblioteca, tablero, 
                salon, salaPelota, pasillo, espa, sala, observatorio, teatro, invitados, pat);


var asesino, armaRandom, habitacion;

asesino = (Math.random(Math.floor()) * charactersArray.length);
asesino = Math.floor(asesino);
//console.log(charactersArray[asesino].nombre);

armaRandom = (Math.random(Math.floor()) * weaponsArray.length);
armaRandom = Math.floor(armaRandom);
//console.log(weaponsArray[armaRandom].arma);

habitacion = (Math.random(Math.floor()) * roomsArray.length);
habitacion = Math.floor(habitacion);
//console.log(roomsArray[habitacion].room);

console.log("El asesino es " + charactersArray[asesino].nombre + " y cometió el crimen con " 
+ weaponsArray[armaRandom].arma + " en " + roomsArray[habitacion].room);

