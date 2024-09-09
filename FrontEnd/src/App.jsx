import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Sign from "./pages/Sign";
import bcg from "./assets/images/bcg2.jpg";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await Axios.get("http://localhost:3000/getData");
    setData(response.data);
    useEffect(() => {
      getData();
    }, []);
  };
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bcg})` }}
    >
      {data}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/Sign" element={<Sign />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Faq" element={<Faq />}></Route>
          <Route path="/Log" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
