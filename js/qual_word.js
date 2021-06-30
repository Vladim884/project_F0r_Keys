let qual_word = 'тренд 2021';

// let m = document.getElementById('m');
// let w = document.getElementById('w');
// let it = document.getElementById('it');
// let they1 = document.getElementById('they1');
let they1 = document.getElementById('they1');
let they2 = document.getElementById('they2');

// m.onclick = function () {
//     // qual_word = 'отзывы';
//     let ar_str2 = str2.value.split(' ');
//     // ar_str2[4] = qual_word;
//     ar_str2.splice(4, 0, qual_word);
//     str2.value = ar_str2.join(' ');
//     let ar_string1 = string1.value.split(' ');
//     ar_string1.splice(3, 0, qual_word);
//     string1.value = ar_string1.join(' ');
//     // m.disabled = true;
// }
// w.onclick = function () {
//     // qual_word = 'качественная';
//     let ar_str2 = str2.value.split(' ');
//     // ar_str2[4] = qual_word;
//     ar_str2.splice(4, 0, qual_word);
//     str2.value = ar_str2.join(' ');
//     let ar_string1 = string1.value.split(' ');
//     ar_string1.splice(3, 0, qual_word);
//     string1.value = ar_string1.join(' ');
//     // w.disabled = true;
// }
// it.onclick = function () {
//     // qual_word = 'качественное';
//     let ar_str2 = str2.value.split(' ');
//     // ar_str2[4] = qual_word;
//     ar_str2.splice(4, 0, qual_word);
//     str2.value = ar_str2.join(' ');
//     let ar_string1 = string1.value.split(' ');
//     ar_string1.splice(3, 0, qual_word);
//     string1.value = ar_string1.join(' ');
//     // it.disabled = true;
// }
they1.onclick = () => {
    let strstart = string1.value.substring(0, string1.selectionStart);
    strstart = strstart.trim();
    let strend = string1.value.substring(string1.selectionEnd, string1.value.length);
    strend = strend.trim();
    string1.value = strstart + ' ' + qual_word + ' ' + strend;
    string1.value = string1.value.trim();
}
they2.onclick = () => {
    let strstart = str2.value.substring(0, str2.selectionStart);
    strstart = strstart.trim();
    let strend = str2.value.substring(str2.selectionEnd, str2.value.length);
    strend = strend.trim();
    str2.value = strstart + ' ' + qual_word + ' ' + strend;
    str2.value = str2.value.trim();
}



    