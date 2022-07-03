import { Route, Routes } from "react-router-dom";
import HomePage from "../src/page/HomePage"
import InfoPage from "./page/InfoPage";
import NewContactPage from "./page/NewContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newcontact" element={<NewContactPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
