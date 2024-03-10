import { MovieInterface } from "../../../api/model/Interfaces";
import takeAvg from "../../../utils/takeAvg";
import MovieCard from "../../Cards/MovieCard";
import Frame from "../../Home/Others/Frame";

interface Props {
  myUpload: MovieInterface[];
}
export default function YourUploads({ myUpload }: Props) {
  return (
    <Frame
      frameTitle="Thank you for the contributions"
      frameSubTitle="you upload the following movies"
    >
      {myUpload.map(({ _id, title, ratings, banner }) => (
        <MovieCard
          id={_id}
          title={title}
          rating={takeAvg(ratings.map((rating) => rating.rating))}
          bannerURL={banner}
        />
      ))}
    </Frame>
  );
}
