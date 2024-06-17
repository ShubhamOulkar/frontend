export default function NextAuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="nextjs-auth">{children}</section>;
}
