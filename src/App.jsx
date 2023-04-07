import "./App.css";
import "typeface-roboto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./security/ProtectedRoute";
import { Home, Login, Register, About, Contact, Main } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route element={<ProtectedRoute />}>
            <Route exact path="/main" element={<Main />} />
          </Route> */}

          <Route
            path="/main"
            element={<ProtectedRoute path="/main" element={<Main />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
