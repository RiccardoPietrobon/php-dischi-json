<?php 
//lista dischi

$list_discs = file_get_contents(__DIR__ . "./discs.json");
echo $list_discs;

?>