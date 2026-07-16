import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <Link to="/">
        <img src="/logo.png" alt="Saga Globale" className="site-logo" />
      </Link>
    </header>
  );
};

export default Header;
