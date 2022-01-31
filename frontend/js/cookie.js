const popup = document.querySelector(".popup-wrapper");

if (localStorage.getItem(popup)) {
  localStorage.setItem(popup, true);
  popup.style.display = "block";
} else {
  const kod = localStorage.getItem(popup);
  if (kod) {
    showModal();
    localStorage.setItem(popup, false);
  }
}

popup.addEventListener("click", (ev) => {
  const classNameOfClickedElement = ev.target.classList[0];
  const classNames = ["popup-close", "popup-wrapper", "popup-link"];
  const shouldClosePopup = classNames.some(
    (className) => className === classNameOfClickedElement
  );

  if (shouldClosePopup) {
    popup.style.display = "none";
  }
});
