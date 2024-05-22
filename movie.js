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

    toString() {
        console.log(this.title + " è un " + this.type + " di genere " + this.genre + ". " + "E' stato rilasciato nel " + this.year + " ed ha un voto di " + this.rating + ".");
    }
}

const movie = new Movie("Jaws", 1975, "Drama", 8, "film").toString();
console.log(movie);

class TvSerie extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
            super(title, year, genre, rating, type),
            this.seasons = seasons
    }

    toString() {
        console.log(this.title + " è una " + this.type + " di genere " + this.genre + ". " + "La prima stagione è stata rilasciato nel " + this.year + " ed in totale sono state prodotte " + this.seasons + "stagioni. Ha un voto di " + this.rating + ".");
    }
}

const tvserie = new TvSerie("Breaking Bad", 2008, "Drama", 9.5, "serie tv", 5).toString();
console.log(tvserie);