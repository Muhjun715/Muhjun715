$(document).ready(function() {
    // Event Klik Button
    $('#contactButton').click(function() {
        alert('Anda akan menghubungi alumni!');
    });

    // Event Keydown pada Pencarian Alumni
    $('#searchAlumni').keydown(function(event) {
        $('#output').text('Anda mengetik: ' + event.key);
    });

    // Event Submit Form Alumni
    $('#alumniForm').submit(function(event) {
        event.preventDefault(); // Mencegah pengiriman form
        
        const name = $('#name').val();
        const year = $('#year').val();
        const photo = $('#photo')[0].files[0];
        
        if (name && year && photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const newRow = `
                    <tr>
                        <td class="name">${name}</td>
                        <td class="year">${year}</td>
                        <td><img src="${e.target.result}" alt="Photo ${name}" class="alumni-photo"></td>
                        <td class="action-buttons">
                            <button class="delete">Hapus</button>
                        </td>
                    </tr>`;
                
                $('#alumniTable tbody').append(newRow);
                
                // Reset form fields
                $('#name').val('');
                $('#year').val('');
                $('#photo').val('');
                
                alert(`Data alumni ditambahkan!\nNama: ${name}\nTahun: ${year}`);
            };
            reader.readAsDataURL(photo);
        } else {
            alert('Harap isi semua kolom!');
        }
    });

    // Event Resize pada Window
    $(window).resize(function() {
        const width = $(window).width();
        const height = $(window).height();
        $('#windowSize').text(`Ukuran jendela: ${width}x${height}`);
    });

    // Event Custom
    $('#output').on('customEvent', function(event, message) {
        $(this).append('<p>Event kustom dipicu: ' + message + '</p>');
    });

    $('#contactButton').click(function() {
        $('#output').trigger('customEvent', ['Kontak alumni diklik!']);
    });

    // Event Hover, Click, dan Interaction pada Gambar
    $('#alumniTable')
        .on('mouseenter', 'img', function() {
            $(this).css({
                'transform': 'scale(1.1)',
                'filter': 'brightness(1.2)'
            });
        })
        .on('mouseleave', 'img', function() {
            $(this).css({
                'transform': 'scale(1)',
                'filter': 'brightness(1)'
            });
        })
        .on('mousedown', 'img', function() {
            $(this).css({
                'transform': 'scale(0.95)',
                'filter': 'brightness(0.8)'
            });
        })
        .on('mouseup', 'img', function() {
            $(this).css({
                'transform': 'scale(1)',
                'filter': 'brightness(1)'
            });
        })
        .on('dblclick', 'img', function() {
            $(this).css({
                'transform': 'rotate(15deg)',
                'filter': 'brightness(1.2)'
            });
            
            setTimeout(() => {
                $(this).css({
                    'transform': 'rotate(0deg)',
                    'filter': 'brightness(1)'
                });
            }, 500);
        });

    // Event Lainnya
    $('#alumniTable')
        .on('selectstart', 'img', function() {
            $('#output').text('Gambar sedang dipilih...');
        })
        .on('mouseup', 'img', function() {
            $('#output').text('Mouse button dilepaskan pada gambar.');
        })
        .on('mousemove', 'img', function(event) {
            const offsetX = event.offsetX;
            const offsetY = event.offsetY;
            
            $('#output').text(`Gerakkan mouse: X=${offsetX}, Y=${offsetY}`);
            $('#windowSize').text('Ukuran jendela: ' + $(window).width() + 'x' + $(window).height());
        });

    // Galeri Gambar
    $('.gallery img').each(function(index) {
        $(this).delay(index * 200).fadeTo(500, 1);
    });

    // Klik gambar untuk menampilkan modal
    $('.gallery img').click(function() {
        const src = $(this).attr('src');
        const alt = $(this).attr('alt');
        
        $('#modalImg').attr('src', src);
        $('#caption').text(alt);
        $('#modal').fadeIn();
    });

    // Tutup modal saat klik tombol close
    $('.close').click(function() {
        $('#modal').fadeOut();
    });

    // Tutup modal saat klik di luar gambar
    $('#modal').click(function(event) {
        if (!$(event.target).is('#modalImg')) {
            $('#modal').fadeOut();
        }
    });

    // Hapus Alumni
    $('#alumniTable').on('click', '.delete', function() {
        $(this).closest('tr').remove();
    });
});