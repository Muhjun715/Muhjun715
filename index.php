<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tracer Alumni</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Tracer Alumni</h1>
        <form id="alumniForm">
            <input type="text" id="name" name="name" placeholder="Nama" required>
            <input type="number" id="year_of_graduation" name="year_of_graduation" placeholder="Tahun Lulus" required>
            <input type="text" id="occupation" name="occupation" placeholder="Pekerjaan" required>
            <input type="text" id="program_study" name="program_study" placeholder="Program Studi" required>
            <button type="submit">Simpan</button>
        </form>
        <h2>Data Alumni</h2>
        <table id="alumniTable">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Tahun Lulus</th>
                    <th>Pekerjaan</th>
                    <th>Program Studi</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/js/scripts.js"></script>
</body>
</html>
