"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerButton");
  const menu = document.getElementById("mobileMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("open");
  });

  //Cards choosing

  const leftCard = document.querySelector("#left");
  const rightCard = document.querySelector("#right");

  const startFight = document.querySelector(".startFight");
  startFight.addEventListener("click", () => {
    const first = Math.floor(Math.random() * 20);
    let second = first;

    while (second === first) {
      second = Math.floor(Math.random() * 20);
    }

    console.log(first); //не обязательно
    console.log(second); //не обязательно
  });
  //нужен массив с карточками чтобы оттуда взять две карты и затем добавить их в leftCard и rightCard
});
