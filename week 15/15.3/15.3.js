let elem = document.querySelector(".container")

design_select.onchange = function() {
    let variantDesighn = document.querySelector('#design_select').value;
    switch(variantDesighn) {
        case "white":
            clearClasses();
            elem.classList.add("white");
        break;
        case "blue":
            clearClasses();
            elem.classList.add("blue");
        break;
        case "dark":
            clearClasses();
            elem.classList.add("dark");
        break;
    }
}

function clearClasses() {

    if  (elem.classList.contains ("blue")) {
        elem.classList.remove ("blue");}
    if  (elem.classList.contains ("dark")) {
        elem.classList.remove ("dark");}
    if  (elem.classList.contains ("white")) {
        elem.classList.remove ("white");}
}

  