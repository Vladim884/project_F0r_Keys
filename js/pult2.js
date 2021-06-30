let str_2 = document.getElementById('entertext2');

let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let val_3 = document.getElementById('val_3');
let val3 = document.getElementById('val3');
let val4 = document.getElementById('val4');
let addbring2 = document.getElementById('bring2');
let delet1 = document.getElementById('delet1');
let delet2 = document.getElementById('delet2');
let swap1 = document.getElementById('swap1');
let swap2 = document.getElementById('swap2');
let mult = document.getElementById('mult');


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
    //str.substr(str.selectionStart, 1);
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

addbring2.onclick = () => {
    let fstr2 = str2.value.substr(0, str2.selectionStart); 
    let lstr2 = str2.value.substr(str2.selectionStart, str2.length);
    str2.value=fstr2.trim()+'&nbsp;'+lstr2.trim();
   
}
delet1.onclick = ()=>{
    // let subs = str2.value.substr(str2.selectionStart, str2.selectionEnd);
    // str2.value = str2.value.replace(subs, '');
    let fstr2 = string1.value.substr(0, string1.selectionStart); 
    let lstr2 = string1.value.substr(string1.selectionEnd, str2.length);
    string1.value=fstr2.trim()+' '+lstr2.trim();
}
delet2.onclick = ()=>{
    // let subs = str2.value.substr(str2.selectionStart, str2.selectionEnd);
    // str2.value = str2.value.replace(subs, '');
    let fstr2 = str2.value.substr(0, str2.selectionStart); 
    let lstr2 = str2.value.substr(str2.selectionEnd, str2.length);
    str2.value=fstr2.trim()+' '+lstr2.trim();
}
swap1.onclick = () => {
    let subs = string1.value.substring(string1.selectionStart, string1.selectionEnd);
    subs = subs.trim();
    let arrsubs = subs.split(' ');
    let x = arrsubs[0];
    arrsubs[0] = arrsubs[arrsubs.length - 1];
    arrsubs[arrsubs.length - 1] = x;
    subs = arrsubs.join(' ');
    let strstart = string1.value.substring(0, string1.selectionStart);
    strstart = strstart.trim();
    let strend = string1.value.substring(string1.selectionEnd, string1.value.length);
    strend = strend.trim();

    string1.value = strstart + ' ' + subs + ' ' + strend;
    string1.value = string1.value.trim();
}
swap2.onclick = () => {
    let subs = str2.value.substring(str2.selectionStart, str2.selectionEnd);
    subs = subs.trim();
    let arrsubs = subs.split(' ');
    let x = arrsubs[0];
    arrsubs[0] = arrsubs[arrsubs.length - 1];
    arrsubs[arrsubs.length - 1] = x;
    subs = arrsubs.join(' ');
    let strstart = str2.value.substring(0, str2.selectionStart);
    strstart = strstart.trim();
    let strend = str2.value.substring(str2.selectionEnd, str2.value.length);
    strend = strend.trim();

    str2.value = strstart + ' ' + subs + ' ' + strend;
    str2.value = str2.value.trim();
}

let changeWhiteSpase = function() {
    let subs = string1.value.substring(string1.selectionStart, string1.selectionEnd);
    subs = subs.split(' ').join('&nbsp;');
    string1.value = string1.value.substring(0, string1.selectionStart) + 
    subs +
    string1.value.substring(string1.selectionEnd, string1.length);
}
mult.onclick = () => {
    changeWhiteSpase();
}
