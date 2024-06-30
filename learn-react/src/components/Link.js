import { Link } from "react-router-dom";
export default function CustomLink({ urlSegment, title, theme }) {
  return (
    <li>
      <Link className={theme} to={"/" + urlSegment}>
        {title}
      </Link>
    </li>
  );
}
