import { useState } from "react";
import { useUser, useUserActions } from "../context/userContext";
import { useNavigate } from "react-router-dom";
const NewContact = () => {

  const userActions = useUserActions()
  const userState = useUser()
  const navigate = useNavigate()


  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    numberPhone: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    userActions.setUser([...userState, form])
    setForm({
      firstName: "",
      lastName: "",
      numberPhone: "",
    })
    navigate("/")
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, id: Math.floor(Math.random() * 1000) })
  }

  let buttonDisabled = true;
  if (form.firstName.length && form.lastName.lastIndexOf && form.numberPhone.length === 11) {
    buttonDisabled = false;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between w-full h-[calc(100vh-100px)] p-4">
      <div className="w-full flex flex-col justify-start items-center gap-y-4">
        <input onChange={handleChange} name="firstName" className="w-full p-4 border rounded-lg outline-none focus:border-blue-500" type={"text"} placeholder="First Name" />
        <input onChange={handleChange} name="lastName" className="w-full p-4 border rounded-lg outline-none focus:border-blue-500" type={"text"} placeholder="Last Name" />
        <input onChange={handleChange} name="numberPhone" maxLength={11} minLength={11} className="w-full p-4 border rounded-lg outline-none focus:border-blue-500" type={"text"} inputMode="numeric" placeholder="Number Phone" />
      </div>
      <button disabled={buttonDisabled} type="submit" className={`w-full py-3 bg-blue-500 text-white rounded-lg ${buttonDisabled ? "opacity-40" : "opacity-100"}`}>Save</button>
    </form>
  );
}

export default NewContact;