export default function Template({ children }: { children: React.ReactNode }) {
  console.log("This is template");
  return <div>{children}</div>;
}
