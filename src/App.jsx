import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <div className="">
          <div className="container bg-slate-300 max-w-screen h-screen">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
