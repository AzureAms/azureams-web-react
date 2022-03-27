import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [language, setLanguage] = useState("en");
  const [showSidePanel, setShowSidePanel] = useState(false);

  function changeLanguage(lang) {
    setLanguage(lang);
  }

  return (
    <header className="w-full h-20 shadow-md shadow-neutral-300 font-raleway flex items-center">
      <img
        className="w-14 h-14 ml-6"
        src="./assets/logo.png"
        alt="azure ams logo"
      />
      <FontAwesomeIcon
        icon={faBarsStaggered}
        className="ml-auto mr-6 text-4xl cursor-pointer lg:hidden"
        onClick={() => setShowSidePanel(true)}
      />
      <div
        className={`fixed top-0 left-0 w-full h-screen overflow-x-hidden ${
          showSidePanel ? "pointer-events-auto" : "pointer-events-none"
        } lg:static lg:w-fit lg:h-fit lg:pointer-events-auto lg:ml-auto`}
      >
        <div
          className={`w-full h-full bg-tertiary transition-transform ease-in duration-300 ${
            showSidePanel ? "translate-x-0" : "translate-x-full"
          } lg:w-fit lg:h-fit lg:bg-transparent lg:translate-x-0`}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="mt-10 ml-10 text-5xl cursor-pointer lg:hidden"
            onClick={() => setShowSidePanel(false)}
          />
          <ul className="ml-10 mt-16 flex flex-col gap-16 lg:ml-0 lg:mr-10 lg:mt-0 lg:flex-row lg:gap-5">
            {[
              ["Trang chủ", "Home", "/home"],
              ["Bài viết", "News", "/articles"],
              ["Sản phẩm", "Products", "/products"],
              ["Về chúng tôi", "About us", "/about"],
            ].map(([vn, en, path], ind) => {
              return (
                <li
                  key={ind}
                  className={`uppercase font-bold text-4xl lg:px-3.5 lg:py-1.5 lg:rounded-3xl lg:text-2xl lg:normal-case lg:hover:bg-tertiary-alt lg:transition-colors lg:duration-200 lg:ease-in-out`}
                >
                  <Link to={path} onClick={() => setShowSidePanel(false)}>
                    {language === "vn" ? vn : en}
                  </Link>
                </li>
              );
            })}
            <li className="lg:px-3.5 lg:py-1.5 lg:text-2xl font-light">
              <span
                className={`cursor-pointer ${
                  language === "vn" ? "font-bold" : ""
                }`}
                onClick={() => changeLanguage("vn")}
              >
                VN
              </span>{" "}
              |{" "}
              <span
                className={`cursor-pointer ${
                  language === "en" ? "font-bold" : ""
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
