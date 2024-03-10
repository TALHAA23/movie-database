import Movie from "../../model/collections/Movie";
export default async function getByRandomYear() {
    const maxYear = new Date().getFullYear();
    const minYear = 1940;
    const randomYear = Math.floor(Math.random() * (maxYear - minYear) + minYear);
    const doc = await Movie.find({
        releaseYear: randomYear,
    }, "title banner").limit(3);
    return { featured: `Featured By Year (${randomYear})`, featuredMovies: doc };
}
