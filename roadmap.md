#Задачи деленные на помодоры

[] Вебсокеты — прочитать как работает (может занять больше времени)
[] Вебсокеты — тестовое просто приложение, составить его модель
[] Сессия — общее исследование как сделать сессию
[] Сессия — прочитать про JWT



#Общий план

##Пользователь и сессия

Создавать и сохранять пользователя в бд — какая база? MongoDB?

Это сессия пользователя на клиенте — как это делается? JWT куки? Как логаутится?

UI регистрации/логина, личный кабинет пользователя

Стор для данных пользователя - вебсокеты?

Использовать сессию с куками? Проверять их с помощью JWT  на сервере?


##Вебсокеты

Нужны для того чтобы отправлять на бек данные о действиях игрока

1. прочитать про вебсокеты, как они работают
2. Создать тестовое приложение на сокетах — 3 клиента, они отправляют сигналы на сервер, на сервере это в демо режиме разруливать

##Сервер

Koa.js
Нужно разобраться с архитектурой — как разделять приложение
Подлючить вебсокеты
Подрубить базу данных

##Фронт

База фронта готова

Нужно разобраться как хранить стейт на клиенте(нативные редусеры?) и как разделять стейт на модули
Нужен UI подключения к игре
Нужен UI ответа на вопрос