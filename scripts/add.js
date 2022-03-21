function addAlbum() {
    var album = {
        title: document.getElementById("album").value,
        artist: document.getElementById("artist").value,
        genre: document.getElementById("genre").value,
        numSongs: document.getElementById("numsongs").value,
        month: document.getElementById("month").value
    };

    if (verifyFields(album)) {
        if (verifyDuplicateAlbums([album.title, album.artist], true)) {
            fieldWarning.innerHTML = "";

            let numRows = tableContent.rows.length;
            let row = tableContent.insertRow(numRows);
            row.classList.add("row-album");

            showButton(document.getElementById("input-filter"));
            
            let cellCode = row.insertCell(0);
            let cellAlbum = row.insertCell(1);
            let cellArtist = row.insertCell(2);
            let cellGenre = row.insertCell(3);
            let cellNumSongs = row.insertCell(4);
            let cellMonth = row.insertCell(5);
            let cellActions = row.insertCell(6);

            cellCode.classList.add("code");
        
            cellCode.innerHTML = numRows + 1;
            cellAlbum.innerHTML = album.title;
            cellArtist.innerHTML = album.artist;
            cellGenre.innerHTML = album.genre;
            cellNumSongs.innerHTML = album.numSongs;
            cellMonth.innerHTML = album.month;
            cellActions.innerHTML = `
                <li class="list-inline-item">
                    <button class="action-edit btn-action btn btn-primary btn-sm rounded-2" type="button" data-bs-toggle="modal" data-bs-target="#modal-add-album"><i class="action-edit fa fa-edit"></i></button>
                </li>
                <li class="list-inline-item">
                    <button class="action-remove btn-action btn btn-danger btn-sm rounded-2" type="button" data-bs-toggle="modal" data-bs-target="#modal-remove"><i class="action-remove fa fa-trash"></i></button>
                </li>
            `;

            colorFieldWarning("green", fieldWarning);
            fieldWarning.innerHTML = "Álbum '" + album.title + "' adicionado!";
        }

        resetForm();
        removeAlbum();
        editAlbum();
    }
}

function verifyFields(album) {
    let verify = false;

    colorFieldWarning("red", fieldWarning);

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
    } else if (album.numSongs < 1) {
        fieldWarning.innerHTML = "Erro: o número de faixas deve ser positivo!"
        document.getElementById("numsongs").focus();
    } else if (album.month == "") {
        fieldWarning.innerHTML = "Erro: preencha o campo 'Ouvido em'!";
        document.getElementById("month").focus();
    } else {
        verify = true;
    }

    return verify;
}

function verifyDuplicateAlbums(row, push) {
    let verify = true;

    albumList.forEach(function(a) {
        if (compareLists(a, row)) {
            verify = false;
            colorFieldWarning("red", fieldWarning);
            fieldWarning.innerHTML = "Erro: este álbum já foi adicionado!";
        }
    });

    if (verify == true && push == true) {
        albumList.push(row);
    }

    return verify;
}

function resetForm() {
    const formAlbum = document.getElementById("form-album");
    formAlbum.reset();
}

function actionOpenForm() {
    document.getElementsByClassName("modal-title")[0].textContent = "Adicionar álbuns";
    document.getElementById("btn-confirm").textContent = "Adicionar";
    document.getElementById("btn-confirm").className = "btn btn-purple-reverse";
    document.getElementById("btn-confirm").setAttribute("onclick", "addAlbum()");

    let openForm = document.getElementById("open-form");

    openForm.addEventListener("click", function() {
        resetFieldWarning(fieldWarning);
        resetFieldWarning(fieldWarning2);
        resetForm();
    })
}