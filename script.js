"use strict";

const modalPart = document.querySelector(".modal");
const btnAll = document.querySelectorAll(".show-modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modalPart.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modalPart.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnAll.length; i++)
  btnAll[i].addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  //   console.log(e.key);
  if (i.key === "Escape" && !modalPart.classList.contains("hidden")) {
    closeModal();
  }
});
