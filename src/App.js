import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/account/Login";
import PrivateRoute from "./components/account/PrivateRoute";
import Studio from "./components/studio/Studio";
import Articles from "./components/blog/Articles"
import Article from "./components/blog/Article"
import { AuthProvider } from "./contexts/AuthContext";
import { ArticleProvider } from "./contexts/ArticleContext"
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ArticleProvider>
        <Header />
        <div className="h-screen"></div>

        <Routes>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/articles" element={<Articles></Articles>}></Route>
          <Route exact path="/article/:articleId" element={<Article></Article>}></Route>
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
        </ArticleProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
