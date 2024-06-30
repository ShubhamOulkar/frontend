import { useContext } from "react";
import CustomLink from "./Link";
import { ThemeContext } from "./ThemeToggle";

function Nav({ navbar }) {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={theme}>
      <ul style={{ display: "flex", gap: 20, listStyleType: "none" }}>
        {navbar.map((nav, index) => (
          <CustomLink
            theme={theme}
            key={index}
            urlSegment={!index ? "" : nav}
            title={nav}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
