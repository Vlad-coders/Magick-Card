import { useEffect, useState } from "react";
import SignUpPage from "./components/pages/SignUpPage";
import axiosInstance, { setAccessToken } from "./api/axiosInstance";

import { Route, Routes, useNavigate } from "react-router";

import LoginPage from "./components/pages/LoginPage";
import PersonalAccount from "./components/pages/PersonalAccount";

import Layout from "./Layout";
function App() {
  const [user, setUser] = useState({ status: "logging" });
  useEffect(() => {
    axiosInstance("/tokens/refresh")
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: "logged", data: data.user });
        }, 1000);
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: "guest", data: null });
        setAccessToken("");
      });
  }, []);

  const logoutHandler = async () => {
    // alert('logout');
    await axiosInstance
      .get("/auth/logout")
      .then(() => setUser({ status: "guest", data: null }));
  };
  const navigate = useNavigate();
  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert("Missing required fields");
    }
    axiosInstance.post("/auth/signUp", formData).then(({ data }) => {
      setUser({ status: "logged", data: data.user });
      setAccessToken(data.accessToken);
    });
    navigate("/");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert("Missing required fields");
    }
    axiosInstance.post("/auth/signin", formData).then(({ data }) => {
      setUser({ status: "logged", data: data.user });
      setAccessToken(data.accessToken);
    });
  };

  return (
    <Routes>
      <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
        <Route path="/" element={<PersonalAccount user={user} />} />

        <Route
          path="/signUp"
          element={<SignUpPage signUpHandler={signUpHandler} />}
        />
        <Route
          path="/login"
          element={<LoginPage loginHandler={loginHandler} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
