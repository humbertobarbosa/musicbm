function filterAlbum() {
    let filter = document.getElementById("filter");
    
    filter.addEventListener("input", function() {
        let albums = document.getElementsByClassName("row-album");
        
        for (let i = 0; i < albums.length; i++) {
            let tdAlbum = albums[i].children[1].textContent;
            let tdArtist = albums[i].children[2].textContent;
            let tdGenre = albums[i].children[3].textContent;
            let exp = new RegExp(filter.value, "i");
            
            if (!exp.test(tdAlbum) && !exp.test(tdArtist) && !exp.test(tdGenre)) {
                albums[i].classList.add("display-none");
            } else {
                albums[i].classList.remove("display-none");
            }
            
            if (filter.value == "") {
                albums[i].classList.remove("display-none");
            }
        }
    })
}

filterAlbum();
