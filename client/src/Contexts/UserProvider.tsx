import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ReactNode, createContext, useContext } from "react";

interface UserInfo {
  email: string;
  email_verified: boolean;
  nickname: string;
  name: string;
  picture: string;
  sub: string;
  updated_at: string;
  readonly isLoggedin: boolean;
}

interface UserContext {
  userInfo: UseQueryResult<UserInfo>;
}

const UserContext = createContext<null | UserContext>(null);

export const useUserInfo = () => useContext(UserContext)?.userInfo;

const userInfoFromLocalStorage = localStorage.getItem("userinfo");

export default function UserProvider({ children }: { children: ReactNode }) {
  const userInfoQuery = useQuery({
    queryKey: ["userinfo"],
    queryFn: getUserInfo,
    staleTime: 60 * 60,
    retry: 1,
  });

  async function getUserInfo() {
    const response = await fetch(
      "http://localhost:3000/api/users/protected/userinfo",
      {
        credentials: "include",
      }
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  }
  return (
    <UserContext.Provider value={{ userInfo: userInfoQuery }}>
      {children}
    </UserContext.Provider>
  );
}
