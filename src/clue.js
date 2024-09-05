    // ITERATION 1

    // Suspects Array **first name**, **last name**, **occupation**, **age**, **description**, **image** and **color**.

    const suspectsArray = [
        {
            firstName: 'Favas',
            lastName: 'Muhammed',
            occupation: 'student',
            age: 22,
            description: 'Myself',
            image: 'https://www.deviantart.com/aivoodoo/art/Glasses-Boy-1088243963',
            color: 'Black'
            
        },
        {
            firstName: 'Faiz',
            lastName: 'Muhammed',
            occupation: 'student',
            age: 17,
            description: 'My Brother',
            image: 'https://www.deviantart.com/kurthds/art/Stan-Marsh-in-real-life-1064252216',
            color: 'Blue'
        },
        {
            firstName: 'Sakkeer',
            lastName: 'Hussain',
            occupation: 'Business',
            age: 55,
            description: "My Father" ,
            image:'https://www.deviantart.com/haros98/art/Dad-emoji-3-984896889' ,
            color: 'Green'

        },
        {
            firstName: 'Shemina',
            lastName: 'Sakkeer',
            occupation: 'Doctor',
            age: 50,
            description: 'My Mother',
            image: 'https://emojis.sh/emoji/happy-blonde-mom-tgbWKChsTL',
            color: 'White'
        },
        
        {
            firstName: 'Fathima',
            lastName: 'Shirin',
            occupation: 'Engineer',
            age: 26,
            description: 'My Sister',
            image:'https://emojis.sh/emoji/my-sister-M9MCm195a1' ,
            color: 'Pink'
        },
        {
            firstName: 'Jazeel',
            lastName: 'Rahman',
            occupation: 'Business',
            age: 30,
            description: 'My Brother-in-law',
            image:'https://www.deviantart.com/aivoodoo/art/Kevin-Wendell-Crumb-1044617134' ,
            color: 'Red'
        }

    ];


    // Rooms Array will only have a **name**.

    const roomsArray = [
        { name: 'Dining Room' },
        { name: 'Conservatory' },
        { name: 'Kitchen' },
        { name: 'Study' },
        { name: 'Library' },
        { name: 'Billiard Room' },
        { name: 'Lounge' },
        { name: 'Ballroom' },
        { name: 'Hall' },
        { name: 'Spa' },
        { name: 'Living Room' },
        { name: 'Observatory' },
        { name: 'Theater' },
        { name: 'Guest House' },
        { name: 'Patio' }
    ];

    // Weapons Array There are a total of nine _weapons_. Each of them has a different **name** and **weight**.

    const weaponsArray = [
        {
            name: 'Bat',
            weight: 1.5 ,
        },
        {
            name: 'pistol',
            weight: 1.5 ,
        },
        {
            name: 'chair',
            weight: 4 ,
        },
        { name: 'rope', weight: 10 },
        { name: 'knife', weight: 8 },
        { name: 'candlestick', weight: 2 },
        { name: 'dumbbell', weight: 30 },
        { name: 'poison', weight: 2 },
        { name: 'axe', weight: 15 },
    ];


    // ITERATION 2

    function selectRandom(array) {
        const randomIndex = Math.floor(Math.random()* array.length);
        return array[randomIndex] 
    }


    function pickMystery() {
        return {
            suspect: selectRandom(suspectsArray),
            weapon: selectRandom(weaponsArray),
            room: selectRandom(roomsArray)
        };
    }



    // ITERATION 3

    function revealMystery(envelope) {
    return `${envelope.du}`
    }

    function revealMystery(envelope) {
        return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name}
        in the ${envelope.room.name}!`;
    }
    
    const mysteryEnvelope = pickMystery();
    console.log(revealMystery(mysteryEnvelope));