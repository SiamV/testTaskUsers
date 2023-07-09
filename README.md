# testTaskUsers
выполнение тестового задания

## Task Description:
Требуется разработать API сервис для хранения пользователей
- Сервис должен быть организован по принципу REST API
- Пароли хэшировать на стороне сервера при создании пользователя
- Заложить структуру проекта (директории routes, services, etc.)
- Эндпоинты хранить в суб-роутерах
- Миграции (alembic)
- Использовать pipenv
- Сервис должен иметь CRUD-функции для работы с пользователями
- CRUD-функции делать классом и вообще использовать ООП
- Для запросов к сервису и ответов использовать JSON
- Система должна быть отзывчива и производительна
- Сервис должен хранить информацию о пользователях в БД (SQLite не использовать!) и выполнять запросы при помощи ORM(использовать такие поля для хранения пользователей: id, username, email. password, register_date).
- Покрыть код тестами (pytest)
- Использовать асинхронность (async/await)
Technical requirements
Требуется разработать следующие api эндпоинты:
- POST /user
- GET /user/user-id
- PUT /user/user-id
- PATCH /user/user-id
- DELETE /user/user-id
- GET /user-list
- Сервис требуется реализовать при помощи fastapi и любой поддерживаемой им ORM (sql, nosql база даннх на выбор, кроме SQLite)
- Весь стек должен запускаться через docker-compose

# Решение
## Архитектура проекта
Всё исходные файлы приложения находятся в папке client.
Приложение полностью работает на базе Next.Js.
В отличие от чистого React.js, который работает в браузере клиента (CSR),
Next.js рендерит разметку на стороне сервера (SSR).
Это позволяет сделать CEO оптимизацию и подружить APP с поисковыми роботами.

Подключение базы данных MongoDB:
-папки lib/dbConnect.js, models/UserDB.js

Создание REST API:
-папки pages/api/users
endPoints доступны по следующим запросам:
- GET /api/users (получение всех пользователей)
- GET /api/users/user-id (получение одного пользователя по id)
- POST /api/users (создание нового пользователя)
- PUT /api/users/user-id (редактирование существующего пользователя по id)
- DELETE /api/users/user-id (удаление пользователя по id)

Маршрутизация:
-папка pages/undex.js, pages/users.js, pages/users/[id].js ...

Вспомогательные файлы и клиентские компоненты:
- components, common

Внимание!
Папка server создана для дальнейшего рефакторинга приложения.
Можно в будущем развернуть два сервера
один сервер для отдачи html на базе Next.js,
а второй сервер для работы с API, который будет работать например на express.js (или любом другом)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
