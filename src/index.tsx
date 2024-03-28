import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "./styles/index.css";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
import { Dashboard, Login, SignUp, WorkOutPage, WorkoutDiet } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { appRoute } from "./utils";
import { Layout } from "./Components/Layout/main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthLayout } from "./AuthLayout";
import { NotFoundPage } from "./pages/NotFoundPage";
import { setuser } from "./store/slices";
import axios from "axios";

const el = document.getElementById("root");
if (el === null) throw new Error("Root container missing in index.html");
const root = ReactDOM.createRoot(el);
const App = () => {
  const dispatch = useDispatch();
  const auth = JSON.parse(localStorage.getItem("authToken") ?? "{}");
  useEffect(() => {
    if (auth?.token) {
      dispatch(setuser(auth));
    }
  });

  const fetchData = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/notify?id=${auth.details.id}`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data initially when the component mounts
    if (auth.details.id) {
      fetchData();

      // Set up interval to fetch data every 15 minutes
      const interval = setInterval(fetchData, 15 * 60 * 1000);

      // Clear interval on component unmount
      return () => clearInterval(interval);
    }
  }, [auth.details.id]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={appRoute.home}
          element={
            <Layout showContent={true}>
              <Login />
            </Layout>
          }
        />
        <Route
          path={appRoute.login}
          element={
            <Layout showContent={true}>
              <Login />
            </Layout>
          }
        />

        <Route
          path={appRoute.dashboard}
          element={
            <AuthLayout>
              <Layout>
                <Dashboard />
              </Layout>
            </AuthLayout>
          }
        />
        <Route
          path={appRoute.workout}
          element={
            <AuthLayout>
              <Layout>
                <WorkOutPage />
              </Layout>
            </AuthLayout>
          }
        />
        <Route
          path={appRoute.diet}
          element={
            <AuthLayout>
              <Layout>
                <WorkoutDiet />
              </Layout>
            </AuthLayout>
          }
        />
        <Route
          path={appRoute.signUp}
          element={
            <Layout showContent={true}>
              <SignUp />
            </Layout>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);

reportWebVitals();
