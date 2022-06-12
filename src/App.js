import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./assets/style/global";
import Registr from "./pages/Registr";
import Students from "./pages/Students"
import Create from "./pages/Students/create";
import Info from "./pages/Students/info";
import Update from "./pages/Students/update";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  const App = styled.div`
    .App {
      background-color: #f6f8fb;
      width: 100%;
      height: 100vh;
    }
  `;
  return (
    <App>
      <div className="App">
        <ToastContainer/>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registr />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<Info />} />
            <Route path="/students/create" element={<Create />} />
            <Route path="/students/update/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </App>
  );
};

export default App;
