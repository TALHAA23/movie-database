export default async function extractGener(documents) {
    const findedGenre = new Set();
    documents.forEach((document) => {
        document.genre.forEach((genre) => findedGenre.add(genre));
    });
    return Array.from(findedGenre);
}
