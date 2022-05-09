import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaginationPage from "./Pagination/PaginationPage";
import User from "./User/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/table" element={<PaginationPage />} />
        <Route path="/" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
