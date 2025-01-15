import { Link } from "react-router-dom";

// import Auth from "../../utils/auth";

import arcIcon from "../../assets/arc-icon.png";

const Header = () => {
  return (
    <header>
      <Link className="headerLink" to="/">
        <div>
        <img 
  className="tradeMark" 
  src={arcIcon} 
  alt="Trademark" 
  style={{ width: "200px", height: "auto" }} 
/>
        </div>
      </Link>
    </header>
  );
};

export default Header;
