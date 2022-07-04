import { Link, useNavigate } from "react-router-dom";
import Contact from "../components/Contact";
import { useUser } from "../context/userContext";

const HomePage = () => {
  const userState = useUser()

  let navigate = useNavigate()
  const openProfileUserHandler = (path, state) => {
    navigate(path, state)
  }

  return (
    <section className="w-full flex items-center justify-center">
      <div className="p-4 max-w-[500px] w-full flex flex-col justify-start">
        {!userState.length && <span className="w-full select-none text-center flex flex-col justify-center items-center">
          مخاطبی وجود ندارد
          <Link className="bg-green-500 text-white p-2 rounded-lg mt-4" to={"/newcontact"}>
            New Contact
          </Link>
        </span>}
        {userState.map(user => {
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
  );
}

export default HomePage;