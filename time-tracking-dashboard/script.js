/* 
card-ele have following background color variables

--work: hsl(15 100% 70%);
--play: hsl(195 74% 62%);
--study: hsl(348 100% 68%);
--exercise: hsl(145 58% -55%);
--social: hsl(264 64% 52%);
--selfcare: hsl(43 84% 65%);

 */

class CardElement extends HTMLElement {
  constructor() {
    super();
    const card = document.getElementById("card-container").content;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(card.cloneNode(true));
  }

  // Expose a method to set the background color
  setBackgroundColor(color) {
    this.shadowRoot
      .querySelector(".card-container")
      .style.setProperty("background-color", `var(--${color})`);
  }
}

customElements.define("card-ele", CardElement);

const DATABASE_URL = "/time-tracking-dashboard/data.json";
const cards = document.getElementById("cards");
const buttons = document.getElementsByClassName("info-filter")[0];

buttons.addEventListener("click", (e) => {
  let btnFilter = e.target.value;
  //   on every click remove all cards
  removeAllCards();
  // on every click fetch data and show filted data
  fetchData(DATABASE_URL, btnFilter);
});

fetchData(DATABASE_URL);

async function fetchData(DATABASE_URL, btn = "weekly") {
  try {
    // fetch data
    const response = await fetch(DATABASE_URL);
    const data = await response.json();
    // show cards
    populateCards(data, btn);
  } catch (error) {
    console.error("Data fetch fail: ", error);
  }
}

function populateCards(data, btn) {
  data.forEach((ele) => {
    // create title
    const card = createElement(ele, btn);
    // append the card as last child
    cards.appendChild(card);
  });
}

function createElement(element, btn) {
  const btnFilter = element.timeframes[`${btn}`];
  // update past record string
  btn = btn === "daily" ? "day" : btn.replace("ly", "");

  const title = element.title;
  const title_clean = element.title.trim().toLowerCase().replace(" ", "");
  //   create custome element and update records
  const cardEle = document.createElement("card-ele");
  cardEle.innerHTML = `
        <img
          slot="background-img"
          src="/time-tracking-dashboard/images/icon-${title_clean}.svg"
          alt="background"
        />
        <h3 slot="header">${title}</h3>
        <div slot="current-record">${btnFilter.current}hrs</div>
        <span slot="past-record">${btn} - ${btnFilter.previous}hrs</span>
  `;
  // set background color to according to card
  cardEle.setBackgroundColor(title_clean);
  return cardEle;
}

function removeAllCards() {
  [...cards.children].forEach((child) => cards.removeChild(child));
}
