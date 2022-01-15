function addAlbum(album, artist) {
    var tableAlbum = document.getElementById("table-album");
    var numRows = tableAlbum.rows.length;
    var row = tableAlbum.insertRow(numRows);

    var cellCode = row.insertCell(0);
    var cellAlbum = row.insertCell(1);
    var cellArtist = row.insertCell(2);

    cellCode.innerHTML = numRows;
    cellAlbum.innerHTML = album;
    cellArtist.innerHTML = artist;
}