<?php 
//lista dischi

$data = file_get_contents(__DIR__ . "./discs.json"); //si riferisce al file json

header('Content-Type: application/json; charset=utf-8'); //lo tratta come un json

echo $data;

?>