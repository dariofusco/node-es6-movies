const { reset } = require("nodemon");

const movies = [
    {
        title: "Jaws",
        year: 1975,
        genre: "Drama",
        rating: 8,
        type: "film"
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Drama",
        rating: 10,
        type: "serie tv",
        seasons: 5
    },
];

class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title,
            this.year = year,
            this.genre = genre,
            this.rating = rating,
            this.type = type
    }

    toString() {
        console.log(this.title + " è un " + this.type + " di genere " + this.genre + ". " + "E' stato rilasciato nel " + this.year + " ed ha un voto di " + this.rating + ".");
    }
}

const movie = new Movie("Jaws", 1975, "Drama", 8, "film");
console.log(movie.toString());

class TvSerie extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type),
            this.seasons = seasons
    }

    toString() {
        console.log(this.title + " è una " + this.type + " di genere " + this.genre + ". " + "La prima stagione è stata rilasciato nel " + this.year + " ed in totale sono state prodotte " + this.seasons + "stagioni. Ha un voto di " + this.rating + ".");
    }
}

const tvSerie = new TvSerie("Breaking Bad", 2008, "Drama", 9.5, "serie tv", 5);
console.log(tvSerie.toString());

const movieInstances = movies.map((obj) => {
    if (obj.type == "film") {
        return new Movie(obj.title, obj.year, obj.genre, obj.rating, obj.type)
    }
    return new TvSerie(obj.title, obj.year, obj.genre, obj.rating, obj.type, obj.seasons)
})

console.log(movieInstances);

function averageRating(arr, genre) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].genre == genre) {
            sum += arr[i].rating;
        }
    }
    return sum / arr.length;
}

console.log(averageRating(movieInstances, "Drama"))

