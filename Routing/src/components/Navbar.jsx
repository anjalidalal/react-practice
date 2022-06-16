import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/users",
    title: "Users",
  },
  {
    to: "/contact-us",
    title: "Contact",
  },
];

export const Navbar = () => {
  return (
    <div className="link">
      {links.map(({ to, title }) => (
        <Link to={to}>{title}</Link>
      ))}
    </div>
  );
};
