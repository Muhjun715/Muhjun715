$(document).ready(function() {
    // Load alumni data
    function loadAlumni() {
        $.get("api/get_alumni.php", function(data) {
            const alumni = JSON.parse(data);
            const tableBody = $("#alumniTable tbody");
            tableBody.empty();

            alumni.forEach(item => {
                tableBody.append(`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.year_of_graduation}</td>
                        <td>${item.occupation}</td>
                        <td>${item.program_study}</td>
                    </tr>
                `);
            });
        });
    }

    // Submit form
    $("#alumniForm").on("submit", function(event) {
        event.preventDefault();

        $.post("api/save_alumni.php", $(this).serialize(), function(response) {
            const result = JSON.parse(response);

            if (result.status === "success") {
                alert("Data berhasil disimpan!");
                $("#alumniForm")[0].reset();
                loadAlumni();
            } else {
                alert("Terjadi kesalahan: " + result.message);
            }
        });
    });

    // Initial load
    loadAlumni();
});
