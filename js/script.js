"use strict";
  window.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burgerButton');
    const menu = document.getElementById('mobileMenu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('open');
      whiteBurger();
    });

   
  //cards
   
    fetch('js/info.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const wrapperDiv = document.querySelector(".recommended-cards");

    function structure(fighter) {
      const div = document.createElement("div");
      div.classList.add("fighter-info-card");

      div.innerHTML = `
    
    <img class="fighter-flag flag1" src="${fighter.imgFlag}" alt="Flag">
 
    <img class="fighter-photo  photo1" src="${fighter.ImgPhoto}" alt="${fighter["Имя"]} ${fighter["Фамилия"]}">
    <div class="fighter-info">
        <h2>${fighter["Имя"]} ${fighter["Фамилия"]}</h2>
        <p>Где родился: ${fighter["Где родился"]}</p>
        <p>Год рождения: ${fighter["Год рождения"]}</p>
        <p>Рост: ${fighter["Рост"]} см</p>
        <p>Вес: ${fighter["Вес"]} кг</p>
        <p>Возраст: ${fighter["Возраст"]}</p>
        <p><strong>Побед: ${fighter["Побед"]}</strong></p>
        <p><strong>Поражений: ${fighter["Поражений"]}</strong></p>
    </div>
    `;

      wrapperDiv.append(div);
    }

    // random fighters part
    
    data.forEach(fighter => structure(fighter));
    const startFight = document.querySelector(".start-fight-btn");
    startFight.addEventListener("click", () => {
      const randomNum1 = Math.floor(Math.random() * data.length);
      const randomNum2 = Math.floor(Math.random() * data.length);
      const card1 = data[randomNum1];
      const card2 = data[randomNum2];
      const card1Html = document.querySelector(".fighter-card1");
      const card2Html = document.querySelector(".fighter-card2");
      card1Html.classList.add("fighter-info-card");
      card2Html.classList.add("fighter-info-card");
      card1Html.innerHTML = `
    
      <img class="fighter-flag flag1" src="${card1.imgFlag}" alt="Flag">
      <img class="fighter-photo  photo1" src="${card1.ImgPhoto}" alt="${card1["Имя"]} ${card1["Фамилия"]}">
      <div class="fighter-info">
          <h2>${card1["Имя"]} ${card1["Фамилия"]}</h2>
          <p>Где родился: ${card1["Где родился"]}</p>
          <p>Год рождения: ${card1["Год рождения"]}</p>
          <p>Рост: ${card1["Рост"]} см</p>
          <p>Вес: ${card1["Вес"]} кг</p>
          <p>Возраст: ${card1["Возраст"]}</p>
          <p><strong>Побед: ${card1["Побед"]}</strong></p>
          <p><strong>Поражений: ${card1["Поражений"]}</strong></p>
      </div>
      `;
      card2Html.innerHTML = `
    
      <img class="fighter-flag flag1" src="${card2.imgFlag}" alt="Flag">
      <img class="fighter-photo  photo1" src="${card2.ImgPhoto}" alt="${card2["Имя"]} ${card2["Фамилия"]}">
      <div class="fighter-info">
          <h2>${card2["Имя"]} ${card2["Фамилия"]}</h2>
          <p>Где родился: ${card2["Где родился"]}</p>
          <p>Год рождения: ${card2["Год рождения"]}</p>
          <p>Рост: ${card2["Рост"]} см</p>
          <p>Вес: ${card2["Вес"]} кг</p>
          <p>Возраст: ${card2["Возраст"]}</p>
          <p><strong>Побед: ${card2["Побед"]}</strong></p>
          <p><strong>Поражений: ${card2["Поражений"]}</strong></p>
      </div>
      `;

      function findStorngest() {
    const randomFrom2 = Math.floor(Math.random() * 2);

      if (randomFrom2 === 0) {
        alert(`${card1["Имя"]} ${card1["Фамилия"]} победил`);
      } else {
        alert(`${card2["Имя"]} ${card2["Фамилия"]} победил`);
      }
    }

    setTimeout(findStorngest, 3000);

    })


  })
  .catch(error => console.error("Ошибка загрузки JSON:", error));

  const startFight = document.querySelector(".start-fight-btn");
const balanceEl = document.getElementById("balance");
const resultEl = document.getElementById("result");

let balance = sessionStorage.getItem("balance") 
    ? parseFloat(sessionStorage.getItem("balance")) 
    : 100;

balanceEl.textContent = balance.toFixed(2);

startFight.addEventListener("click", () => {
    const betChoice = document.querySelector('input[name="bet"]:checked');
    if (!betChoice) {
        alert("Выберите бойца для ставки!");
        return;
    }
    
    const fighter1 = "Боец 1";
    const fighter2 = "Боец 2";

    const winnerIndex = Math.floor(Math.random() * 2);
    const winner = winnerIndex === 0 ? fighter1 : fighter2;

    resultEl.textContent = "Идёт бой...";
    
    setTimeout(() => {
        resultEl.textContent = `Победил ${winner}`;

        if (
            (betChoice.value === "fighter1" && winner === fighter1) ||
            (betChoice.value === "fighter2" && winner === fighter2)
        ) {
            balance += balance * 0.2; 
        } else {
            balance -= balance * 0.3; 
        }

        sessionStorage.setItem("balance", balance);
        balanceEl.textContent = balance.toFixed(2);
    }, 3000);
});
  

  });