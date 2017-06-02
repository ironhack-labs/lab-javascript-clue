
var deck = {
  suspects:[
   {
        firstName: 'Jacob',
        lastName:'Green',
        occupation:'informant',
        age:30,
        info:"Lots of connection and always helpful"
      },

      {
          firstName: 'Doctor',
          lastName:'Orchid',
          occupation:'Nurse',
          age:23,
          info:"Adopted daughter Mr.Boddy and a biologist"
        },

      {
            firstName: 'Victor',
            lastName:'Plum',
            occupation:'Videogame designer',
            age:25,
            info:"A Billionare"
          },

       {
              firstName: 'Kasandra',
              lastName:'Scarlet',
              occupation:'Actress',
              age:28,
              info:"Movie star who's past haunts her"
            },

            {
                firstName: 'Eleanor',
                lastName:'Peacock',
                occupation:'Unoccuupied',
                age:40,
                info:"Wealthy and popular"
              },


         {
           firstName: 'Jack',
           lastName:'Mustard',
           occupation:'Football Player',
           age:39,
           info:"Misses his past glories"
         }
       ],


      rooms:["Dining Room", "Conservatory", "Kitchen", "Study", "Library",
      "Billiard Room", "Lounge", "Ballroom", "Spa", "Living Room",
      "Observatory", "Theater", "Guest House", "Patio"],


  weapons:[
    {
      weapon1:{
        Name: 'Rope',
        weight:'1 lb',
        color:'Beige',
        damage:'30 HP'
      },

        weapon2: {
          Name: 'Knife',
          weight:'2 lb',
          color:'Silver',
          damage:'75 HP'

        },


          weapon3: {
            Name: 'Candlestick',
            weight:'3 lb',
            color:'Silver',
            damage:'50 HP',
          },

          weapon4: {
            Name: 'Dumbbell',
            weight:'20 lb',
            color:'Black',
            damage:'80 HP',
          },

          weapon5: {
            Name: 'Poison',
            weight:'1 lb',
            color:'Purple',
            damage:'100 HP',
          },
          weapon6: {
            Name: 'Axe',
            weight:'10 lb',
            color:'Brown',
            damage:'90 HP',
          },

          weapon7: {
            Name: 'Bat',
            weight:'6 lb',
            color:'Brown',
            damage:'50 HP',
          },

          weapon8: {
            Name: 'Trophy',
            weight:'5 lb',
            color:'Gold',
            damage:'40 HP',
          },

          weapon9: {
            Name: 'Pistol',
            weight:'4 lb',
            color:'Gold',
            damage:'100 HP',
          }
        }]
      };



  function randomStack(){
    return deck.suspects[Math.floor(Math.random() * (8 - 0) + 0)];
          }



randomStack();
