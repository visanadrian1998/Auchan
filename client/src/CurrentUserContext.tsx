import React, { useState } from "react"
import Axios from "axios";
import { userInfoObject } from "../src/utils";
export const CurrentUserContext = React.createContext({})

interface LayoutProps  {
  children: any
}

export const CurrentUserProvider = ({children}:LayoutProps) => {
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<userInfoObject>({Name: "", Username: "", Address: ""});

  const fetchCurrentUser = async() => {
    const response = await Axios.get("/api/verifyLoggedIn")
    if (response.data && response.data.loggedIn) {
      setisLoggedIn(true);
      setUserInfo(response.data.user);
    }else{
      setisLoggedIn(false);
      setUserInfo({Name: "", Username: "", Address: ""});
    }
  }

  return (
    <CurrentUserContext.Provider value={{ isLoggedIn, userInfo, fetchCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => React.useContext(CurrentUserContext)