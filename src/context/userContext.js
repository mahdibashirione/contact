import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserState = createContext()
const UserDispatch = createContext()

const UserContext = ({ children }) => {

  const [user, setUser] = useState([])

  useEffect(() => {
    if (user.length) {
      localStorage.setItem("dataContact", JSON.stringify(user))
    }
  }, [user])

  useEffect(() => {
    const contactLocalstorage = JSON.parse(
      localStorage.getItem("dataContact")
    )
    if (contactLocalstorage) {
      setUser(contactLocalstorage)
    }
  }, [])

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
  const userState = useUser()
  const setUser = useContext(UserDispatch)
  const navigate = useNavigate()

  const deleteContactHandler = (id) => {
    const filterContact = userState.filter(c => c.id !== id)
    setUser(filterContact)
    navigate("/")
  }
  return { setUser, deleteContactHandler }
}

