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

let deng = document.getElementById('deng');

let butval2OnClick = function (bval, bres, ftext, blockdang) {
    bval.disabled = true;
    bres.disabled = false;
    let newval = str2.value.substring(str2.selectionStart, str2.selectionEnd);
    newval = newval.trim();
    let newvalarr = newval.split(' ');
    if (newvalarr.length < 2 || newvalarr.length>2) {
        ftext.value = 'DANGER!!!';
        ftext.classList.add("danger");
        blockdang.classList.remove('hidden');
        return
    }
    ftext.value = newval;
    ftext.value = ftext.value.toLowerCase();
    ftext.value = ftext.value.trim();
    
}
let butval3OnClick = function (bval, bres, ftext, blockdang) {
    bval.disabled = true;
    bres.disabled = false;
    let newval = str2.value.substring(str2.selectionStart, str2.selectionEnd);
    newval = newval.trim();
    let newvalarr = newval.split(' ');
    if (newvalarr.length < 3 || newvalarr.length>3) {
        ftext.value = 'DANGER!!!';
        ftext.classList.add("danger");
        blockdang.classList.remove('hidden');
        return
    }
    ftext.value = newval;
    ftext.value = ftext.value.toLowerCase();
    ftext.value = ftext.value.trim();
}

val1.onclick = function () {
    butval2OnClick(val1, res1, keyword2, deng);
}
val2.onclick = function () {
    butval2OnClick(val2, res2, keyword3, deng);
}
val_3.onclick = function () {
    butval2OnClick(val_3, res3, keyword_3, deng);
}
val3.onclick = function () {
    butval3OnClick(val3, res4, keyword4, deng);
}
val4.onclick = function () {
    butval3OnClick(val4, res5, keyword44, deng);
}

    // keyword4.value = str2.value.substring(str2.selectionStart, str2.selectionEnd);
    // keyword4.value = keyword4.value.toLowerCase();
    // keyword4.value = keyword4.value.trim();
    // val3.disabled = true;
// }
// val4.onclick = function () {
    // str2.value = str2.value.toLowerCase();
//     keyword44.value = str2.value.substring(str2.selectionStart, str2.selectionEnd);
//     keyword44.value = keyword44.value.toLowerCase();
//     keyword44.value = keyword44.value.trim();
//     val4.disabled = true;
// }

let resetOnClick = (field, butN, resN, blockdeng) => {
    field.value = '';
    butN.disabled = false;
    // butN.classList.remove("danger");
    field.classList.remove("danger");
    resN.disabled = true;
    blockdeng.classList.add('hidden');
}

res1.onclick = function () {
    resetOnClick(keyword2, val1, res1, deng);
} 
res2.onclick = function () {
    resetOnClick(keyword3, val2, res2, deng);
}
res3.onclick = function () {
    resetOnClick(keyword_3, val_3, res3, deng);
    // resetOnClick(keyword_3, val_3);
}

res4.onclick = function () {
    resetOnClick(keyword4, val3, res4, deng);
}
res5.onclick = function () {
    resetOnClick(keyword44, val4, res5, deng);
}
