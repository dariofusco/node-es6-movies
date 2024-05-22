const { reset } = require("nodemon");

const movies = [
    {
        title: "",
        year: "",
        genre: "",
        rating: "",
        type: ""
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
}

const movie = new Movie("Jaws", 1975, "Drama", 8, "film");
console.log(movie);

class TvSerie extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
            super(title, year, genre, rating, type),
            this.seasons = seasons
    }
}

const tvserie = new TvSerie("Breaking Bad", 2008, "Drama", 9.5, "serie tv", 5);
console.log(tvserie);