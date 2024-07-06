import useEffect from "react";

export default function useConsoleLog(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
