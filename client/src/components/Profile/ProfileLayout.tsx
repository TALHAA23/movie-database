import { useUserInfo } from "../../Contexts/UserProvider";
import SectionError from "../Error/SectionError";
import SignupAppeal from "../Information/SiginupAppeal";
import PageLoader from "../Loaders/PageLoader";
import About from "./About";
import ProfileNavigations from "./ProfileNavigations";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  const user = useUserInfo();

  if (user?.isPending) return <PageLoader />;
  else if (user?.isError)
    return (
      <SignupAppeal
        coverPage={true}
        text={user.error.message}
        subtext="Sign In to see your profile, settings, and movies!"
      />
    );
  if (!user?.data)
    return <SectionError error={new Error("Something went wrong")} />;

  return (
    <div className="h-[calc(100vh-60px)] flex gap-0 flex-col sm:flex-row">
      <About user={user?.data} />
      <div className="relative flex sm:pl-11">
        <ProfileNavigations />
        <Outlet />
      </div>
    </div>
  );
}
