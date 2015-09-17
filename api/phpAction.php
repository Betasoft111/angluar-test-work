<?php

if(@$_REQUEST['action']!='') {
	$action = @$_REQUEST['action'];
}
$action();	

function connect() {
	$con = mysql_connect('localhost','betasoft','360itpro');
	mysql_select_db('sukant-angular',$con)or die('not connected');
	return true;
}



function  insert() {
	connect();
	$params = json_decode(file_get_contents('php://input'),true);
	$query = "Insert into users(id,name,age,gender) values('','".$params['name']."','".$params['age']."','".$params['gender']."')";
	$result = mysql_query($query);
	if($result) {
		echo 'success';
	}else {
		echo 'error';
	}
	die;
	
}

function loadUsers() {
	connect();
	$query = "Select * from users";
	$result = mysql_query($query);
	if($result) {
		$usersArr = array();
		while ($row = mysql_fetch_assoc($result)) {
			$usersArr[] = $row; 
		}
		echo json_encode($usersArr);	
	}
}

function delete() {
	connect();
	$id = @$_REQUEST['id'];
	$query = "Delete from users where id = '".$id."'";
	$result = mysql_query($query);
	if($result) {
		echo 'success';
	}else {
		echo 'error';
	}
	die;
}


?>