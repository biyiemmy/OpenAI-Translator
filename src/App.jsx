import "./App.css";
import "typeface-roboto";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import { Home, Login, Register, About, Contact, Main } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="/main" element={<Main />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
