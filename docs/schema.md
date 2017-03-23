# Schema Information

## users

| column name     | data type | details                   |
| --------------- | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| first_name      | string    | not null                  |
| password_digest | string    | not null, indexed, unique |
| image_url       | string    |                           |

## spots

| column name    | data type | details                        |
| -------------- | --------- | ------------------------------ |
| id             | integer   | not null, primary key          |
| title          | string    | not null                       |
| price          | integer   | not null                       |
| image_url      | string    |                                |
| host_id        | integer   | not null, foreign key, indexed |
| description    | text      |                                |
| lat            | float     | not null                       |
| lng            | float     | not null                       |

## trips

| column name     | data type | details                        |
| --------------- | --------- | ------------------------------ |
| id              | integer   | not null, primary key          |
| user_id         | integer   | not null, foreign key, indexed |
| spot_id         | integer   | not null, foreign key, indexed |
| check_in        | string    | not null                       |
| check_out       | string    | not null                       |
| num_guests      | integer   | not null                       |

## reviews

| column name | data type | details                        |
| ----------- | --------- | ------------------------------ |
| id          | integer   | not null, primary key          |
| spot_id     | integer   | not null, foreign key, indexed |
| user_id     | integer   | not null, foreign key, indexed |
| detail      | text      | not null                       |
| date        | string    | not null                       |

## destinations

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| city        | string    | not null              |
| image_url   | string    | not null              |
| lat         | float     | not null              |
| lng         | float     | not null              |

<!--
## search_filters

| column name    | data type | details              |
| -----------    | --------- | -------------------- |
| destination_id | integer   | foreign key, indexed |
| price_low      | integer   |                      |
| price_high     | integer   |                      |
| check_in       | string    |                      |
| check_out      | string    |                      | -->
