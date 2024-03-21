// Define the Movie class
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating instances of Movie with custom examples
const movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
const movie2 = new Movie("The Shawshank Redemption", "Castle Rock Entertainment", "R");
const movie3 = new Movie("Finding Nemo", "Pixar Animation Studios", "G");
const movie4 = new Movie("The Dark Knight", "Warner Bros.", "PG-13");
const movie5 = new Movie("Jurassic Park", "Universal Pictures", "PG");

const customMovies = [movie1, movie2, movie3, movie4, movie5];
const pgMovies = Movie.getPG(customMovies);
console.log(pgMovies);
