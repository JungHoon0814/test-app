import style from "./App.css";
import Main from "./pages/Main.js";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <div className={style.App}>
        <Routes>
          <Route exact="exact" path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route exact="exact" path="/" element={<Main />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
