import Actor from "../../model/Actor";
export default async function addMovieRefToCorrospondingActor(movieRef, casts) {
    await Promise.all(casts.map(async (castRef) => {
        await Actor.updateOne({ _id: castRef }, {
            $push: {
                "movies.previousMovies": movieRef,
            },
        });
    }));
}
