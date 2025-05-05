import { Link } from "react-router";
import { usePathnameContext } from "~/context/pathname/createPathnameContext";

const navLinks = ["home", "destination", "crew","technology"];

export default function PrimaryNavigation({ isOpen }: { isOpen: boolean }) {
  const {pathname} = usePathnameContext();

  return (
    <nav >
      <ul
        data-visible={isOpen}
        id="primary-navigation"
        className="primary-navigation underline-indicators flex"
      >
        {navLinks.map((link, i)=>
          <li key={link} className={pathname === link ? "active":""}>
            <Link
              to={link === "home" ? "/" : `/${link}`}
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">0{i}</span>
              {link}
            </Link>
        </li>
        )}
      </ul>
    </nav>
  );
}
