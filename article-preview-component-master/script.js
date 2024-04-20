const userShare = document.getElementsByClassName("user-share");
const user = document.getElementsByClassName("user");
const userImg = user[0].querySelector(".user-img");
const userInfo = user[0].querySelector(".user-info");
const mobileToolTip = document.querySelector(".mobile-tooltip");
// const desktopToolTip = userShare[0].querySelector("span");

// following event only of small screens

// adding focus event for small screens
userShare[0].addEventListener("focusin", handleHidden);
userShare[0].addEventListener("focusout", handleVisible);

// study purpose functions
function handleHidden() {
  console.log("handle hidden");
  if (window.innerWidth < 650) {
    userImg.style.visibility = "hidden";
    userInfo.style.visibility = "hidden";
    mobileToolTip.style.display = "flex";
  }
}

function handleVisible() {
  console.log("handle visible");
  if (window.innerWidth < 650) {
    userImg.style.visibility = "visible";
    userInfo.style.visibility = "visible";
    mobileToolTip.style.display = "none";
  }
}

// This events are also emplemented in CSS by using :hover :focus for desktop
// following events are implemented for study purpose

// userShare[0].addEventListener("mouseover", handleHidden);

// userShare[0].addEventListener("mouseout", handleVisible);

// userShare[0].addEventListener("click", handleClick);

// function handleClick() {
//   let userImage = userImg.style.visibility || "visible";
//   userImage === "visible" ? handleHidden() : handleVisible();
// }

// this event is fired on browser tab size change
// window.addEventListener("resize", handleToolTip);

// function handleToolTip() {
//   window.innerWidth < 650
//     ? (desktopToolTip.style.display = "none")
//     : (desktopToolTip.style.display = "block");
// }
