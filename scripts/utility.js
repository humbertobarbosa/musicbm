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

function colorFieldWarning(color, alert) {
    alert.classList.add("alert-danger", "alert-success", "alert-secondary");

    if (color.toLowerCase() == "red") {
        alert.classList.remove("alert-success", "alert-secondary");
    } else if (color.toLowerCase() == "green") {
        alert.classList.remove("alert-danger", "alert-secondary");
    } else if (color.toLowerCase() == "gray") {
        alert.classList.remove("alert-danger", "alert-success");
    }
}

function resetFieldWarning(alert) {
    alert.innerHTML = "";
    alert.className = "alert";
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
var fieldWarning2 = document.getElementById("field-warning-2");

triggerIndexCol();
