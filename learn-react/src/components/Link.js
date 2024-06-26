import { Link } from "react-router-dom";
export default function CustomLink({ urlSegment, title }) {
  return (
    <li>
      <Link to={"/" + urlSegment}>{title}</Link>
    </li>
  );
}
