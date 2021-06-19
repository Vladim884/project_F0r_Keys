let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let val_3 = document.getElementById('val_3');
let val3 = document.getElementById('val3');
let val4 = document.getElementById('val4');

let keyword2 = document.getElementById('keyword2');
let keyword3 = document.getElementById('keyword3');
let keyword_3 = document.getElementById('keyword_3');
let keyword4 = document.getElementById('keyword4');
let keyword44 = document.getElementById('keyword44');

let res1 = document.getElementById('res1');
let res2 = document.getElementById('res2');
let res3 = document.getElementById('res3');
let res4 = document.getElementById('res4');
let res5 = document.getElementById('res5');

val1.onclick = function () {
    val1.disabled = true;
    keyword2.value = str2.value.substring(str2.selectionStart, str2.selectionEnd).toLowerCase();
}
val2.onclick = function () {
    keyword3.value = str2.value.substring(str2.selectionStart, str2.selectionEnd).toLowerCase();
    val2.disabled = true;
}
val_3.onclick = function () {
    // str2.value = str2.value.toLowerCase();
    keyword_3.value = str2.value.substring(str2.selectionStart, str2.selectionEnd).toLowerCase();
    val_3.disabled = true;
}
val3.onclick = function () {
    // str2.value = str2.value.toLowerCase();
    keyword4.value = str2.value.substring(str2.selectionStart, str2.selectionEnd).toLowerCase();
    val3.disabled = true;
}
val4.onclick = function () {
    // str2.value = str2.value.toLowerCase();
    keyword44.value = str2.value.substring(str2.selectionStart, str2.selectionEnd).toLowerCase();
    val4.disabled = true;
}

let resetOnClick = function (field, but) {
    field.value = '';
    but.disabled = false;
}

res1.onclick = function () {
    resetOnClick(keyword2, val1);
} 
res2.onclick = function () {
    resetOnClick(keyword3, val2);
}
res3.onclick = function () {
    resetOnClick(keyword_3, val_3);
}

res4.onclick = function () {
    resetOnClick(keyword4, val3);
}
res5.onclick = function () {
    resetOnClick(keyword44, val4);
}
