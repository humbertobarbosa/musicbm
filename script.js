function addAlbum() {
    var album = {
        title: document.getElementById("album").value,
        artist: document.getElementById("artist").value,
        genre: document.getElementById("genre").value,
        numSongs: document.getElementById("numsongs").value,
        month: document.getElementById("month").value
    };

    if (verifyFields(album)) {
        if (verifySameAlbums([album.title, album.artist])) {
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
            cellAlbum.innerHTML = album.title;
            cellArtist.innerHTML = album.artist;
            cellGenre.innerHTML = album.genre;
            cellNumSongs.innerHTML = album.numSongs;
            cellMonth.innerHTML = album.month;

            console.log("Álbum adicionado!");
        }

        resetForm();
    }
}

function verifyFields(album) {
    let verify = false;

    if (album.title == "") {
        fieldError.innerHTML = "Erro: preencha o campo 'Título'!";
        document.getElementById("album").focus();
    } else if (album.artist == "") {
        fieldError.innerHTML = "Erro: preencha o campo 'Artista'!";
        document.getElementById("artist").focus();
    } else if (album.genre == "") {
        fieldError.innerHTML = "Erro: preencha o campo 'Gênero'!";
        document.getElementById("genre").focus();
    } else if (album.numSongs == "") {
        fieldError.innerHTML = "Erro: preencha o campo 'Faixas'!";
        document.getElementById("numsongs").focus();
    } else if (album.month == "") {
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

function resetForm() {
    const formAlbum = document.getElementById("form-album");
    formAlbum.reset();
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