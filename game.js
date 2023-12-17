
// Инициализация переменной для отслеживания текущей сцены в игре
let SceneNow = 1;

// Функция, вызываемая при выборе игроком действия
function makeChoice(choice) {
  // Проверка текущей сцены
  if (SceneNow === 1) {
  switch (choice) {
                                              // Выбор №1 - Левая дверь
    case 1:
        document.getElementById('story').innerHTML = 'Вы оказались в кладовке, дверь закрывается и теперь Вы заперты.  Пути дальше нет.';
        document.getElementById('question').innerHTML = 'Конец игры';
        document.getElementById('img-container').innerHTML = '<img src="img/Scene1_choice1.jpg" alt="Scene 1 Choice 1 Image">';
// Скрытие кнопок после завершения сцены
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
    break;
                                                  // Выбор № 2 - Окно
    case 2:
        document.getElementById('story').innerHTML = 'У окна Вы находите длинную веревку.';
        document.getElementById('question').innerHTML = 'Привязать веревку к окну и начать спускаться вниз?';
        document.getElementById('img-container').innerHTML = '<img src="img/Scene1_choice2.jpg" alt="Scene 1 Choice 2 Image">';
        document.getElementById('choice1').innerHTML = 'Да';
        document.getElementById('choice2').innerHTML = 'Нет';
        document.getElementById('choice3').innerHTML = 'Взять веревку с собой';
        SceneNow = 2;
    break;
                                                // Выбор № 3 - Правая дверь
    case 3:
        document.getElementById('story').innerHTML = 'Перед Вами лестница, ведущая на 2 этаж. Но есть опасность - ступеньки сломаны, а в некоторых местах и вовсе отсутствуют.';
        document.getElementById('question').innerHTML = 'Каков Ваш выбор?';
        document.getElementById('img-container').innerHTML = '<img src="img/Scene1_choice3.jpg" alt="Scene 1 Choice 2 Image">';
        document.getElementById('choice1').innerHTML = 'Попытаться медленно спуститься вниз';
        document.getElementById('choice2').innerHTML = 'Прыгнуть сразу на 2 этаж';
        document.getElementById('choice3').style.display = 'none';
        SceneNow = 7;
    break;
        }                                         //конец первого switch
    }                                             // конец первой сцены

// Проверка текущей сцены - сцена номер 2 у окна
else if (SceneNow === 2) {
  switch (choice) {
                                        // Выбор №1 - Вы привязали веревку и спускаетесь
    case 1:
        document.getElementById('story').innerHTML = 'Вы спустились на этаж ниже и теперь перед Вами окно второго этажа.';
        document.getElementById('question').innerHTML = 'Ваши дальнейшие действия?';
        document.getElementById('img-container').innerHTML = '<img src="img/Scene2_choice1.jpg" alt="Scene 1 Choice 2 Image">';
        document.getElementById('choice1').innerHTML = 'Выбить окно и залесть внутрь';
        document.getElementById('choice2').innerHTML = 'Спускаться дальше вниз';
        document.getElementById('choice3').innerHTML = 'Вернуться назад';
        SceneNow = 3;
    break;
                                        // Выбор №2 - Вы не стали спускаться по веревке вниз
    case 2:
        document.getElementById('story').innerHTML = 'Вы не стали спускаться по веревке вниз и вернулись назад к выбору.';
        document.getElementById('question').innerHTML = 'Ваши дальнейшие действия?';
        document.getElementById('img-container').innerHTML = '<img src="img/choice_1.jpg" alt="Choice 1 Image">, <img src="img/choice_3.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').innerHTML = 'Левая дверь';
        document.getElementById('choice2').innerHTML = 'Правая дверь';
        document.getElementById('choice3').style.display = 'none';
        SceneNow = 8;
    break;
                                          // Выбор №3 - Вы взяли веревку с собой
    case 3:
        document.getElementById('story').innerHTML = 'Вы взяли веревку с собой и вернулись назад к выбору.';
        document.getElementById('question').innerHTML = 'Ваши дальнейшие действия?';
        document.getElementById('img-container').innerHTML = '<img src="img/choice_1.jpg" alt="Choice 1 Image">, <img src="img/choice_3.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').innerHTML = 'Левая дверь';
        document.getElementById('choice2').innerHTML = 'Правая дверь';
        document.getElementById('choice3').style.display = 'none';
        SceneNow = 9;
    break;
  }                                          // Конец второго switch
}                                           // конец второй сцены

// Проверка текущей сцены - сцена номер 3 - спускаетесь вниз с окна
else if (SceneNow === 3) {
  switch (choice) {
                                      // Выбор №1 - Выбили окно и залезли
   case 1:
        document.getElementById('story').innerHTML = 'Вы оказались на втором этаже здания. Перед Вами снова стоит выбор ';
        document.getElementById('question').innerHTML = 'Ваши дальнейшие действия?';
        document.getElementById('img-container').innerHTML = '<img src="img/Floor2_door1.jpg" alt="Choice 1 Image">, <img src="img/Floor2_door2.jpg" alt="Choice 1 Image">, <img src="img/Floor2_door3.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').innerHTML = 'Дверь №1';
        document.getElementById('choice2').innerHTML = 'Дверь №2';
        document.getElementById('choice3').innerHTML = 'Дверь №3';
        SceneNow = 4;
   break;
                                      // Выбор №2 - Вы спустились дальше вниз
   case 2:
        document.getElementById('story').innerHTML = 'Вы смогли спуститься до 1 этажа и оказались в саду. Вам ничего не угрожает';
        document.getElementById('question').innerHTML = 'Вы спасены!';
        document.getElementById('img-container').innerHTML = '<img src="img/Garden.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
   break;
                                          // Выбор №3 - Вы поднялись назад
   case 3:
        document.getElementById('story').innerHTML = 'Вы вновь оказались на 3 этаже.';
        document.getElementById('question').innerHTML = 'Каков Ваш выбор теперь?';
        document.getElementById('img-container').innerHTML = '<img src="img/choice_1.jpg" alt="Choice 1 Image">, <img src="img/choice_3.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').innerHTML = 'Левая дверь';
        document.getElementById('choice2').innerHTML = 'Правая дверь';
        document.getElementById('choice3').style.display = 'none';
        SceneNow = 8;
   break;
      }                                   // конец третьего switch
    }                                    // конец третьей сцены

// Проверка текущей сцены - сцена номер 4 - выбор дверей на 2 этаже
  else if (SceneNow === 4) {
    switch (choice) {
                                          // Выбор №1 - Дверь 1
   case 1:
        document.getElementById('story').innerHTML = 'За дверью оказалась пропасть. Вы провалились вниз и умерли ';
        document.getElementById('question').innerHTML = 'Конец игры';
        document.getElementById('img-container').style.display = 'none';
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
   break;
                                            // Выбор №2 - Дверь 2
   case 2:
        document.getElementById('story').innerHTML = 'Вы обнаружили лестницу, ведущую на 1 этаж';
        document.getElementById('question').innerHTML = 'Ваши дальнейшие действия?';
        document.getElementById('img-container').innerHTML = '<img src="img/Stairs2.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').innerHTML = 'Спуститься по лестнице';
        document.getElementById('choice2').innerHTML = 'Прыгнуть';
        document.getElementById('choice3').style.display = 'none';
        SceneNow = 5;
  break;
                                              // Выбор №3 - Дверь 3
   case 3:
        document.getElementById('story').innerHTML = 'За третьей дверью находится комната с зеркалами. Вы навсегда потеряны в зазеркалье';
        document.getElementById('question').innerHTML = 'Конец игры';
        document.getElementById('img-container').innerHTML = '<img src="img/Mirror.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
   break;
      }                                   // конец четвертого switch
    }                                    // конец четвертой сцены

// Проверка текущей сцены - сцена номер 5 - выбор перед лестнице на 2 этаже
    else if (SceneNow === 5) {
      switch (choice) {
                                              // Выбор №1 - Спуститься по лестнице
    case 1:
        document.getElementById('story').innerHTML = 'Вы спустились на 1 этаж. Перед Вами огромная дверь';
        document.getElementById('question').innerHTML = 'Попытаться открыть ее?';
        document.getElementById('img-container').innerHTML = '<img src="img/BigDoor1.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').innerHTML = 'Да';
        document.getElementById('choice2').innerHTML = 'Нет';
        document.getElementById('choice3').style.display = 'none';
        SceneNow = 6;
    break;
                                                // Выбор №2 - Прыгнуть
    case 2:
        document.getElementById('story').innerHTML = 'Во время прыжка вы подскользнулись и неудачно упали на 1 этаж.У вас сломана левая нога и дальше вы двигаться не можете';
        document.getElementById('question').innerHTML = 'Конец игры';
        document.getElementById('img-container').style.display = 'none';
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
    break;
        }                                   // конец пятого switch
    }                                      // конец пятой  сцены


// Проверка текущей сцены - сцена номер 6 - выбор перед огромной дверью
    else if (SceneNow === 6) {
      switch (choice) {
                                                  // Выбор №1 - открыть дверь
    case 1:
        document.getElementById('story').innerHTML = 'Вы смогли открыть эту дверь и оказались на улице. Вам ничего не угрожает';
        document.getElementById('question').innerHTML = 'Вы спасены!';
        document.getElementById('img-container').innerHTML = '<img src="img/Garden.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
    break;
                                                    // Выбор №2 - не открывать дверь
    case 2:
        document.getElementById('story').innerHTML = 'Назад пути нет, Вы остались в этом доме навсегда';
        document.getElementById('question').innerHTML = 'Конец игры';
        document.getElementById('img-container').style.display = 'none';
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
    break;
    }                                   // конец шестого switch
  }                                     // конец шестой  сцены


// Проверка текущей сцены - сцена номер 7 - выбор перед дверьми н 2 этаже
  else if (SceneNow === 7) {
      switch (choice) {
                                              // Выбор №1 - Медленно Спуститься по лестнице на 2 этаж
  case 1:
        document.getElementById('story').innerHTML = 'Вы оказались на втором этаже здания. Перед Вами снова стоит выбор ';
        document.getElementById('question').innerHTML = 'Ваши дальнейшие действия?';
        document.getElementById('img-container').innerHTML = '<img src="img/Floor2_door1.jpg" alt="Choice 1 Image">, <img src="img/Floor2_door2.jpg" alt="Choice 1 Image">'
        document.getElementById('choice1').innerHTML = 'Дверь №1';
        document.getElementById('choice2').innerHTML = 'Дверь №2';
        document.getElementById('choice3').innerHTML = 'Дверь №3';
        SceneNow = 4;
  break;
                                                // Выбор №2 - Прыгнуть
  case 2:
        document.getElementById('story').innerHTML = 'Во время прыжка вы подскользнулись и неудачно упали на 2 этаж.У вас сломана правая нога и дальше вы двигаться не можете';
        document.getElementById('question').innerHTML = 'Конец игры';
        document.getElementById('img-container').style.display = 'none';
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
  break;
  }                                   // конец седьмого switch
}                                      // конец сельмой  сцены


// Проверка текущей сцены - сцена номер 8 - выбор на 3 этаже
    else if (SceneNow === 8) {
      switch (choice) {
                                              // Выбор №1 - Левая дверь
    case 1:
        document.getElementById('story').innerHTML = 'Вы оказываетесь в кладовке, дверь закрывается и теперь Вы заперты. Пути дальше нет.';
        document.getElementById('question').innerHTML = 'Конец игры';
        document.getElementById('img-container').innerHTML = '<img src="img/Scene1_choice1.jpg" alt="Scene 1 Choice 1 Image">';
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
    break;
                                                // Выбор №2 - Правая дверь
    case 2:
        document.getElementById('story').innerHTML = 'Перед Вами лестница, ведущая на 2 этаж. Но есть опасность - ступеньки сломаны, а в некоторых местах и вовсе отсутствуют.';
        document.getElementById('question').innerHTML = 'Каков Ваш выбор?';
        document.getElementById('img-container').innerHTML = '<img src="img/Scene1_choice3.jpg" alt="Scene 1 Choice 2 Image">';
        document.getElementById('choice1').innerHTML = 'Попытаться медленно спуститься вниз';
        document.getElementById('choice2').innerHTML = 'Прыгнуть сразу на 2 этаж';
        document.getElementById('choice3').style.display = 'none';
        SceneNow = 7;
    break;
      }                                     // конец восьмого switch
    }                                      // конец восьмой  сцены

// Проверка текущей сцены - сцена номер 9 - выбор на 3 этаже (с веревкой)
   else if (SceneNow === 9) {
      switch (choice) {
                                                  // Выбор №1 - Левая дверь
        case 1:
            document.getElementById('story').innerHTML = 'Вы оказываетесь в кладовке, дверь закрывается и теперь Вы заперты. Пути дальше нет.';
            document.getElementById('question').innerHTML = 'Конец игры';
            document.getElementById('img-container').innerHTML = '<img src="img/Scene1_choice1.jpg" alt="Scene 1 Choice 1 Image">';
            document.getElementById('choice1').style.display = 'none';
            document.getElementById('choice2').style.display = 'none';
            document.getElementById('choice3').style.display = 'none';
        break;
                                                    // Выбор №2 - Правая дверь
        case 2:
            document.getElementById('story').innerHTML = 'Перед Вами лестница, ведущая на 2 этаж. Но есть опасность - ступеньки сломаны, а в некоторых местах и вовсе отсутствуют.';
            document.getElementById('question').innerHTML = 'Каков Ваш выбор?';
            document.getElementById('img-container').innerHTML = '<img src="img/Scene1_choice3.jpg" alt="Scene 1 Choice 2 Image">';
            document.getElementById('choice1').innerHTML = 'Спуститься вниз с помощью веревки';
            document.getElementById('choice2').innerHTML = 'Самостоятельно спуститься по ступенькам ';
            document.getElementById('choice3').style.display = 'none';
            SceneNow = 10;
        break;
        }                                     // конец восьмого switch
      }                                      // конец восьмой  сцены


// Проверка текущей сцены - сцена номер 10 - спуск вниз по веревке
      else if (SceneNow === 10) {
        switch (choice) {
                                                        // Выбор №1 - Спуститься вниз с помощью веревки
        case 1:
            document.getElementById('story').innerHTML = 'Вы оказались на втором этаже здания. Перед Вами снова стоит выбор ';
            document.getElementById('question').innerHTML = 'Ваши дальнейшие действия?';
            document.getElementById('img-container').innerHTML = '<img src="img/Floor2_door1.jpg" alt="Choice 1 Image">, <img src="img/Floor2_door2.jpg" alt="Choice 1 Image">'
            document.getElementById('choice1').innerHTML = 'Дверь №1';
            document.getElementById('choice2').innerHTML = 'Дверь №2';
            document.getElementById('choice3').innerHTML = 'Дверь №3';
            SceneNow = 4;
        break;
                                                          // Выбор №2 - Самостоятельно спуститься по ступенькам
        case 2:
        document.getElementById('story').innerHTML = 'Во время прыжка вы подскользнулись и неудачно упали на 2 этаж.У вас сломана правая нога и дальше вы двигаться не можете';
        document.getElementById('question').innerHTML = 'Конец игры';
        document.getElementById('img-container').style.display = 'none';
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        document.getElementById('choice3').style.display = 'none';
        break;
              }                                     // конец восьмого switch
            }                           // коней восьмой сцены

}                                         // конец всей функции
