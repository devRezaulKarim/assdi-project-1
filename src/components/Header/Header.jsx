import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, outError] = useSignOut(auth);
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
        {user ? (
          <Link id="signOut" onClick={() => signOut()}>
            Sign out
          </Link>
        ) : (
          <NavLink id="login" to="/authentication/login">
            Login
          </NavLink>
        )}
        <span>{user?.displayName || user?.email.slice(0, 6)}</span>
      </nav>
    </div>
  );
}
