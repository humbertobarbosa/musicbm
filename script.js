function addAlbum(album, artist, genre, numSongs, month) {
    if (verifyFields(album, artist, genre, numSongs, month)) {
        if (verifySameAlbums([album, artist])) {
            fieldError.innerHTML = "";

            const tableContent = document.getElementById("table-content");
            let numRows = tableContent.rows.length;
            let row = tableContent.insertRow(numRows);
            
            let cellCode = row.insertCell(0);
            let cellAlbum = row.insertCell(1);
            let cellArtist = row.insertCell(2);
            let cellGenre = row.insertCell(3);
            let cellNumSongs = row.insertCell(4);
            let cellMonth = row.insertCell(5);
        
            cellCode.innerHTML = numRows + 1;
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
        fieldError.innerHTML = "Erro: preencha o campo 'Título'!";
        document.getElementById("album").focus();
    } else if (artist == "") {
        fieldError.innerHTML = "Erro: preencha o campo 'Artista'!";
        document.getElementById("artist").focus();
    } else if (genre == "") {
        fieldError.innerHTML = "Erro: preencha o campo 'Gênero'!";
        document.getElementById("genre").focus();
    } else if (numSongs == "") {
        fieldError.innerHTML = "Erro: preencha o campo 'Faixas'!";
        document.getElementById("numsongs").focus();
    } else if (month == "") {
        fieldError.innerHTML = "Erro: preencha o campo 'Ouvido em'!";
        document.getElementById("month").focus();
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
            fieldError.innerHTML = "Erro: este álbum já foi adicionado!";
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
var fieldError = document.getElementById("field-error");

triggerIndexCol();