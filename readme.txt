CREATE TABLE `doctor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT,
  `specialization` TEXT,
  PRIMARY KEY  (`id`)
);

CREATE TABLE `phone` (
  `doc_id` INT,
  `h_phone` TEXT
);


ALTER TABLE `phone` ADD CONSTRAINT `phone_fk1` FOREIGN KEY (`doc_id`) REFERENCES doctor(`id`);


--- Создали две таблицы и связали их


SELECT * FROM doctor, phone WHERE doctor.id=phone.doc_id;
SELECT * FROM doctor LEFT JOIN phone ON doctor.id=phone.doc_id;

Выбираем всех докторов и все их телефоны из разных таблиц. Оба варианта ок.
JOIN чище, на небольших данных по скорости разницы, понятное дело нет.


---

Редактирование:
UPDATE doctor SET name = 'Dr. None' WHERE id=3;

Сортировка по ID в обратном порядке
SELECT * FROM doctor LEFT JOIN phone ON doctor.id=phone.doc_id ORDER BY doctor.id DESC;

Поиск:
SELECT name FROM doctor WHERE name LIKE 'Dr. None'

Фильтрация:
SELECT * FROM doctor WHERE id = 1

Связи таблиц реализованы в SequelPro.