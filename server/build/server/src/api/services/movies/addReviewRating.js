import getMovieReviews from "./getMovieReviews";
export default async function addReviewRating(rating) {
    console.log(rating);
    try {
        const reviews = await getMovieReviews(rating.movieRef);
        if (!reviews)
            throw new Error("Field not exist");
        const targetReview = reviews.reviews.id(rating.reviewRef);
        if (!targetReview)
            throw new Error("Review not found");
        // findindex
        const index = targetReview.ratings.findIndex((doc) => doc.rateBy == rating.userId);
        // if index update
        if (index !== -1)
            targetReview.ratings[index].rating = rating.rating;
        // else push
        else
            targetReview.ratings.push({
                rateBy: rating.userId,
                rating: rating.rating,
            });
        reviews.markModified("reviews");
        await reviews.save({ validateBeforeSave: false });
        return { addedTo: reviews?.title };
    }
    catch (err) {
        throw err;
    }
}
