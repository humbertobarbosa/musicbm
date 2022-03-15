function addAlbum() {
    var album = {
        title: document.getElementById("album").value,
        artist: document.getElementById("artist").value,
        genre: document.getElementById("genre").value,
        numSongs: document.getElementById("numsongs").value,
        month: document.getElementById("month").value
    };

    if (verifyFields(album)) {
        if (verifyDuplicateAlbums([album.title, album.artist])) {
            fieldWarning.innerHTML = "";

            let numRows = tableContent.rows.length;
            let row = tableContent.insertRow(numRows);
            row.classList.add("row-album");

            showButton(document.getElementById("btn-remove"));
            showButton(document.getElementById("input-filter"));
            
            let cellCode = row.insertCell(0);
            let cellAlbum = row.insertCell(1);
            let cellArtist = row.insertCell(2);
            let cellGenre = row.insertCell(3);
            let cellNumSongs = row.insertCell(4);
            let cellMonth = row.insertCell(5);

            cellCode.classList.add("code");
        
            cellCode.innerHTML = numRows + 1;
            cellAlbum.innerHTML = album.title;
            cellArtist.innerHTML = album.artist;
            cellGenre.innerHTML = album.genre;
            cellNumSongs.innerHTML = album.numSongs;
            cellMonth.innerHTML = album.month;

            colorFieldWarning("green");
            fieldWarning.innerHTML = "Álbum '" + album.title + "' adicionado!";
        }

        resetForm();
    }
}

function verifyFields(album) {
    let verify = false;

    colorFieldWarning("red");

    if (album.title == "") {
        fieldWarning.innerHTML = "Erro: preencha o campo 'Título'!";
        document.getElementById("album").focus();
    } else if (album.artist == "") {
        fieldWarning.innerHTML = "Erro: preencha o campo 'Artista'!";
        document.getElementById("artist").focus();
    } else if (album.genre == "") {
        fieldWarning.innerHTML = "Erro: preencha o campo 'Gênero'!";
        document.getElementById("genre").focus();
    } else if (album.numSongs == "") {
        fieldWarning.innerHTML = "Erro: preencha o campo 'Faixas'!";
        document.getElementById("numsongs").focus();
    } else if (album.month == "") {
        fieldWarning.innerHTML = "Erro: preencha o campo 'Ouvido em'!";
        document.getElementById("month").focus();
    } else {
        verify = true;
    }

    return verify;
}

function verifyDuplicateAlbums(row) {
    let verify = true;

    albumList.forEach(function(a) {
        if (compareLists(a, row)) {
            verify = false;
            colorFieldWarning("red");
            fieldWarning.innerHTML = "Erro: este álbum já foi adicionado!";
        }
    });

    if (verify == true) {
        albumList.push(row);
    }

    return verify;
}

function resetForm() {
    const formAlbum = document.getElementById("form-album");
    formAlbum.reset();
}
