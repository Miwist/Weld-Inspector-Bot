# Telegram Bot с использованием Node.js

Это репозиторий для телеграм-бота, написанного на Node.js.

## Описание

Бот по фото определяет дефекты сварочных швов

## Запуск

1. *Установите Node.js*: [https://nodejs.org/](https://nodejs.org/)
2. *Установите зависимости*:
   
bash
   npm install
   
3. *Получите API-токен бота*:
   * Создайте бота в [BotFather](https://t.me/BotFather).
   * Сохраните полученный токен в переменную окружения BOT_TOKEN.
4. *Получите API-URL для отправки фото для определения дефектов с помощью ИИ*:
* Сохраните полученный API-URL в переменную окружения API_URL.
5. *Запустите бота*:
   
bash
   npm start

## Использование

1. Запустите бота командой /start
2. Отправьте ему фотографию сварочного шва

