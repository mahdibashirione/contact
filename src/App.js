import { Route, Routes } from "react-router-dom";
import HomePage from "../src/page/HomePage"
import DetailContact from "./components/DetailContact";
import InfoPage from "./page/InfoPage";
import NewContactPage from "./page/NewContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newcontact" element={<NewContactPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/user/:id" element={<DetailContact />} />
    </Routes>
  );
}

export default App;
