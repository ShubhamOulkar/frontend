export async function fetchData(DATABASE_URL) {
  try {
    // fetch data
    const response = await fetch(DATABASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    // handle error
    throw `❌ ${error} 🎆🎆🎆❌`;
    // console.log(`${error} `);
  }
}
