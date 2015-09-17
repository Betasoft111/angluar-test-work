<?php
echo phpinfo();die;
$putData = file_get_contents('php://input');
print_r($putData);
?>