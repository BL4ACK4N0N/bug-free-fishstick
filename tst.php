<?php
header("Access-Control-Allow-Origin: *"); // Replace * with the specific domain you want to allow, or use '*' for any domain.
header("Content-Type: text/plain");

// Your code to read and output the domain list goes here
$fileContent = file_get_contents("domains.txt");
echo $fileContent;
?>
