import { useNavigate } from "react-router-dom";
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