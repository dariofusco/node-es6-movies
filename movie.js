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