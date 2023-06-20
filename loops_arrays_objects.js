// var sports = ['football', 'tennis', 'rugby'];

// console.log(sports);

// var numberOfElements = sports.length;
// console.log('number of elements: ', numberOfElements);

// var firstSport = sports[0];
// console.log('first sport:', firstSport);

// var secondSport = sports[1];
// console.log('second sport:', secondSport);

// sports.push('curling');
// sports.push('snooker');
// sports.push('darts');

// console.log('sports:', sports);

// var removedSport = sports.pop();
// console.log('removed sports:', removedSport);

// // sports.unshift('basketball');
// console.log('sports:', sports);

// var removedSport = sports.splice(3,1);
// console.log('removed sports:', removedSport);

// for (var currentSport of sports){
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);
// }

// // LONG FORM FOR LOOP
// for (var i=0; i < sports.length; i++){
//     var currentSport = sports[i];
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);
// }

// for (var i=sports.length - 1; i > -1; i--){
//     var currentSport = sports[i];
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);
// }

// 

var movies = [
    {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
        'James Stewart',
        'Donna Reed'
    ],
    ratings: {
        critic: 94,
        audience: 95
    }
    },
    {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
        'Chadwick Boseman',
        'Michael B. Jordan'
    ],
    ratings: {
        critic: 97,
        audience: 77
    }
    },
    {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
        'Mark Hamill',
        'Carrie Fisher'
    ],
    ratings: {
        critic: 91,
        audience: 48
    }
    },
    {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
        'Joseph Cotten',
        'Dorothy Comingore'
    ],
    ratings: {
        critic: 100,
        audience: 90
    }
    },
];


// for (var currentMovie of movies) {
//     var movieTitle = currentMovie.title
//     var upperCasedMovie = movieTitle.toUpperCase();
//     console.log(upperCasedMovie);
// }
// for (var movie of movies) {

// }

for (var movie of movies) {
    if (movie.title.toUpperCase() === 'citizen kane'.toUpperCase()) { console.log(`Year of release of Citizen Kane: ${movie.year}`);
    }
}


for (var i = 0; i < movies.length; i++){
    var currentMovie = movies[i];
    console.log(`"${currentMovie.title}" has an audience rating of ${currentMovie.ratings.audience}`);
}


    

  // 1. Loop through the array of movies and make each movie's title all capital letters.

  // 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.

  // 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.

