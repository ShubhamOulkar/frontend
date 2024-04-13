const flexWrap = document.querySelector("input[type='checkbox']");
const slider = document.querySelector(".slider");
const planCards = document.querySelectorAll("plan-card");
const spanError = document.querySelector("#step1-error");
const addOns = document.querySelectorAll("add-on");
const pricePerMonth = [9, 12, 15];
const addOnsPricePerMonth = [1, 2, 2];
let addOnsNameList = [];
let addOnsPricelist = [];
const pricePerYear = pricePerMonth.map((i) => i * 10);
const addOnsPricePerYear = addOnsPricePerMonth.map((i) => i * 10);
let billing = "yearly";
let plan;
let price;
let currentCard;

// add click event listener on add on cards
addOns.forEach((card) => {
  card.addEventListener("click", handleAddOn);
});

// update submit object from step 3
nextButtons[2].addEventListener("click", (e) => {
  handleForm(e);
  submitObject["addOns"] = addOnsNameList;
  submitObject["addOnsPrice"] = addOnsPricelist;
  console.log("submit object at step 3: ", submitObject);
});

//  update submit object from step 2
nextButtons[1].addEventListener("click", (e) => {
  // show error if plan is not selected
  if (plan === undefined || price === undefined) {
    spanError.style.display = "block";
    spanError.innerHTML = "Please select the plan.";
    return;
  } else {
    spanError.style.display = "none";
  }
  handleForm(e);
  submitObject["plan"] = plan;
  submitObject["planPrice"] = price;
  submitObject["billing"] = billing;
  console.log("submit object at step 2: ", submitObject);
});

// showing yearly and monthly billing and add on cards
slider.addEventListener("click", () => {
  billing = !flexWrap.checked ? "yearly" : "monthly";

  billing === "monthly"
    ? showPrice(pricePerMonth, addOnsPricePerMonth, "mo", planCards, addOns)
    : showPrice(pricePerYear, addOnsPricePerYear, "yr", planCards, addOns);
});

// get selected plan
planCards.forEach((card) => {
  card.addEventListener("click", getPlanDetails);
});

// get selected plan from enter key
planCards.forEach((card) => {
  card.addEventListener("keydown", checkEnterKey);
});

// get addons from keybord events
addOns.forEach((card) => {
  card.addEventListener("keydown", enterKey);
});

// change billing cards and add on cards from keyboard
flexWrap.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.keyCode === 32) {
    // Toggle the switch state when Enter is pressed
    flexWrap.checked = !flexWrap.checked;

    billing = flexWrap.checked ? "yearly" : "monthly";

    billing === "monthly"
      ? showPrice(pricePerMonth, addOnsPricePerMonth, "mo", planCards, addOns)
      : showPrice(pricePerYear, addOnsPricePerYear, "yr", planCards, addOns);
  }
});

function enterKey(e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    e.preventDefault(); // Prevent the default action
    handleAddOn(e); // Call the getPlanDetails function
  }
}

function checkEnterKey(e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    e.preventDefault(); // Prevent the default action
    getPlanDetails(e); // Call the getPlanDetails function
  }
}

function handleAddOn(e) {
  if (e.currentTarget.classList.contains("clicked")) {
    // remove clicked card
    e.currentTarget.classList.remove("clicked");
    // remove checkbox checked
    e.currentTarget.shadowRoot.querySelector(
      "input[type='checkbox']"
    ).checked = false;
    // remove background
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.borderColor = ""; // Reset border color to default
    // update addOnsNameList and addOnsPriceList
    let n_index = addOnsNameList.indexOf(
      e.currentTarget.querySelector("name").innerText.trim().toLowerCase()
    );
    let p_index = addOnsPricelist.indexOf(
      e.currentTarget.querySelector("price").innerText
    );
    console.log(
      "Removed name from the cart: ",
      addOnsNameList.splice(n_index, 1)
    );
    console.log(
      "Removed price from the cart:",
      addOnsPricelist.splice(p_index, 1)
    );
  } else {
    // add class clicked
    e.currentTarget.classList.add("clicked");
    // get name and price of add ons
    addOnsNameList.push(
      e.currentTarget.querySelector("name").innerText.trim().toLowerCase()
    );
    addOnsPricelist.push(e.currentTarget.querySelector("price").innerText);
    // seet checked state of checkbox
    e.currentTarget.shadowRoot.querySelector(
      "input[type='checkbox']"
    ).checked = true;

    showSelectedPlanCard(e.currentTarget, addOns);

    console.log("Updated cart with add-ons: ", addOnsNameList, addOnsPricelist);
  }
}

function showPrice(priceArray1, priceArray2, billing, cardsList1, cardsList2) {
  // show error if plan is not selected
  if (plan === undefined || price === undefined) {
    spanError.style.display = "block";
    spanError.innerHTML = "Please select the plan.";
    return;
  } else {
    spanError.style.display = "none";
  }

  let i = 0;
  cardsList1.forEach((card) => {
    card.children[2].innerText = "$ " + `${priceArray1[i]}/${billing}`;
    i++;
  });

  // on toggle change current plan price
  price = currentCard.querySelector("p").innerText;

  let j = 0;
  cardsList2.forEach((card) => {
    card.querySelector("price").innerText =
      "+$" + `${priceArray2[j]}/${billing}`;
    j++;
  });

  addOnsPricelist = [];
  cardsList2.forEach((card) => {
    // on toggle change addon price list

    if (
      addOnsNameList.includes(
        card.querySelector("name").innerText.trim().toLowerCase()
      )
    ) {
      addOnsPricelist.push(card.querySelector("price").innerText);
    }
  });
  return;
}

function getPlanDetails(e) {
  currentCard = e.currentTarget;
  plan = e.currentTarget.querySelector("h3").innerText;
  price = e.currentTarget.querySelector("p").innerText;

  console.log(plan, price);
  showSelectedPlanCard(e.currentTarget, planCards);
}
/* background-color: hsl(231, 100%, 99%); */
// border-color: hsl(243, 100%, 62%);
function showSelectedPlanCard(target, cardsList) {
  clearSelection(cardsList);
  target.style.backgroundColor = "hsl(231, 70%, 95%)";
  target.style.borderColor = "hsl(243, 100%, 62%)";
}

function clearSelection(cardsList) {
  if (cardsList === addOns) return;
  cardsList.forEach((card) => {
    card.style.backgroundColor = "white";
    card.style.borderColor = ""; // Reset border color to default
  });
}
