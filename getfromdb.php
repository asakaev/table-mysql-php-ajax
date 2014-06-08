<?php
$sql = 'SELECT * FROM doctor LEFT JOIN phone ON doctor.id=phone.doc_id;';
$con = mysql_connect('localhost', 'root', '1234');
mysql_select_db('exam', $con);

$result = mysql_query($sql);

$rows = array();
while($r = mysql_fetch_assoc($result)) {
    $rows[] = $r;
}

header('Content-Type: application/json');
echo json_encode($rows);
?>