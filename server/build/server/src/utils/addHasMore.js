export default function addHasMore(documents) {
    const result = documents.map((document, index) => {
        return (document.hasMore = index == documents.length - 1 ? false : true);
    });
}
