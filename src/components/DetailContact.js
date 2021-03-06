import { useLocation } from "react-router-dom";
import { FiPhone } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FiVideo } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { FiEdit3 } from 'react-icons/fi';
import { useUserActions } from "../context/userContext";


const DetailContact = () => {

  let { state } = useLocation()
  const userActions = useUserActions()

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 border-t">
      <div className="w-full flex flex-col justify-start items-center max-w-[500px] gap-y-5 border-b pb-5">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img className="h-full object-cover" src="/assets/profile.png" alt="#" />
        </div>
        <div className="select-none flex flex-col justify-center items-center">
          <span className="text-lg font-bold">{state.firstName} {state.lastName}</span>
          <span className="text-gray-500">{state.numberPhone}</span>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <div className="cursor-pointer rounded-lg bg-blue-500 text-2xl text-white p-2">
            <FiPhone />
          </div>
          <div className="cursor-pointer rounded-lg bg-green-500 text-2xl text-white p-2">
            <FiMessageSquare />
          </div>
          <div className="cursor-pointer rounded-lg bg-red-500 text-2xl text-white p-2">
            <FiVideo />
          </div>
          <div className="group relative cursor-pointer rounded-lg text-2xl border p-2">
            <FiMoreHorizontal />
            <div className="absolute hidden group-hover:flex flex-col gap-y-2 top-full rounded-lg left-0 bg-white p-2 text-[1rem] border">
              <span onClick={() => userActions.deleteContactHandler(state.id)} className="flex items-center justify-center bg-red-500 text-white px-2 py-1 rounded">
                <FiTrash2 className="ml-2" />Delete
              </span>
              <span className="flex items-center justify-center bg-green-500 text-white px-2 py-1 rounded">
                <FiEdit3 className="ml-2" />Edite
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContact;