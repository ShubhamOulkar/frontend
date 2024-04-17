const userShare = document.getElementsByClassName("user-share");
const user = document.getElementsByClassName("user");
const userImg = user[0].querySelector(".user-img");
const userInfo = user[0].querySelector(".user-info");
const desktopToolTip = userShare[0].querySelector("span");
const mobileToolTip = document.querySelector(".mobile-tooltip");

userShare[0].addEventListener("mouseover", handleHidden);

userShare[0].addEventListener("mouseout", handleVisible);

userShare[0].addEventListener("focusin", handleHidden);

userShare[0].addEventListener("focusout", handleVisible);

window.addEventListener("resize", handleToolTip);

function handleHidden() {
  if (window.innerWidth < 650) {
    userImg.style.visibility = "hidden";
    userInfo.style.visibility = "hidden";

    userShare[0].classList.remove("tooltip");
    mobileToolTip.style.display = "flex";
  }
}

function handleVisible() {
  if (window.innerWidth < 650) {
    const deleteChild = user[0].querySelector("span.mobile-tooltip");
    userImg.style.visibility = "visible";
    userInfo.style.visibility = "visible";

    userShare[0].classList.add("tooltip");
    mobileToolTip.style.display = "none";
  }
}

function handleToolTip() {
  window.innerWidth < 650
    ? (desktopToolTip.style.display = "none")
    : (desktopToolTip.style.display = "block");
}
