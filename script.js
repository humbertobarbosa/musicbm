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
            fieldWarning.innerHTML = "";

            let numRows = tableContent.rows.length;
            let row = tableContent.insertRow(numRows);
            row.classList.add("row-album");

            showButton(document.getElementById("btn-remove"));
            
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

function verifySameAlbums(row) {
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

function colorFieldWarning(color) {
    fieldWarning.classList.add("alert-danger", "alert-success", "alert-secondary");

    if (color.toLowerCase() == "red") {
        fieldWarning.classList.remove("alert-success", "alert-secondary");
    } else if (color.toLowerCase() == "green") {
        fieldWarning.classList.remove("alert-danger", "alert-secondary");
    } else if (color.toLowerCase() == "gray") {
        fieldWarning.classList.remove("alert-danger", "alert-success");
    }
}

function resetForm() {
    const formAlbum = document.getElementById("form-album");
    formAlbum.reset();
}

function showButton(btn) {     
    if (btn.classList.contains("display-none")) {
        btn.classList.remove("display-none");
    }
}

function hideButton(btn) {
    if (albumList.length == 0) {
        btn.classList.add("display-none");
    }
}

function removeAlbum() {
    verifyBool = true;

    tableContent.addEventListener("click", function(event) {
        if (verifyBool) {
            let tdAlbum = event.target;
            let trAlbum = tdAlbum.parentNode;

            let deletedTitle = trAlbum.children[1].textContent;
            let deletedArtist = trAlbum.children[2].textContent;

            let counter = -1;

            albumList.forEach(function(a) {
                counter++;
                if (compareLists(a, [deletedTitle, deletedArtist])) {
                    albumList.splice(counter, 1);
                    return;
                }
            });

            trAlbum.classList.add("fade-out");
            
            setTimeout(function() {
                trAlbum.remove();
                hideButton(document.getElementById("btn-remove"));
            }, 500);

            colorFieldWarning("gray");
            fieldWarning.innerHTML = "Álbum '" + deletedTitle + "' removido!";

            verifyBool = false;
        }
    }); 
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
var tableContent = document.getElementById("table-content");
var fieldWarning = document.getElementById("field-warning");

triggerIndexCol();
