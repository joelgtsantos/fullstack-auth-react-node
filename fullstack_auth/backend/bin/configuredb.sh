#!/bin/bash
echo "Configuring database: usersdb"

dropdb -U node_user usersdb
createdb -U node_user usersdb

psql -U node_user usersdb < ./users.sql

echo "usersdb configured"