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
        class Card{
          constructor (flag, fightersPhoto, name, placeOfBirth, dateOfBirth, height, weight, age, wins, loses){
            this.flag = flag;
            this.fightersPhoto = fightersPhoto;
            this.name = name;
            this.placeOfBirth = placeOfBirth;
            this.dateOfBirth = dateOfBirth;
            this.height = height;
            this.weight = weight;
            this.age = age;
            this.wins = wins;
            this.loses = loses;
          }


          structure(){
            const div = document.createElement("div");
            div.classList.add("fighter-info");
            const cardWrapper = document.querySelector(".recommended-section");
            div.innerHTML = `
                <img class="fighter-flag" src="${}" alt="Flag">
                <img class="fighter-photo" src="https://upload.wikimedia.org/wikipedia/commons/7/71/Arman_Tsarukyan_UFC_2022.jpg" alt="Fighter"> -->
                <!-- <div class="fighter-info">
                  <h2>Арман Царукян</h2>
                  <p>Где родился: Ахалкалаки, Грузия</p>
                  <p>Год рождения: 11 октября, 1996</p>
                  <p>Рост: 170 см</p>
                  <p>Вес: 70 кг</p>
                  <p>Возраст: 28</p>
                  <p><strong>Побед: 22</strong></p>
                  <p><strong>Поражений: 3</strong></p>
            `
            
            
            cardWrapper.append(div);

          }
        }
      })
      .catch(error => console.error("Ошибка загрузки JSON:", error));

  });