import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RiCloseCircleFill, RiMenu4Fill } from "react-icons/ri";

import useWindowSize from "../../hooks/useWindowSize";

import "./style.scss";

const Header = () => {
  const { width } = useWindowSize();
  const [showMenu, toggleMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <nav className="nav">
        <h1 className="nav-brand" onClick={() => navigate("/")}>
          Modular
        </h1>
        {((width <= 991 && showMenu) || width > 991) && (
          <ul className={`nav-list ${showMenu ? "responsive" : ""}`.trim()}>
            <li
              className={`nav-list-item ${width > 991 ? "ml-auto" : ""}`.trim()}
              onClick={() => navigate("/live")}
            >
              Live
            </li>
            <li className="nav-list-item">Work</li>
            <li className="nav-list-item">Gallery</li>
            <li className="nav-list-item">Studio</li>
            <li className="nav-list-item">Relax</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Sound</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        )}
        {width <= 991 && (
          <button onClick={() => toggleMenu(!showMenu)}>
            {showMenu ? (
              <RiCloseCircleFill className="menu-icon" />
            ) : (
              <RiMenu4Fill className="menu-icon" />
            )}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
