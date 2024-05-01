const API = 'https://rickandmortyapi.com/api/character'
const API2 = 'http://localhost:8004/characters'
const ul1 = document.querySelector('.first_task')
const char = document.querySelector('#characters')
const ul2 = document.querySelector('.block-2')
    // Запросы, XMLHttpRequest, AJAX.

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character&#39;.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/
fetch(API)
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.results.forEach(item => {
            let names = item.name
            let images = item.image
            ul1.innerHTML += `<li>${names} <img src="${images}" alt=""></li>`
                // !Раскомментируйте !!! ПОТОМ
            let newObj = {
                name: item.name,
                image: item.image,
            }
            createCharacters(newObj)
        })
    })
    // !если у кого также, брали у меня 100%!!!!!!

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

// !
// ? решение в первом задании
// !
/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

// !
// !РАСКОММЕНТИРУЙТЕ
function createCharacters(characters) {
    fetch(API2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(characters),
    })
}
// !Обновите один раз.
// !

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.*/

fetch(API2)
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.forEach(elem => {
            ul2.innerHTML += `<li>${elem.name} <img src="${elem.image}" alt=""></li>`
        })
    })
    // !перед тем как проверить удалите файлы с json пж.
    // !добавил bgc для различия между локальным сервером и на ваш изначальный адрес
    /* Задание №1.5. 
                    К именам добавьте картинки персонажей.
                    В итоге у вас должна получиться точная копия первых двух тасков.
                    Отличие которых лишь в базе данных.
                    */
    //    ! в решении 4 задания.