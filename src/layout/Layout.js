import Header from "../components/header";
import UserContext from "../context/userContext";

const Layout = ({ children }) => {

  return (
    <>
      <UserContext>
        <Header />
        <main>
          {children}
        </main>
      </UserContext>
    </>
  );
}

export default Layout;