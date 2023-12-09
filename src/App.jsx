import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./App.css";
import authService from "./Appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoding(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap
    flex-col  content-between bg-gray-600">
      <div className="w-full block ">
        <Header />
        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
