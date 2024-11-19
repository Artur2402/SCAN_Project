# SCAN Project
- [Описание](#описание) 📋 
- [Функционал](#функционал) 🚀
- [Структура](#структура) 📂
- [Установка и запуск проекта](#установка-и-запуск-проекта) 🔧
- [Конфигурация](#конфигурация) 🛠
- [Цели и задачи](#цели-и-задачи) 🎯
- [Примечания](#примечания) 💡

## Описание
Данный проект представляет собой интерфейс для работы с аналитическими данными, предоставляемыми API. Реализована аутентификация пользователей, сбор статистики и поиск данных с использованием фильтров. Приложение разработано на основе MobX для управления состоянием и axios для выполнения HTTP-запросов.

## Функционал

Аутентификация пользователей
* Ввод логина и пароля для получения токена доступа к API.

Управление состояниями
* Используется MobX для удобного управления состоянием приложения.

Работа с API

* Получение данных о компаниях, построение графиков и сбор документов.

Фильтрация данных

Возможность использования фильтров для поиска:
* Выбор временного интервала
* Задание тональности и типов публикаций
* Учет полноты и рисков в новостях

## Структура

Основной файл логики — ```store.js```, где описаны состояния и методы для взаимодействия с API.

Cтек технологий:

* Frontend: React, MobX
* HTTP-клиент: Axios
* Стилизация: CSS/SCSS (добавляется по мере необходимости)

## Установка и запуск проекта

Клонируйте репозиторий:
```
git clone https://github.com/ваш-репозиторий.git
```
Перейдите в папку с проектом:
```
cd ваш-репозиторий
```
Установите зависимости:
```
npm install
```
Запустите локальный сервер:
```
npm start
```

## Конфигурация
Для работы с API необходимо настроить базовый URL в файле ```store.js```.

По умолчанию используется:
```
const API = "https://gateway.scan-interfax.ru";
```
Вы можете заменить его на собственный URL, если это необходимо.

## Цели и задачи
Проект создан для удобной работы с аналитическими данными:
* Сбор статистики по компаниям
* Поиск документов с учетом фильтров
* Построение визуализаций (графики, таблицы и т.д.)

Данный интерфейс является базовой частью аналитической платформы.

## Примечания
* Перед запуском убедитесь, что у вас установлен Node.js.
* Добавьте файл .gitignore и исключите папку node_modules из репозитория.

Совет: Если возникнут вопросы, используйте комментарии в коде — они подробно описывают основные методы.
