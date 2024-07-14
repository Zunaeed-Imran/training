<?php
// Question: using OOP in PHP in Database.



$db = new DB([
    'host' => '127.0.0.1',
    'port' => 3306,
    'user' => 'root',
    'password' => '',
]);

$db->insert('users', [
    'first_name' => 'Zunaeed',
    'last_name' => 'Imran',
    'nick_name' => 'Rfiat',
]);

$db->update('users', 2, [
    'first_name' => 'Zunaeed',
    'last_name' => 'Imran',
    'nick_name' => 'Rfiat',
]);

$db->select('users', [
    'fields' => [
        'first_name',
        'last_name',
        'nick_name',
    ],
]);

$db->delete('users', 2);

