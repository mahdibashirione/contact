import { useLocation } from "react-router-dom";

const Contact = ({ user, click }) => {

  return (
    <div onClick={() => click(`/user/${user.id}`, { state: user })} className="w-full flex bg-white p-3 gap-x-2 rounded-lg select-none cursor-pointer">
      <div className="w-full flex flex-col items-end gap-y-1 border-b pb-2">
        <span>{user.firstName} {user.lastName}</span>
        <span>{user.numberPhone}</span>
      </div>
      <div>
        <div className="w-14 h-14 rounded-md bg-red-500"></div>
      </div>
    </div>
  );
}

export default Contact;