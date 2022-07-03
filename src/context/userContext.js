import React, { createContext, useContext, useState } from "react";

const UserState = createContext()
const UserDispatch = createContext()

const UserContext = ({ children }) => {

  const [user, setUser] = useState([
    { firstName: "mahdi", lastName: "bashiri", numberPhone: "09302294140", id: "325" },
    { firstName: "ali", lastName: "momi", numberPhone: "09305684141", id: "325" },
  ])

  return (
    <UserState.Provider value={user}>
      <UserDispatch.Provider value={setUser}>
        {children}
      </UserDispatch.Provider>
    </UserState.Provider>
  );
}

export default UserContext;

export const useUser = () => useContext(UserState)
export const useUserActions = () => {
  const setUser = useContext(UserDispatch)
  return { setUser }
}

