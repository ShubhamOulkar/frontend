export default async function fetchData(url) {
  try {
    const response = await fetch(url);

    const { data } = await response.json();

    return data.data;
  } catch (error) {
    throw new Error("Faild to fetch data:", error);
  }
}
