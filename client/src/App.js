import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import YogaR from "./pages/YogaR";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pay from "./pages/Pay";
import { Toaster } from "react-hot-toast";

function App() {
  const id = localStorage.getItem("userId");
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<YogaR />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {id && <Route path="/pay" element={<Pay />} />}
      </Routes>
    </>
  );
}

export default App;
