class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movirs) {
    console.log(movirs.filter((movie) => movie.rating === "PG"));
  }
}
const movies = [
  new Movie("Kuruthipunal", "RKFI"),
  new Movie("oomai Vizhigal", "Studio xyz", "PG-13"),
  new Movie("Malignant", "Studio abc", "PG"),
];
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
