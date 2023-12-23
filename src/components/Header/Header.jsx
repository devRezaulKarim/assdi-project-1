import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar  ${scrolled}`}>
      <div className="logo">
        <img width={"50px"} src="/logo.png" alt="logo" />
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink id="login" to="/authentication/login">
          Login
        </NavLink>
      </nav>
    </div>
  );
}
