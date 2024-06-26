import CustomLink from "./Link";

function Nav({ navbar }) {
  return (
    <nav className="main-nav">
      <ul style={{ display: "flex", gap: 20, listStyleType: "none" }}>
        {navbar.map((nav, index) => (
          <CustomLink key={index} urlSegment={!index ? "" : nav} title={nav} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
