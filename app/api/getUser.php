<?php

include("connect.php");
$user = array();
$query = "SELECT * FROM users";

$statement = $mysqli->prepare($query);

$statement->execute();

$result = $statement->get_result();

$i = 0;

while ($row = mysqli_fetch_assoc($result)) {
    $user[$i]['id'] = $row['id'];
    $user[$i]['gamertag'] = $row['username'];
    $user[$i]['fullname'] = $row['firstname'] . ' ' . $row['lastname'];
    $i++;
}

$json = json_encode($user);
echo $json;
$result->free();
$statement->close();
exit;
