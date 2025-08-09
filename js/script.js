"use strict";
  window.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burgerButton');
    const menu = document.getElementById('mobileMenu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('open');
    });
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

    
    data.forEach(fighter => structure(fighter));
  })
  .catch(error => console.error("Ошибка загрузки JSON:", error));


  });