function addAlbum(album, artist, genre, numSongs, month) {
    if (verifyFields(album, artist, genre, numSongs, month) == true) {
        const tableAlbum = document.getElementById("table-album");
        let numRows = tableAlbum.rows.length;
        let row = tableAlbum.insertRow(numRows);
    
        let cellCode = row.insertCell(0);
        let cellAlbum = row.insertCell(1);
        let cellArtist = row.insertCell(2);
        let cellGenre = row.insertCell(3);
        let cellNumSongs = row.insertCell(4);
        let cellMonth = row.insertCell(5);
    
        cellCode.innerHTML = numRows;
        cellAlbum.innerHTML = album;
        cellArtist.innerHTML = artist;
        cellGenre.innerHTML = genre;
        cellNumSongs.innerHTML = numSongs;
        cellMonth.innerHTML = month;

        document.getElementById("album").value = "";
        document.getElementById("artist").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("numsongs").value = "";
        document.getElementById("month").value = "";
    }
}

function verifyFields(album, artist, genre, numSongs, month) {
    let verify = false;

    if (album == "") {
        alert("Preencha o campo 'Título'!");
    } else if (artist == "") {
        alert("Preencha o campo 'Artista'!");
    } else if (genre == "") {
        alert("Preencha o campo 'Gênero'!");
    } else if (numSongs == "") {
        alert("Preencha o campo 'Faixas'!");
    } else if (month == "") {
        alert("Preencha o campo 'Ouvido em'!");
    } else {
        verify = true;
        console.log("Álbum adicionado!");
    }

    return verify;
}