import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Help",
};

export default function Help() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is Help page</h1>
    </div>
  );
}
