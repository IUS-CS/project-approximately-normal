#!/bin/sh

# create database 
mysql -h 127.0.0.1 -u root -e "CREATE OR REPLACE DATABASE approximately_normal"
# docker run -it --link mariadb:mysql --rm mariadb sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD" -e "CREATE OR REPLACE DATABASE approximately_normal"'

# create calendar table
mysql -h 127.0.0.1 -u root -e "USE approximately_normal;
CREATE OR REPLACE TABLE calendar (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NULL,
	event_id INT NOT NULL,
	created_at DATE NULL,
	created_by VARCHAR(255) NULL,
	udpated_at DATE NULL,
	updated_by VARCHAR(255) NULL
);"

# create event table
mysql -h 127.0.0.1 -u root -e "
USE approximately_normal;
CREATE OR REPLACE TABLE event (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NULL,
	description VARCHAR(255) NULL,
	location VARCHAR(255) NULL,
	start_date DATE NULL,
	end_date DATE NULL,
	created_at DATE NULL,
	created_by VARCHAR(255) NULL,
	udpated_at DATE NULL,
	updated_by VARCHAR(255) NULL
);"

# create the member table
mysql -h 127.0.0.1 -u root -e "
USE approximately_normal;
CREATE OR REPLACE TABLE member (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	created_at DATE NULL,
	created_by VARCHAR(255) NULL,
	udpated_at DATE NULL,
	updated_by VARCHAR(255) NULL
);"
