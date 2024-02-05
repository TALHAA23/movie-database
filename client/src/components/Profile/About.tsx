import { useUserInfo } from "../../Contexts/UserProvider";
import testImages from "../../testimages";
import SectionError from "../Error/SectionError";
import SectionLoader from "../Loaders/SectionLoader";

export default function About() {
  // const user = useUserInfo();

  // if (user?.isPending) return <SectionLoader />;
  // else if (user?.isError) return <SectionError error={user.error} />;
  return (
    <div className=" sticky w-full h-1/3 sm:h-full sm:w-1/3 px-6 flex flex-col gap-0  rounded bg-gradient-to-b from-[#fada3aaf] via-[#fada3add] to-[#d8b712]">
      <h1>hello</h1>
      {/* <div className="h-[60%] sm:h-1/3 flex flex-col items-center">
        <img
          className="grow aspect-square rounded-full"
          src={user?.data.picture || testImages.noImage}
          alt=""
        />
        <div className=" h-[20%] text-center">
          <h1>{user?.data.nickname}</h1>
          <small
            className="relative cursor-pointer after:content-['click_to_copy'] after:absolute after:bg-slate-600 after:text-white after:rounded after:px-1 after:-right-4 after:-top-4  after:scale-0  hover:after:scale-100 after:transition-all after:duration-100 "
            onClick={(event) =>
              navigator.clipboard
                .writeText(event.currentTarget.innerText)
                .catch((err) => console.log(err))
            }
          >
            {user?.data.sub}
          </small>
        </div>
      </div>
      <div className="grow flex sm:flex-col flex-wrap items-center justify-center">
        {[user?.data.email, user?.data.updated_at].map((item) => (
          <div className="  font-semibold">{item}</div>
        ))}
      </div> */}
    </div>
  );
}
