export default function addHasMore(documents: any[]) {
  const result = documents.map((document: any, index) => {
    return (document.hasMore = index == documents.length - 1 ? false : true);
  });
}
