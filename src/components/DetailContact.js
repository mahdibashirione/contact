import { useLocation } from "react-router-dom";

const DetailContact = () => {

  let { state } = useLocation()

  return (
    <div className="w-full flex items-center justify-center border-t">
      <div className="w-full max-w-[500px] flex flex-col items-end justify-start p-4">
        <span>{state.firstName}</span>
        <span>{state.lastName}</span>
        <span>{state.numberPhone}</span>
      </div>
    </div>
  );
}

export default DetailContact;