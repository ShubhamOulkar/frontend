import { useContext, useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import ClipLoader from "react-spinners/ClipLoader";
import { ThemeContext } from "./ThemeToggle";

const api =
  "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo";

export default function BookList() {
  const [bookdata, setBookdata] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function bookdata() {
      try {
        const data = await fetchData(api);
        setBookdata(data);
      } catch (error) {
        throw new Error("failed in useEffect");
      }
    }
    bookdata();
  }, []);

  function reverseList() {
    setBookdata([...bookdata].reverse());
  }

  return (
    <div id="book" className={theme}>
      <button type="button" onClick={reverseList}>
        Reverse the list
      </button>
      <ul>
        {bookdata ? (
          bookdata.map((book) => (
            <ListItem key={book.id} title={book.volumeInfo.title} />
          ))
        ) : (
          <ClipLoader />
        )}
      </ul>
    </div>
  );
}

function ListItem(props) {
  console.log(
    "Verify that 'key' is not present in props object, only title present:",
    props
  );
  return (
    <li>
      {props.title} : <input type="text" />
    </li>
  );
}
