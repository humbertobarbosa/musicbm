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
                updateCode();
                hideButton(document.getElementById("btn-remove"));
                hideButton(document.getElementById("input-filter"));
            }, 500);

            colorFieldWarning("gray");
            fieldWarning.innerHTML = "Álbum '" + deletedTitle + "' removido!";

            verifyBool = false;
        }
    }); 
}  

function updateCode() {
    let code = document.getElementsByClassName("code");
    
    for (let i = 0; i < code.length; i++) {
        code[i].innerHTML = i + 1;
    }
}
