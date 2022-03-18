function editAlbum() {
    tableContent.addEventListener("click", function(event) {
        if (event.target.classList.contains("action-edit")) {
            resetFieldWarning(fieldWarning);
            resetFieldWarning(fieldWarning2);

            let target = event.target;

            if (target.classList.contains("btn")) {
                var li = target.parentNode;
            } else {
                let btn = target.parentNode;
                var li = btn.parentNode;
            }

            let tdAction = li.parentNode;
            rowAlbumEdit = tdAction.parentNode;

            actionOpenEdit();

            document.getElementById("album").value = rowAlbumEdit.children[1].textContent;
            document.getElementById("artist").value = rowAlbumEdit.children[2].textContent;
            document.getElementById("genre").value = rowAlbumEdit.children[3].textContent;
            document.getElementById("numsongs").value = rowAlbumEdit.children[4].textContent;
            document.getElementById("month").value = rowAlbumEdit.children[5].textContent;

        }
    });
}

function actionOpenEdit() {
    document.getElementsByClassName("modal-title")[0].textContent = "Editar álbum";
    document.getElementById("btn-confirm").textContent = "Atualizar";
    document.getElementById("btn-confirm").className = "btn btn-primary";
    document.getElementById("btn-confirm").setAttribute("onclick", "changeFields()");
}

function changeFields() {
    var albumEdit = {
        title: document.getElementById("album").value,
        artist: document.getElementById("artist").value,
        genre: document.getElementById("genre").value,
        numSongs: document.getElementById("numsongs").value,
        month: document.getElementById("month").value
    };

    if (verifyFields(albumEdit)) {
        let title = rowAlbumEdit.children[1].textContent;
        let artist = rowAlbumEdit.children[2].textContent;
        let ID = rowAlbumEdit.children[0].textContent;

        if (title == albumEdit.title && artist == albumEdit.artist) {
            confirmFields();
        } else if (verifyDuplicateAlbums([albumEdit.title, albumEdit.artist], false)) {
            confirmFields();

            albumList[ID - 1][0] = albumEdit.title;
            albumList[ID - 1][1] = albumEdit.artist;
        } 

        function confirmFields() {
            resetFieldWarning(fieldWarning);

            document.getElementById("btn-confirm").setAttribute("data-bs-dismiss", "modal");
            document.getElementById("btn-confirm").click();

            rowAlbumEdit.children[1].textContent = albumEdit.title;
            rowAlbumEdit.children[2].textContent = albumEdit.artist;
            rowAlbumEdit.children[3].textContent = albumEdit.genre;
            rowAlbumEdit.children[4].textContent = albumEdit.numSongs;
            rowAlbumEdit.children[5].textContent = albumEdit.month;

            colorFieldWarning("blue", fieldWarning2);
            fieldWarning2.innerHTML = "Álbum '" + albumEdit.title + "' editado!";
        }
    }

    document.getElementById("btn-confirm").setAttribute("data-bs-dismiss", "");
}