function removeAlbum() {
    tableContent.addEventListener("click", function(event) {
        if (event.target.classList.contains("action-remove")) {
            let target = event.target;

            if (target.classList.contains("btn")) {
                var li = target.parentNode;
            } else {
                let btn = target.parentNode;
                var li = btn.parentNode;
            }

            let tdAction = li.parentNode;
            let rowAlbum = tdAction.parentNode;

            let deletedTitle = rowAlbum.children[1].textContent;
            let deletedArtist = rowAlbum.children[2].textContent;

            let counter = -1;

            albumList.forEach(function(a) {
                counter++;
                if (compareLists(a, [deletedTitle, deletedArtist])) {
                    albumList.splice(counter, 1);
                    return;
                }
            });
                
            rowAlbum.classList.add("fade-out");
            
            setTimeout(function() {
                rowAlbum.remove();
                updateCode();

                hideButton(document.getElementById("input-filter"));
                
                colorFieldWarning("gray", fieldWarning2);
                fieldWarning2.innerHTML = "Álbum '" + deletedTitle + "' removido!";
            }, 500);
        }
    })
}

function updateCode() {
    let code = document.getElementsByClassName("code");
    
    for (let i = 0; i < code.length; i++) {
        code[i].innerHTML = i + 1;
    }
}
