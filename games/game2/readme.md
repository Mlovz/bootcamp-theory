### Задание

Компьютер будет задавать игроку простые математические вопросы (сложение, вычитание, умножение). Игрок должен ввести ответ. Если ответ правильный, игрок получает очки.
Если неправильный, выводится сообщение об ошибке. Игра продолжается заданное количество вопросов, после чего выводится итоговый счет.

##### Пояснения

Функция getRandomInt: Возвращает случайное целое число в заданном диапазоне.
Функция generateQuestion:
Генерирует два случайных числа и случайный оператор (сложение, вычитание, умножение).
Возвращает объект с текстом вопроса и правильным ответом.
Функция playQuiz:
Задает игроку серию вопросов (по умолчанию 5).
Сравнивает ответ игрока с правильным ответом.
Увеличивает счет, если ответ правильный.
После всех вопросов выводит итоговый счет.
Основной код:
Приветствует игрока.
Запускает функцию викторины.