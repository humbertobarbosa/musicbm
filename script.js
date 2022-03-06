function addAlbum(album, artist, genre, numSongs, month) {
    if (verifyFields(album, artist, genre, numSongs, month)) {
        if (verifySameAlbums([album, artist])) {
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

            console.log("Álbum adicionado!");
        }

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
    }

    return verify;
}

function verifySameAlbums(row) {
    let verify = true;

    albumList.forEach(function(a) {
        if (compareLists(a, row)) {
            verify = false;
            alert("Ops! Este álbum já foi adicionado!");
        }
    });

    if (verify == true) {
        albumList.push(row);
    }

    return verify;
}

function compareLists(l, m) {
    let counter = 0;

    for (let i = 0; i < l.length; i++) {
        if (l[i] == m[i]) {
            counter++;
        }
    }

    if (counter == l.length) {
        return true;
    } else {
        return false;
    }
}

function triggerIndexCol() {
    const colAdd = document.querySelector("#col-add");
    const colList = document.querySelector("#col-list");
    const colStats = document.querySelector("#col-stats");

    redirectPage(colAdd, "new.html");
    redirectPage(colList, "new.html");
    redirectPage(colStats, "#");
}

function redirectPage(col, page) {
    if (col) {
        col.addEventListener("click", function() {
            window.location.href = page;
        });
    }
}

var albumList = [];

triggerIndexCol();