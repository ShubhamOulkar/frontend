function populateCards(data, parentEle, btn) {
  // remove spinner
  parentEle.innerHTML = "";
  data.forEach((ele) => {
    // create title
    const card = createElement(ele, btn);
    // append the card as last child
    parentEle.appendChild(card);
  });
}

function createElement(eleData, btn) {
  const btnFilter = eleData.timeframes[`${btn}`];
  // update past record string
  btn = btn === "daily" ? "day" : btn.replace("ly", "");

  const title = eleData.title;
  const title_clean = eleData.title.trim().toLowerCase().replace(" ", "");
  //   create custome element and update records
  const cardEle = document.createElement("card-ele");
  cardEle.innerHTML = `
          <img
            slot="background-img"
            src="/time-tracking-dashboard/src/images/icon-${title_clean}.svg"
            alt="background"
          />
          <h2 slot="header">${title}</h2>
          <div slot="current-record">${btnFilter.current}hrs</div>
          <span slot="past-record">${btn} - ${btnFilter.previous}hrs</span>
    `;
  // set background color to according to card
  cardEle.setBackgroundColor(title_clean);
  return cardEle;
}

function renderSpinner(parentEle) {
  const markup = `
          <div class="spinner">
            <img src="/time-tracking-dashboard/src/images/spinner.svg" />
            <p><Strong>Wait data is loading ✋🏻...</strong></p>
          </div>
    `;
  parentEle.innerHTML = "";
  parentEle.insertAdjacentHTML("afterbegin", markup);
}

function showError(parentEle, err) {
  const markup = `
        <div class="error">
          <svg>
            <use href="/time-tracking-dashboard/src/images/icons.svg#icon-alert-triangle" />
          </svg>
            <p>${err}</p>
        </div>
    `;
  parentEle.innerHTML = "";
  parentEle.insertAdjacentHTML("afterbegin", markup);
}

export { renderSpinner, populateCards, showError };
