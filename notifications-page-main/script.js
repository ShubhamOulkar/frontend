"use strict";

// interface
const allNotifications = document.querySelectorAll(".notification");
const markAllButton = document.querySelector(".mark-all");
const redDots = document.querySelectorAll(".unread-dot");
const unreadNotificationCounter = document.querySelector(".counter");

// function to mark as read
function removeRedDots() {
  redDots.forEach((dot) => {
    dot.innerHTML = "";
  });
}

// function to count unread notifications
function resetCounter() {
  const count = document.querySelectorAll("div[data-remark='unread']").length;
  unreadNotificationCounter.innerText = count;
}

markAllButton.addEventListener("click", () => {
  allNotifications.forEach((notification) => {
    if (notification.dataset.remark === "unread") {
      notification.dataset.remark = "read";
      removeRedDots();
      resetCounter();
    }
    // markAllButton.innerText = "Mark all as unread";
  });
});
