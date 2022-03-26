import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/account/Login";
import PrivateRoute from "./components/account/PrivateRoute";
import Studio from "./components/studio/Studio";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <div className="h-screen"></div>

        <Routes>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route
            exact
            path="/studio"
            element={
              <PrivateRoute>
                <Studio />
              </PrivateRoute>
            }
          ></Route>
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
