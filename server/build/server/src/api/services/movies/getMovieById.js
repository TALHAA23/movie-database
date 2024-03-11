import Movie from "../../model/collections/Movie";
export async function getMovieById(id) {
    const featureBasedOn = ["number_of_ratings", "highest_rating", "newest"][Math.floor(Math.random() * 3)];
    try {
        const movie = await Movie.findById(id)
            .populate("cast", "_id name banner")
            .populate("reviews.reviewedBy", "_id userInfo.username")
            .populate("ratings.rateBy", "_id userInfo.username")
            .exec();
        if (!movie)
            throw new Error("Movie not found");
        if (!movie.reviews.length)
            return movie; //no featured review
        let selectedReview;
        if (featureBasedOn === "number_of_ratings") {
            selectedReview = movie.reviews.reduce((prev, current) => prev.ratings.length > current.ratings.length ? prev : current);
        }
        else if (featureBasedOn === "highest_rating") {
            selectedReview = movie.reviews.reduce((prev, current) => averageRating(prev?.ratings) > averageRating(current.ratings)
                ? prev
                : current);
        }
        else if (featureBasedOn === "newest") {
            selectedReview = movie.reviews.reduce((prev, current) => prev.reviewDate > current.reviewDate ? prev : current);
        }
        movie.numberofReviews = movie.reviews.length;
        //! We are using a type assertion to 'unknown' to bypass TypeScript's type checking.
        //! This is because TypeScript is not aware that the 'populate' method in Mongoose replaces ObjectIds with actual documents.
        //! So, we first assert to 'unknown', which can be assigned to any type.
        movie.reviews = selectedReview
            ? [selectedReview]
            : [movie.reviews?.[0]];
        return movie;
    }
    catch (err) {
        throw err;
    }
}
function averageRating(ratings) {
    return (ratings.reduce((a, b) => a + (b.rating || 0), 0) / (ratings.length || 1));
}
