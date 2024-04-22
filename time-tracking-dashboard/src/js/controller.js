import { CardElement } from "./templateView.js";
import { populateCards, renderSpinner, showError } from "./renderPageView.js";
import { fetchData } from "./model.js";

const DATABASE_URL = "/time-tracking-dashboard/data.json";
const cards = document.getElementById("cards");
const buttons = document.getElementsByClassName("info-filter")[0];

// defining custom element into DOM using shadow DOM
customElements.define("card-ele", CardElement);

// add filter on click event
buttons.addEventListener("click", (e) => {
  let btnFilter = e.target.value;
  renderPage(btnFilter);
});

async function renderPage(btn = "weekly") {
  // show spinner at start of fetching data
  renderSpinner(cards);
  // fetch data
  try {
    let data = await fetchData(DATABASE_URL);
    console.log(data);
    // populate cards
    populateCards(data, cards, btn);
  } catch (err) {
    // handle error
    showError(cards, err);
  }
}

// render page
renderPage();
