var deck = {
  supects: [
    {
      name:'Jacob Green',
      color: 'green',
      description: 'Has a lot of conections, always willing to help poeple out',
    },
    {
      name: 'Dr.Orchild',
      color: 'white',
      description: 'Adopted daugther of Mr.Body, PDh plant toxicology, pivate education, expulesed after an incident involving poisoning',
    },
    {
      name: 'Victor Plum',
      color: 'purple',
      description: 'Billionaire video game designer who is embaracing his new popularity',
    },
    {
      name: 'Kasandra Scarlet',
      color: 'red',
      description: 'An A-list movie star whose past haunts her',
    },
    {
      name: 'Eleanor Peacock',
      color: 'blue',
      description: 'From a whealthy family, uses her status and money to earn popularity',

    },
    {
      name: 'Jack Mustard',
      color: 'yellow',
      description: 'Former football player who tries to get by his former glory',
    }],

  Weapons: [
    {
      weaponName: 'Rope',
      color: 'brown',
      hurt: 5
    },
    {
      weaponName: 'Knife',
      color: 'black',
      hurt: 7
    },
    {
      weaponName: 'Candlestick',
      color: 'silver',
      hurt: 6
    },
    {
      weaponName: 'Dumbbell',
      color: 'grey',
      hurt: 6
    },
    {
      weaponName: 'Poison',
      color: 'green',
      hurt: 10
    },
    {
      weaponName: 'Axe',
      color: 'brown',
      hurt: 9
    },
    {
      weaponName: 'Bat',
      color: 'brown',
      hurt: 7
    },
    {
      weaponName: 'Trophy',
      color: 'gold',
      hurt: 6
    },
    {
      WeaponName: 'Pistol',
      color: 'black',
      hurt: 10
    }
  ],

  rooms: [
    'Dining Room',
    'Conservatory',
    'Kitchen',
    'Study',
    'Library',
    'Billiard Room',
    'Lounge',
    'Ballroom',
    'Hall',
    'A spa',
    'Living Room',
    'Observatory',
    'Theater',
    'Guest House',
    'A patio'  ]

};



function aleatoryCards(deck){
  return deck[Math.floor(Math.random()* deck.length)];
  }

  var playerCards = [];
  function pickCards(){
    Object.keys(deck).forEach(function(key){
      playerCards.push(aleatoryCards(deck[key]));
    });
  }

  pickCards();

  console.log(playerCards);
