#Schema Information

##users

| column name     | data type | details                   |
| --------------- | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| first_name      | string    | not null                  |
| last_name       | string    | not null                  |
| password_digest | string    | not null, index, unique   |

##spots
| column name     | data type | details               |
| --------------- | --------- | --------------------- |
| id              | integer   | not null, primary key |
| title           | string    | not null              |
| user_id         | integer   | foreign key           |
| destination_id  | integer   | foreign key           |
| price           | integer   | not null              |
| cleaning_fee    | integer   | not null              |
| check_in_time   | string    | not null              |
| check_out_time  | string    | not null              |
| pet_owner       | string    |                       |
| property_type   | string    | not null              |
| room_type       | string    | not null              |
| house_rules     | text      |                       |
| description     | text      |                       |
| reviews         | integer   |                       |

##trips
| column name     | data type | details               |
| --------------- | --------- | --------------------- |
| id              | integer   | not null, primary key |
| user_id         | integer   | not null, foreign key |
| spot_id         | integer   | not null, foreign key |
| status          | string    | not null              |
| check_in        | string    | not null              |
| check_out       | string    | not null              |
| num_guests      | integer   | not null              |

##reviews

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| spot_id     | integer   | not null, foreign key |
| user_id     | integer   | not null, foreign key |
| detail      | text      | not null              |
| date        | string    | not null              |

##destinations

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| city        | string    | not null              |
| state       | string    | not null              |
| country     | string    | not null              |

##search_filters

| column name    | data type | details  |
| -----------    | --------- | -------- |
| destination_id | integer   | not null |
| price_low      | integer   |          |
| price_high     | integer   |          |
| check_in       | string    |          |
| check_out      | string    |          |
