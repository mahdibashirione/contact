import React, { createContext, useContext, useState } from "react";

const UserState = createContext()
const UserDispatch = createContext()

const UserContext = ({ children }) => {

  const [user, setUser] = useState([
    { firstName: "mahdi", lastName: "bashiri", numberPhone: "09302294140", id: "325" },
    { firstName: "mahdi", lastName: "bashiri", numberPhone: "09302294140", id: "765" },
    { firstName: "mahdi", lastName: "bashiri", numberPhone: "09302294140", id: "956" },
    { firstName: "mahdi", lastName: "bashiri", numberPhone: "09302294140", id: "895" },
    { firstName: "mahdi", lastName: "bashiri", numberPhone: "09302294140", id: "456" },
    { firstName: "mahdi", lastName: "bashiri", numberPhone: "09302294140", id: "875" },
    { firstName: "mahdi", lastName: "bashiri", numberPhone: "09302294140", id: "125" },
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

