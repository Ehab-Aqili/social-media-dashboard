import "./css/index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import cookies from "js-cookie";
import Register from "./pages/Register";
import AddInformation from "./components/sign_up/AddInformation";
import FormContextProvider from "./context/FormContext";
import RegisterContextProvider from "./context/RegisterProvider";
// import NewLogin from "./pages/NewLogin"
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/navbar/NavBar";
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];
function App() {
  const location = useLocation();
  // .*** --------------------language--------------------- ***
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  // .*** --------------------return--------------------- ***
  return (
    <>
      {location.pathname === "/login" || location.pathname === "/" ? (
        <>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <FormContextProvider>
                  <RegisterContextProvider>
                    <Register />
                  </RegisterContextProvider>
                </FormContextProvider>
              }
            />
          </Routes>
          <Routes>
            <Route path="/addInformation" element={<AddInformation />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <FormContextProvider>
                  <RegisterContextProvider>
                    <Register />
                  </RegisterContextProvider>
                </FormContextProvider>
              }
            />
            <NavBar />
          </Routes>
          <Routes>
            <Route path="/addInformation" element={<AddInformation />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
