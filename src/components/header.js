import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiAlertOctagon } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation()
  const isHome = location.pathname === "/";

  const titleData = [
    { path: "/", name: "Contact" },
    { path: "/newcontact", name: "New Contact" },
    { path: "/info", name: "Info" },
  ]

  const title = titleData.find(t => t.path === location.pathname)
  console.log(title)

  return (
    <header className="w-full bg-white flex items-center justify-center sticky top-0 right-0 ">
      <div className="max-w-[500px] p-4 flex justify-between items-center w-full">
        {isHome ? <Link to="/newcontact">
          <div className="p-1.5 bg-blue-500 rounded-lg">
            <FiPlus className="text-2xl text-white" />
          </div>
        </Link> : <div className="w-[35px] h-[35px]"></div>}
        <h1 className="select-none">{title.name}</h1>
        {isHome ?
          <Link to="/info">
            <div className="p-1.5">
              <FiAlertOctagon className="text-2xl" />
            </div>
          </Link> :
          <Link to="/">
            <div className="p-1.5 border rounded-lg">
              <FiChevronLeft className="text-2xl" />
            </div>
          </Link>
        }
      </div>
    </header>
  );
}

export default Header;