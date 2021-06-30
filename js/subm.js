var subm = document.getElementById('sub');//button start
let stringIndex;
var displayed_ind = document.getElementById('viewind');
var str_number = document.getElementById('strnumb');
let wrongkey = document.getElementById('wrongkey');// for delete wrong phrases
var allRows = document.getElementsByTagName("tr");//strings arrey
let blocker = document.getElementById("blocker");//page blocker
let string1 = document.getElementById('entertext');
let str1;

subm.onclick = function(){
    stringIndex = displayed_ind.value;//index for first row
    wrongkey.value = 'hyttgfddxcvggbhnn';
    
    if (stringIndex >= allRows.length) {
        blocker.style.display = 'block';
    } 
    tr1 = allRows[stringIndex];//string now
    let row_cells=tr1.getElementsByTagName('td');

    string1.value = delUnnecessarySign(row_cells[1].innerHTML, '(', ')', ',');
    // string1.value = row_cells[1].innerHTML;// position name
    str_number.innerHTML = row_cells[0].innerHTML;//number of string
    str1=string1.value;
    displayed_ind.innerHTML = stringIndex;
    subm.disabled = true;
    paste.onclick();
    // they.onclick();
    // subm1.onclick();
}

let delUnnecessarySign = function(str, sign1, sign2, sign3){// delete sign from word
    let newarr = str.split('');
    for (let j = 0; j < newarr.length; j++) {
        if(newarr[j] === sign1|| newarr[j] === sign2 ||newarr[j] === sign3){
            newarr.splice(j, 1);
        }else{continue}
    }
    str = newarr.join('');
    return str;
}