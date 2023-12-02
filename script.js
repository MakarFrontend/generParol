//Код для года копирайта
const year = document.querySelector('#nowyear');
year.textContent = new Date().getFullYear();
let sostoanieimeni = 0;

function generate() {
    var i = 0; //Переменная - счётчик для while
    var simvoli = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', //Массив символов для пароля
                'q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
                'o', 'p', 'a', 's', 'd', 'f', 'g',
                'h', 'h', 'j', 'k', 'l', 'z', 'x', 'c',
                'v', 'b', 'n', 'm', '/', '|', '#', '&',
                '!', '%', '*', ')', '('];
    let parol = '';
    let kolvosimvolov = prompt('Введи количество символов в пароле:'); //Сколько символов
    if ((kolvosimvolov > 22) || (kolvosimvolov < 0) || ((kolvosimvolov % 1) != 0)) { //Некорректный запрос
        alert('Некорректный запрос!')
        document.getElementById('rez').value = 'ОШИБКА'; //Вывод ошибки
    } else {
        while (i < kolvosimvolov) { // Генерация пароля
            let sim = Math.floor(Math.random() * simvoli.length);
            parol += simvoli[sim];
            i++;
        }
        document.getElementById('rez').value = parol; //Вывод пароля в input
    }
}
function copy() {
    var sostoaniecopy = 0; // инициализация состояния копирования
    if (sostoaniecopy == 0) { // если состояние копирования не выполнялось
    var inputtext = document.getElementById('rez').value; // получение текста для копирования
    navigator.clipboard.writeText(inputtext); // запись текста в буфер обмена
    sostoaniecopy = 1; // установка состояния копирования как выполненного
    }
    sostoaniecopy = 0; // сброс состояния копирования
}
var temnow = 1;
function tema() {
    if (temnow == 0) { //На тёмную тему
        document.getElementById('body').style.background = '#696969';
        document.getElementById('content').style.background = '#696969';
        document.getElementById('fornighttema').style.background = '#696969';
        document.getElementById('header').style.background = 'radial-gradient( at center, #FFA500, #696969, #696969)';
        document.getElementById('gen').style.background = 'radial-gradient( at center, #FFA500, #696969, #696969)';
        document.getElementById('rez').style.background = '#696969';
        document.getElementById('tema').style.background = 'radial-gradient( at 50% 50%, #FFFFFF, #696969, #696969)';
        document.getElementById('niz').style.background = '#696969';
        document.getElementById('copy').style.background = '#696969';
        document.getElementById('copyright').style.background = '#696969';
        temnow = 1;
    } else { //На светлую тему
        document.getElementById('body').style.background = '#FFFFFF';
        document.getElementById('content').style.background = '#FFFFFF';
        document.getElementById('fornighttema').style.background = '#FFFFFF';
        document.getElementById('header').style.background = 'radial-gradient( at center, #FFA500, #FFFFFF, #FFFFFF)';
        document.getElementById('gen').style.background = 'radial-gradient( at center, #FFA500, #FFFFFF, #FFFFFF)';
        document.getElementById('rez').style.background = '#FFFFFF';
        document.getElementById('tema').style.background = 'radial-gradient( at 50% 50%, #696969, #FFFFFF, #FFFFFF)';
        document.getElementById('niz').style.background = '#FFFFFF';
        document.getElementById('copy').style.background = '#FFFFFF';
        document.getElementById('copyright').style.background = '#FFFFFF';
        temnow = 0;
    }
}