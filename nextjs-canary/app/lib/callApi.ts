export default async function callApi() {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );

    const { data } = await response.json();

    return data.content;
  } catch (error) {
    console.error("Failed to call api");
    const data = getData();
    return data;
  }
}

async function getData() {
  try {
    const response = await fetch("public/data/data.json");
    const data = await response.json();
    const index = Math.floor(Math.random() * 6);
    return data[index].title;
  } catch (error) {
    console.error("filed to fetch data.json");
  }
}
