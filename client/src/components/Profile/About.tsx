import { UserInfo } from "../../api/model/Interfaces";
import testImages from "../../testimages";

export default function About({ user }: { user: UserInfo }) {
  return (
    <div className="sticky w-full h-1/3 sm:h-full sm:w-1/3 px-6 flex sm:flex-col gap-0 rounded text-black bg-gradient-to-b from-[#fada3aaf] via-[#fada3add] to-[#d8b712]">
      {/* <h1>hello</h1> */}
      <div className="h-[60%] sm:h-1/3 flex flex-col items-center">
        <img
          className="grow aspect-square rounded-full"
          src={user?.picture || testImages.noImage}
          alt=""
        />
        <div className=" h-[20%] text-center">
          <h1>{user?.nickname}</h1>
          <small
            className="relative cursor-pointer after:content-['click_to_copy'] after:absolute after:bg-slate-600 after:text-white after:rounded after:px-1 after:-right-4 after:-top-4  after:scale-0  hover:after:scale-100 after:transition-all after:duration-100 "
            onClick={(event) =>
              navigator.clipboard
                .writeText(event.currentTarget.innerText)
                .catch((err) => console.log(err))
            }
          >
            {user?.sub}
          </small>
        </div>
      </div>
      <div className="grow hidden sm:flex flex-col items-center justify-center">
        {[user?.email, user?.updated_at].map((item) => (
          <p className="  font-semibold text-center last:text-xs last:before:content-['last_update_at:'] last:before:block">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
