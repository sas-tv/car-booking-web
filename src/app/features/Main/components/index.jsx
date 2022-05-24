import CSSModules from "react-css-modules";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../helpers";

import AppLogo from "../../../../AppLogo.jpg";
import styles from "./index.module.css";

const Main = () => {
  const navList = (
    navLinks.map(({key, label, linkPath}) => (
      <NavLink
        key={key}
        to={`${linkPath}`}
        style={({ isActive }) =>{ 
          return {
            color: isActive ? "red": "black",
            borderBottom: isActive ? "5px solid red" : null,
            backgroundColor: isActive ? "rgb(162, 163, 161)" : null
          }
        }}
        styleName="nav-header-link"
      >
        <span>{label}</span>
      </NavLink>
    ))         
  );

  const img = <img alt="eRide" src={AppLogo} styleName="nav-header-image" />

  const logoWithOnClick = (
    <Link to="/">
      {img} 
    </Link>
  );

  return (
    <div styleName="nav-body">
      {logoWithOnClick}
      <div styleName="nav-list-body">
        {navList}
      </div>
    </div>
  );
};

export default CSSModules(Main, styles);
