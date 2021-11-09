import { Link } from "react-router-dom";
import logo_white from "../../assets/runners_logo_white.png";
// import logo_black from "../../assets/runners_logo_black.png";
import "./style.scss";

const Header = ({ style }: HeaderProps) => {
  if (style === "login") {
    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo_white} alt="runners logo" />
        </div>
        <div className="login-button-container">
          <button className="button">
            <Link to="/login">LOG IN</Link>
          </button>
        </div>
      </header>
    );
  } else {
    return <p>Working on this</p>;
  }
};

interface HeaderProps {
  style: "login" | "default";
}

export default Header;
