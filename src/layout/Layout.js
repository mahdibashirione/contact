import Header from "../components/header";
import SearchBar from "../components/SearchBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {

  const location = useLocation()
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />
      {isHome && <SearchBar />}
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;