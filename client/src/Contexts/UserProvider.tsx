import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ReactNode, createContext, useContext } from "react";
import getUserInfo from "../api/userInfoApi";

interface UserInfo {
  email: string;
  email_verified: boolean;
  nickname: string;
  name: string;
  picture: string;
  sub: string;
  updated_at: string;
}

interface UserContext {
  userInfoQuery: UseQueryResult<UserInfo>;
}

const UserContext = createContext<null | UserContext>(null);

export const useUserInfo = () => useContext(UserContext)?.userInfoQuery;
export const useIsUserLoggedIn = () =>
  useContext(UserContext)?.userInfoQuery.data ? true : false;

export default function UserProvider({ children }: { children: ReactNode }) {
  const userInfoQuery = useQuery({
    queryKey: ["userinfo"],
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });

  return (
    <UserContext.Provider value={{ userInfoQuery }}>
      {children}
    </UserContext.Provider>
  );
}
