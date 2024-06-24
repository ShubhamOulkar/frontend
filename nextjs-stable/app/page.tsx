import callApi from "./lib/callApi";

export const dynamic = "force-dynamic";
// export const fetchCache = "default-cache";
// export const fetchCache = "force-cache";
// export const fetchCache = "force-no-store";
export const revalidate = 30;
// export const runtime = "nodejs";
// 'nodejs' | 'edge'

export default async function Home() {
  const data = callApi();

  console.log("Data fetched from page");

  return (
    <div>
      <h2>
        <strong>Next 14 </strong>
        In page.js, fetch() data cached by default (server component), to fetch
        data on each request use cache: &apos;no-store&apos;:
      </h2>
      <q>{data}</q>

      <div>
        <strong>
          Next 15 : In new release fetch() is not cached by default in
          development. But in production data is cached by default.
        </strong>
      </div>
    </div>
  );
}
