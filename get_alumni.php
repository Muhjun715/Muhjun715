<?php
$filename = "../data/alumni.json";

if (file_exists($filename)) {
    $data = file_get_contents($filename);
    echo $data;
} else {
    echo json_encode([]);
}
?>
