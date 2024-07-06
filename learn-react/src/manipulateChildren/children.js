import { Children } from "react";

export default function ListItem({ children }) {
  const arr = Children.map(children, (child) => {
    return <p>{child}</p>;
  });

  const arrayChildren = Children.toArray(children);

  return (
    <>
      <div>
        Reversed following child elements: {arrayChildren.reverse()}
        length of array: {arrayChildren.length}
      </div>
      <div>
        no. of children:{Children.count(children)}
        {arr}
        {children}
        {/* {Children.forEach(children, (child, i) => {
          console.table(`child ${i}:`, child);
        })} */}
        {Children.map(children, (child, i) => {
          console.table(`child ${i}:`, child);
        })}
        {/* Valid children : {Children.only(children)} */}
      </div>
    </>
  );
}
