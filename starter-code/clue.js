
function random_selector(array) {
  var randomNum = Math.floor(Math.random()*(array.length+1));
}

function pick_mistery(array) {
}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);


var mrGreen = { firstName : 'Jacob', lastName : 'Green', color : 'green', description : 'He has a lot of connections', age : 45, image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', occupation : 'Entrepeneur'};
var drOrchid = { firstName : 'Doctor', lastName : 'Orchid', color : 'white', description : 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', age : 26, image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', occupation : 'Scientist'}
var profPlum = { firstName : 'Victor', lastName : 'Plum', color : 'purple', description : 'Billionare video game designer', age : 22, image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', occupation : 'Designer'}
var missScarlet = { firstName : 'Kasandra', lastName : 'Scarlet', color : 'red', description : 'She is an A-list movie star with a drak past', age : 31, image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', occupation : 'Actor'}
var mrsPeacock = { firstName: 'Eleanor', lastName: 'Peacock', color:'blue', description: 'She is from a wealthy family and uses her status and money to earn popularity', age: 36, image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', occupation: '0Socialité' }

var rope = { Weight: 10,}
var knife = { Weight: 8,}
var candlestick = { Weight: 2,}
var dumbbell ={ Weight: 30,}
var poison ={ Weight: 2,}

var rooms = [ 'Dinning Room', 'Conservatory', 'Kitchen', 'Study', 'Library' ];

var characters = [ mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock ];
var weapons = [ rope, knife, candlestick, dumbbell, poison];

