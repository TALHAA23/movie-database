import Image from "./Image";
import PaginationButton from "../../../PaginationButton";
import Bookmark from "./Bookmark";
import Title from "./Title";
export default function SlideBar() {
  return (
    <div className="relative flex justify-center bg-black text-white">
      <Image />
      <PaginationButton diraction="prev" />
      <PaginationButton diraction="next" />
      <Bookmark bookmarked={false} />
      <Title />
    </div>
  );
}
