function insertar(num) {
    document.pant.textview.value == "0" ? document.pant.textview.value = num: document.pant.textview.value += num;
}

function limpiar() {
    document.pant.textview.value = "0";
}

function borrar() {
    var actual = document.pant.textview.value
    document.pant.textview.value = actual.substring(0, actual.length-1) ;
}

function igual() {
    var actual = document.pant.textview.value;
    actual ? document.pant.textview.value = eval(actual): null;
}

function aunNo() {
    alert("Esta funcionalidad aun no ha sido agregada.");
}