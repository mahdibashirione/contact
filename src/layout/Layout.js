import Header from "../components/header";
import SearchBar from "../components/SearchBar";
import { useLocation } from "react-router-dom";
import UserContext from "../context/userContext";

const Layout = ({ children }) => {

  const location = useLocation()
  const isHome = location.pathname === "/";

  return (
    <>
      <UserContext>
        <Header />
        {isHome && <SearchBar />}
        <main>
          {children}
        </main>
      </UserContext>
    </>
  );
}

export default Layout;