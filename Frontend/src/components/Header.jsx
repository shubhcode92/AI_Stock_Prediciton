import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">
        <span>Shubh</span>Code
      </div>

      <nav className={menuOpen ? "nav open" : "nav"}>

        <a href="#home">HOME</a>
        <a href="#contact">CONTACT</a>
        <a href="#login">LOGIN</a>

      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

    </header>
  );
}

export default Header;