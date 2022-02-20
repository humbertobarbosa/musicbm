function addAlbum(album, artist) {
    if (verifyFields(album, artist) == true) {
        const tableAlbum = document.getElementById("table-album");
        let numRows = tableAlbum.rows.length;
        let row = tableAlbum.insertRow(numRows);
    
        let cellCode = row.insertCell(0);
        let cellAlbum = row.insertCell(1);
        let cellArtist = row.insertCell(2);
    
        cellCode.innerHTML = numRows;
        cellAlbum.innerHTML = album;
        cellArtist.innerHTML = artist;

        document.getElementById("album").value = "";
        document.getElementById("artist").value = "";
    }
}

function verifyFields(album, artist) {
    let verify = false;

    if (album == "") {
        alert("Preencha o campo 'Título'!");
    } else if (artist == "") {
        alert("Preencha o campo 'Artista'!");
    } else {
        verify = true;
    }

    return verify;
}