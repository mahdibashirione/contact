import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../components/Contact";
import { useUser } from "../context/userContext";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const HomePage = () => {

  const userState = useUser()
  const location = useLocation()
  const isHome = location.pathname === "/";
  const [search, setSearch] = useState("")
  const [filterSearch, setFilterSearch] = useState([])

  let navigate = useNavigate()
  const openProfileUserHandler = (path, state) => {
    navigate(path, state)
  }

  useEffect(() => {
    setFilterSearch(userState)
  }, [userState])

  useEffect(() => {
    if (search.length) {
      const filtered = userState.filter(u => u.firstName.includes(search) || u.lastName.includes(search))
      setFilterSearch(filtered)
    } else {
      setFilterSearch([...userState])
    }
  }, [search])


  return (
    <>
      {isHome && <SearchBar setSearch={setSearch} />}
      <section className="w-full flex items-center justify-center">
        <div className="p-4 max-w-[500px] w-full flex flex-col justify-start">
          {!filterSearch.length && <span className="w-full select-none text-center flex flex-col justify-center items-center">مخاطبی وجود ندارد</span>}
          {filterSearch.map(user => {
            return (
              <Contact
                click={openProfileUserHandler}
                key={user.id}
                user={user}
              />
            )
          })}
        </div>
      </section>
    </>
  );
}

export default HomePage;