var mrGreen = { firstName : 'Jacob', lastName : 'Green', color : 'green', description : 'He has a lot of connections', age : 45, image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', occupation : 'Entrepeneur'};
var drOrchid = { firstName : 'Doctor', lastName : 'Orchid', color : 'white', description : 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', age : 26, image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', occupation : 'Scientist'};
var profPlum = { firstName : 'Victor', lastName : 'Plum', color : 'purple', description : 'Billionare video game designer', age : 22, image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', occupation : 'Designer'};
var missScarlet = { firstName : 'Kasandra', lastName : 'Scarlet', color : 'red', description : 'She is an A-list movie star with a drak past', age : 31, image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', occupation : 'Actor'};
var mrsPeacock = { firstName: 'Eleanor', lastName: 'Peacock', color:'blue', description: 'She is from a wealthy family and uses her status and money to earn popularity', age: 36, image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', occupation: '0Socialité' };

var rope = { name : 'rope', Weight: 10,};
var knife = { name : 'knife', Weight: 8,};
var candlestick = { name : 'candlestick', Weight: 2,};
var dumbbell ={ name : 'dumbbell', Weight: 30,};
var poison ={ name : 'poison', Weight: 2,};

var rooms = [ 'Dinning Room', 'Conservatory', 'Kitchen', 'Study', 'Library' ];

var characters = [ mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock ];
var weapons = [ rope, knife, candlestick, dumbbell, poison];

function random_selector(array) {
  var randomNum = Math.floor(Math.random()*(array.length));
  return array[randomNum];
}

function pick_mistery() {
    var mistery = [];
    mistery.push(random_selector(characters).firstName);
    mistery.push(random_selector(weapons).name);
    mistery.push(random_selector(rooms));
    return mistery;
}

function reveal_mistery(mistery) {
  console.log(`The killer was ${mistery_envelope[0]} with a ${mistery_envelope[1]} in the ${mistery_envelope[2]}`);
}
