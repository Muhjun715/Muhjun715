<?php
$filename = "../data/alumni.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $year_of_graduation = $_POST['year_of_graduation'];
    $occupation = $_POST['occupation'];
    $program_study = $_POST['program_study'];

    // Ambil data lama dari file
    $data = file_get_contents($filename);
    $alumni = json_decode($data, true);

    // Tambahkan data baru
    $newAlumni = [
        "name" => $name,
        "year_of_graduation" => $year_of_graduation,
        "occupation" => $occupation,
        "program_study" => $program_study,
    ];
    $alumni[] = $newAlumni;

    // Simpan kembali ke file
    file_put_contents($filename, json_encode($alumni, JSON_PRETTY_PRINT));

    echo json_encode(["status" => "success", "message" => "Data saved successfully."]);
}
?>
