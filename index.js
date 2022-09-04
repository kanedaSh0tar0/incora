import { streamingServices } from './streamingService.js'

import User from './user.js'

const netflix = streamingServices[0]
const amazonePrime = streamingServices[1]

const newUser = new User()
const userSub = newUser.subscribe(netflix)

// Double
const userSub2 = newUser.subscribe(netflix)
console.log(userSub2);

// Views
userSub.watch('Stranger Things')
userSub.watch('Stranger Things')
userSub.watch('Stranger Things')
userSub.watch('Stranger Things')
userSub.watch('Stranger Things')
userSub.watch('Love, Death & Robots')
userSub.watch('Love, Death & Robots')
userSub.watch('Love, Death & Robots')
userSub.watch('Love, Death & Robots')
userSub.watch('Love, Death & Robots')
userSub.watch('Love, Death & Robots')
userSub.watch('Love, Death & Robots')
userSub.watch("Sex Education")
userSub.watch('Squid Game')
userSub.watch('Squid Game')
userSub.watch('Squid Game')
userSub.watch('Squid Game')

// viewings of shows that don't exist
console.log(userSub.watch('Squid'))
console.log(userSub.watch('Just show'))

// 
console.log(netflix.getMostViewedShowsOfYear(2019));

// 
console.log(netflix.getMostViewedShowsOfGenre("Horror"));

// 
console.log(userSub.getRecommendationTrending());
console.log(userSub.getRecommendationByGenre('Horror'));

// 
console.log(netflix.shows[0].getDuration());

// Adding an existing show
netflix.addShow({
    "name": "Love, Death & Robots",
    "type": "Series",
    "episodes": [
        {
            "name": "episode 1"
        },
        {
            "name": "episode 2"
        },
        {
            "name": "episode 3"
        }
    ],
    "duration": 35,
    "genre": [
        "Anthology",
        "Science fantasy",
        "Adult animation",
        "Horror",
        "Black comedy"
    ],
    "releaseDate": {
        "dayAndMonth": "March 15",
        "year": 2019
    }
})

// Adding a new show
netflix.addShow({
    "name": "The Sandman",
    "type": "Series",
    "episodes": [
        {
            "name": "episode 1"
        },
        {
            "name": "episode 2"
        },
        {
            "name": "episode 3"
        },
        {
            "name": "episode 4"
        }
    ],
    "duration": 11,
    "genre": [
        "Fantasy drama",
        "Supernatural horror",
        "Superhero"
    ],
    "releaseDate": {
        "dayAndMonth": "August 5",
        "year": 2022
    }
})