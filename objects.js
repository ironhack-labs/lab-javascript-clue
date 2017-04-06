var cards = {

  suspects: {

    jacob: {
      name:"Jacob Green",
      color: "his color is green.",
      attribute: "He has a lot of connections and is always willing to help people out -- for a price."},

    doctor: {
      name:"Doctor Orchid",
      color: "her color is white",
      attribute: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"

    },

    victor: { name:"Victor Plum",
    color: "his color is purple",
    attribute: "He is a billionaire video game designer who is embracing his new popularity."},

    kasandra: {
      name: "Kasandra Scarlet",
      color: "her color is red",
      attribute: "She is an A-list movie star whose past haunts her."},

    eleanor: {
      name: "Eleanor Peacock",
      color: "her color is blue",
      attribute: "She is from a wealthy family and uses her status and money to earn popularity."},

    jack: {
      name: "Jack Mustard",
      color: "his color is yellow",
      attribute: "He is a former football player who tries to get by on his former glory."},

  },

  rooms: {
    dining: "dining room",
    conservatory: "conservatory",
    kitchen: "kitchen",
    study: "study",
    library: "library",
    billiard: "billiard room",
    lounge: "lounge",
    ballroom: "ballroom",
    hall: "hall",
    spa: "spa",
    living: "living room",
    observatory: "observatory",
    theater: "theater",
    guest: "guest house",
    patio: "patio",
  },

  weapons: {
    rope: "rope",
    knife: "knife",
    candlestick: "candlestick",
    dumbell: "dumbbell",
    poison: "poison",
    axe: "axe",
    bat: "bat",
    trophy: "trophy",
    pistol: "pistol",
  },

  randomCard: function(key){
    return key[Object.keys(key)[(String(Math.floor(Math.random() * Object.keys(key).length)))]];
  },

  secretEnvelope: function(){
    return [this.randomCard(this.suspects).name, this.randomCard(this.rooms), this.randomCard(this.weapons)];
  },

  revealSuspect: function(){
    var secret = this.secretEnvelope();
    console.log("It was " + secret[0] + " in the " + secret[1] + " with the " + secret[2]);
  },
  
  };

cards.revealSuspect();
cards.revealSuspect();
cards.revealSuspect();
cards.revealSuspect();
