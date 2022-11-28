"use strict";



document.addEventListener('DOMContentLoaded', () => {

    // 1 задание Shop cart

    const repetContainer = document.querySelector('.repet-container');
    const repetDelete = repetContainer.querySelector('.repet-delete');
    const repetChange = repetContainer.querySelector('.repet-change');
    const repetSortUp = repetContainer.querySelector('.repet-sort-up');
    const repetSortDown = repetContainer.querySelector('.repet-sort-down');
    const repetInner = repetContainer.querySelector('.repet-inner');
    const repets = [
        'Настя Авдеева',
        'Тимур Тимурович',
        'Антонина Сергеева',
        'Полина Ли',
        'Софья Андреева',
        'Денис Петренко',
        'Сергей Хречко',
        'Абрам Абобович'
    ];
    // console.log(shopProducts);

    repets.forEach(item => {
        let element = document.createElement('div');
        element.classList.add('repet-item');
        element.textContent = item;
        repetInner.append(element);
    });

    // Функция по получению рандомного значения
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Изменение одного из элементов на другой
    repetChange.addEventListener('click', () => {
        let newItem = repets[getRandomInt(repets.length)];
        // console.log(newItem);
        repets[getRandomInt(repets.length)] = newItem;
        let elements = document.querySelectorAll('.repet-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=repets[cnt];
            cnt+=1;
        });
    });

    // Удаление первого элемента

    // repetDelete.addEventListener('click', () => {
    //     repetContainer.querySelector('.shop__cart-item').remove();
    // });

    repetDelete.addEventListener('click', () => {
        if (repets.length!=0){
            repets.splice(0,1);
            repetContainer.querySelector('.repet-item').remove();
        }
        // console.log(shopProducts);
        let elements = document.querySelectorAll('.repet-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=repets[cnt];
            cnt+=1;
        });
    });

    // ------------------------------------------------------


    // 2 Фильтр

    const arr = [10, 15, 1, 5, 8, 11, 13, 20, 45, 32, 25, 7];

    function filterArray(arr, a, b) {
        let newArr = [];

        arr.forEach(item => {
            if (item >= a && item <= b) {
                newArr.push(item);
            }
        });

        return newArr;
    }

    console.log(filterArray(arr, 4, 20));
    console.log(filterArray(arr, 13, 40));
    console.log(filterArray(arr, 46, 50));


    // ------------------------------------------------------


    // 3 Сортировка на сайте по алфавиту

    repetSortUp.addEventListener('click', () => {
        repets.sort();
        let elements = document.querySelectorAll('.repet-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=repets[cnt];
            cnt+=1;
        });
    });

    repetSortDown.addEventListener('click', () => {
        repets.sort();
        repets.reverse();
        let elements = document.querySelectorAll('.repet-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=repets[cnt];
            cnt++;
        });
    });


    // 4 задание

    const notif = document.querySelector('.notifs');
    const notifBtn = notif.querySelector('.notif__btn');
    const notifInner = notif.querySelector('.notif__inner');
    const notifCounter = notif.querySelector('.notif__counter');
    const notifArr = [
        'Привет!',
        'Спишь?!',
        'Как дела?',
        'Вставай!!!!!',
        'Я кофе приготовил',
        'А ну встал!!!',
    ];



    let numberNotif = 0;
    let counter = 0;

    function createNotif() {
        let element = document.createElement('div');
        element.classList.add('notif__item');

        if (numberNotif < notifArr.length) {
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        } else {
            numberNotif = 0;
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        }

        notifInner.append(element);

        notifCounter.textContent = counter;
    }

    let timerId = setInterval(createNotif, 3000);

    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function() {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });
});
