import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Learn code</h1>
      <ul>
        <li>
          <NavLink
            end
            to="/"
            style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="faq"
            style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          >
            faq
          </NavLink>
        </li>

        <NavLink
          to="contact"
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        >
          contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
