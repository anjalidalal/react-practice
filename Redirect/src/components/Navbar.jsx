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
    to: "/login",
    title: "Login",
  },
];

export const Navbar = () => {
  return (
    <div className="link">
      {links.map(({ to, title }, index) => (
        <Link to={to} key={index}>
          {title}
        </Link>
      ))}
    </div>
  );
};
