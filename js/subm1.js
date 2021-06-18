var subm1 = document.getElementById('sub1');//button start

let textres1 = document.getElementById('resulttext1');// textarea data
let arr1 = [];
let arr11 = [];
let textsale;

subm1.onclick = function(){
    // document.getElementById('entertext');
    // str1=string1.value;
    let newstr1 = str1.replace(/,/gi, '');
    str1 = newstr1.replace(/[\n\r]/g, '')//remove line break

    newstr1 = str1.trim();
    newstr11 = str2.value.trim();
    var arrey1 = newstr1.split(" ");
    var arrey11 = newstr11.split(" ");
    console.log(arrey1);
  
getTwoWords(arrey1, arr1);
// getTwoWords(arrey11, arr11);
// console.log(arr11);
arr1.length = 15;
// arr11.length = 8;
// console.log(typeof(arr1.join(', ')));
// textres1.value = arr1.concat(arr11);
textres1.value = arr1;
let string1 = textres1.value.replace(/,/g, ", ");
// textres1.value = string1;
// keyword2.focus();
tr1 = allRows[stringIndex];//string now
cells_row=tr1.getElementsByTagName('td');
if(cells_row[3].innerHTML === '<br>'){
    cells_row[3].innerHTML = '';
}
if(cells_row[2].innerHTML === '<br>'){
    cells_row[2].innerHTML = '';
}
// arrey1.splice(arrey1.length-1, 1);
newstr1 = arrey1.join(' ');
textsale = ', '+ newstr1 +', ' 
+ cells_row[1].innerHTML + ', '
+ cells_row[3].innerHTML + ', '
+ cells_row[3].innerHTML + ' 2021, ' 
+ cells_row[3].innerHTML + ' пром, '
+ cells_row[3].innerHTML + ' Украина, '
// + cells_row[3].innerHTML  + ' ' + qual_word + ', ' 
// + qual_word + ' ' +  cells_row[3].innerHTML + ', '
//  + cells_row[2].innerHTML + ' ' + qual_word + ', '
// + qual_word + ' ' + cells_row[2].innerHTML + ', '
// + arrey1[0] + ' ' + arrey1[1] + ' ' + qual_word + ', '
// + qual_word + ' ' + arrey1[0] + ' ' + arrey1[1] + ', '
 + arrey1[0] + ' ' + arrey1[1] + ' 2021, '
+ arrey1[1] + ' ' + arrey1[0] + ' 2021, ';


textres1.value = string1 + textsale;
subm2.onclick();
subm3.onclick();
subm4.onclick();
// subm5.onclick();
m.disabled = false;
};

let getTwoWords = function (arrey, arr_1) {
    for (let j=1; j < arrey.length; j++){
        // for (let index = j + 1; index < arrey.length; index++) {
        //     arr_1.push(arrey[j] + ' ' + arrey[index]);
        // }
        arr_1.push(arrey[0] + ' ' + arrey[j]);
        arr_1.push(arrey[j] + ' ' + arrey[0])
    }
    // arr1.length = 11;
}