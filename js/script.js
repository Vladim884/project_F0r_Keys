var uniq; // for arrey without duplicates
// var displayed_ind = document.getElementById('viewind');
// let arr1 = [];
let arr2 = [];
let arr22 = [];
let arr23 = [];
let arr3 = [];
let arr33 = [];
let keys = [];
let keys_finish = [];
let fullText = '';
let i = 0;
let arfromstr;

// let string1 = document.getElementById('entertext');
// let str1;
let str2 = document.getElementById('entertext2');
// let str3 = document.getElementById('entertext3');
let dellast1 = document.getElementById('dellast1');
let copy = document.getElementById('copy');
let paste = document.getElementById('paste');
let replace = document.getElementById('replace');
let delfirst = document.getElementById('delfirst');
let delsecond = document.getElementById('delsecond');
let delthird = document.getElementById('delthird');
let dellast = document.getElementById('dellast');
let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');


// var subm = document.getElementById('sub');//button start
// var subm1 = document.getElementById('sub1');//button start
var subm2 = document.getElementById('sub2');//button start
var subm3 = document.getElementById('sub3');//button start
var subm5 = document.getElementById('sub5');//button start
var scroll_top = document.getElementById('scrolltop');//scroll top
var save_exel = document.getElementById('saveexel');//button save exele file

// let wrongkey = document.getElementById('wrongkey');// for delete wrong phrases
let keyword2 = document.getElementById('keyword2');
let keyword3 = document.getElementById('keyword3');

// let textres1 = document.getElementById('resulttext1');// textarea data
let textres2 = document.getElementById('resulttext2');// textarea data
let textres3 = document.getElementById('resulttext3');// textarea data

let wind = document.getElementById('wind');//container for span
// let stringIndex;//index for first row
var table1 = document.getElementById("tableId");
// var allRows = document.getElementsByTagName("tr");//strings arrey
let tr1;
let cells_row;

// let blocker = document.getElementById("blocker");//page blocker

save_exel.onclick = function () {
    tableToExcel('tableId','Загрузочный_файл', 'Ключевые_запросы.xls');
}
window.addEventListener('scroll', trackScroll);
scroll_top.addEventListener('click', backToTop); 

// copy.onclick = function () {
//     string1.select();// Select the text field
//   document.execCommand("copy");//Copy the text inside the text field
//   copy.classList.add('hidden');
//   paste.classList.remove('hidden');
// }

paste.onclick = function () {
    str2.value = string1.value;
    // copy.classList.remove('hidden');
    // paste.classList.add('hidden');
}
replace.onclick = function name() {
    arfromstr = str2.value.split(' ');
    let remember = arfromstr[0];
    arfromstr[0] = arfromstr[1];
    arfromstr[1] = remember;
    str2.value = arfromstr.join(' ');
}
val1.onclick = function () {
    keyword2.value = str2.value;
}
val2.onclick = function () {
    keyword3.value = str2.value;
}



delfirst.onclick = function () {
    let arfromstr = str2.value.split(' ');
    arfromstr.splice(0, 1);
    str2.value = arfromstr.join(' ');
    subm1.disabled = false;
}
delsecond.onclick = function () {
    let arfromstr = str2.value.split(' ');
    arfromstr.splice(1, 1);
    str2.value = arfromstr.join(' ');
    subm1.disabled = false;
}
delthird.onclick = function () {
    let arfromstr = str2.value.split(' ');
    arfromstr.splice(2, 1);
    str2.value = arfromstr.join(' ');
    subm1.disabled = false;
}
dellast.onclick = function () {
    let arfromstr = str2.value.split(' ');
    let lastelnum = arfromstr.length-1;
    arfromstr.splice(lastelnum, 1);
    str2.value = arfromstr.join(' ');
    subm1.disabled = false;
}
dellast1.onclick = function () {
    let arfromstr = string1.value.split(' ');
    let lastelnum = arfromstr.length-1;
    arfromstr.splice(lastelnum, 1);
    string1.value = arfromstr.join(' ');
    subm1.disabled = false;
}



  
// subm.onclick = function(){
//     stringIndex = displayed_ind.value;//index for first row
//     wrongkey.value = 'hyttgfddxcvggbhnn';

//     if (stringIndex >= allRows.length) {
//         blocker.style.display = 'block';
//     } 
//     tr1 = allRows[stringIndex];//string now
//     let row_cells=tr1.getElementsByTagName('td');
//     // firstElementChild
//     string1.value = row_cells[1].innerHTML.trim();// position name
//     str1=string1.value;
//     displayed_ind.innerHTML = stringIndex;
// }

// subm1.onclick = function(){
//     let newstr1 = str1.replace(/,/gi, '');
//     newstr1 = str1.replace(/[\n\r]/g, '')//remove line break

//     newstr1 = newstr1.trim();
//     var arrey1 = newstr1.split(" ");
  
// getTwoWords(arrey1);
// // console.log(arr1);
// arr1.length = 20;
// textres1.value = arr1;
// let string1 = textres1.value.replace(/,/g, ", ");
// textres1.value = string1;
// // keyword2.focus();
// };

// subm2.onclick = function(){
//     var str2 = getElVal('entertext'); 
//     var str22 = getElVal('entertext2');
    
//     let newstr2 = str2.replace(/,/gi, '');
//     newstr2 = str2.replace(/[\n\r]/g, '')//remove line break

//     let newstr22 = str22.replace(/,/gi, '');
//     newstr22 = str22.replace(/[\n\r]/g, '')//remove line break

//     newstr2 = newstr2.trim();
//     newstr22 = newstr22.trim();
//     var arrey2 = newstr2.split(" ");
//     var arrey22 = newstr22.split(" ");
//     // var arrey22 = [];
//     // for (let i = 0; i < arrey2.length; i++) {
//     //     if(i!=0)arrey22.push(arrey2[i]);
        
//     // }
//     console.log(arrey22);
// getThreeWords(arrey2, arr2);
// getThreeWords(arrey22, arr22);
// if(arr22.length != 0){
//     arr2.length = 8;
//     arr22.length = 8;
// } else {
//     arr2.length = 15;
// }
// arr23 = arr2.concat(arr22);

// keyword2.value = keyword2.value.trim();//removing the first and last space
// textres2.value = filterItems(keyword2.value, arr23);//filtering arr2 by the entered word in the input
// let textar2 = textres2.value.replace(/,/g, ", ");
// textres2.value = textar2;
// // keyword3.focus();
// };

// subm3.onclick = function(){
//     var str3 = getElVal('entertext');
//     var str33 = getElVal('entertext2');
//     let newstr3 = str3.replace(/,/gi, '');
//     newstr3 = str3.replace(/[\n\r]/g, '')

//     let newstr33 = str33.replace(/,/gi, '');
//     newstr3 = newstr3.trim();
//     newstr33 = newstr33.trim();
//     var arrey3 = newstr3.split(" ");
//     var arrey33 = newstr33.split(" ");
//     // arrey3.length = 30;
// getFourWords(arrey3, arr3);
// getFourWords(arrey33, arr33);
// if(arr33.length != 0){
//     arr3.length = 5;
//     arr33.length = 5;
// } else {
//     arr3.length = 10;
// }
// arr34 = arr3.concat(arr33);
//     textres3.value = arr34;
//     keyword3.value = keyword3.value.trim();//removing the first and last space
//     textres3.value = filterItems(keyword3.value, arr34);//filtering key phrases by the entered word

//     let textar3 = textres3.value.replace(/,/g, ", ");
//     textres3.value = textar3;
// };
// subm4.onclick = function(){
//     tr1 = allRows[stringIndex];//string now
//     console.log(allRows[stringIndex]);
//     cells_row=tr1.getElementsByTagName('td');
//     console.log(cells_row);
//     // firstElementChild
//     old = cells_row[2].innerHTML;//
//     oldkeys = old.replace(/,/g, ', ');
//     console.log(old);
//     textres4.value = GetFullText(fullText,  oldkeys + ', ', textres1.value +', ', textres2.value +', ', textres3.value);
    

//     let res_arrey = textres4.value.split(", ");
//     console.log(res_arrey);
//     res_arrey = res_arrey.filter(function(entry) { return entry.trim() != ''; });
//     console.log(res_arrey);
//     //=======
//     for (let i = 0; i < res_arrey.length; i++) {//Removing key phrases with a wrong word
//         let smallar = res_arrey[i].split(' ');
//         for (let j = 0; j < smallar.length; j++) {
//             if(smallar[j] === wrongkey.value 
//                 || (smallar[j] === 'с' && j === 0) 
//                 || (smallar[j] === 'с' && j === smallar.length-1)) {
//                 res_arrey.splice(i, 1);
//                 console.log(res_arrey);
//                 if(i===0){i}else{i--}
//                 break;
//             }
            
//         }
//     }
//     console.log(res_arrey);


//     //===
//     uniq = res_arrey.reduce(function(a,b){
//         if (a.indexOf(b) < 0 ) a.push(b);
//         return a;
//     },[]);
//     console.log(uniq); // delete duplicates
//     //====

//     for (let index = 0; index < uniq.length; index++) {
//         let str = "<span id=" + "i"+index + " class=" + "green" +">" + uniq[index] + "</span>";
//         wind.innerHTML += str;
//     }
//     keys = wind.querySelectorAll('.green');
//     console.log(typeof(keys));
//     // keys.splice(0, 1);
//     for (let i = 0; i < keys.length; i++) {// delete green span
//         keys[i].addEventListener('click', function () {
//             wind.removeChild(this);
//         });
//     }
    
// }

// subm5.onclick = function () {
//     console.log(keys_finish);
//     cells_row[2].innerHTML = '';
//     keys = wind.querySelectorAll('.green');
//     for (let i = 0; i < keys.length; i++) {
//         keys_finish.push(keys[i].innerHTML);
//     };
//     console.log(keys_finish);
//     //==
//     // var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

    
//     //==
//     cells_row[2].innerHTML = keys_finish;
//     console.log(tr1);

//     wind.innerHTML = '';
//     keys_finish = [];
    

//     console.log(keys_finish);
//     keyword2.value = '';
//     keyword3.value = '';
//     textres2.value = '';
//     textres3.value = '';
//     textres4.value = '';
//     textres1.value = '';
//     string1.value = '';
//     str2.value = '';
//     wrongkey.value = '';
//     if (stringIndex < allRows.length) {
//         stringIndex++;
//         displayed_ind.value = stringIndex;
//         console.log(displayed_ind);
//     }  else {
//         blocker.style.display = 'block';
//     } 
//     console.log(stringIndex);
//     arr1 = [];
//     arr2 = [];
//     arr22 = [];
//     arr3 = [];  
//     arr33 = [];
// }
    
  
     
  


//==================================================================

//Поле "Пошукові запити" не може бути довжиною більше 1024 символів і буде обрізано'

// ar1 = arr1.concat(arr2, arr3);
// console.log(ar1);

let  getElVal = function(elId) {//get elem value
    let el_value = document.getElementById(elId).value;
    return el_value;
} 


let getThreeWords = function (arrey, arr_){
    for (let i=0; i<arrey.length; i++){
        for (let j=i+1; j<arrey.length; j++){
            for (let index = j + 1; index < arrey.length; index++) {
                arr_.push(arrey[i] + ' ' + arrey[j] + ' ' + arrey[index]);
            }
        }
     }
    //  arr2.length = 12;
}

let getFourWords = function (arrey, arr_) {
    for (let i=0; i<arrey.length; i++){
        for (let j=i+1; j<arrey.length; j++){
            for (let index = j + 1; index < arrey.length; index++) {
                for (let ind = index + 1 + 1; ind < arrey.length; ind++) {
                    arr_.push(arrey[i] + ' ' + arrey[j] + ' ' + arrey[index] + ' ' + arrey[ind]);
                }
            }
        }
     }
    //  arr3.length = 12;
}

let GetFullText = function (res, val1, val2, val3, val4) {
    res = val1 + val2 + val3 + val4;
    console.log(res);
    return res;
}


function shuffle(ar) {// random for array el
	let result = [];
	
	while (ar.length > 0) {
		let random = getRandomInt(0, ar.length - 1);
		let elem = ar.splice(random, 1)[0];
		result.push(elem);
	}
	
	return result;
}


function filterItems(query, myarrey) {
    return myarrey.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//saving new datakeys for positions goods:
var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { 	    	 
        return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) 
    }
    , downloadURI = function(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
    }

    return function(table, name, fileName) {
        if (!table.nodeType) table = document.getElementById(table);
            var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
        var resuri = uri + base64(format(template, ctx))
        downloadURI(resuri, fileName);
    }
})();  
//=========================
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  const phraseReplace = (arr, myphrase) => {// replace 1 word with a two-word phrase
    let newarr=[];
    let phr;
        for (let i = 0; i < arr.length; i++) {
            let ar_phrase = myphrase.split(' ');
            let phr = arr[i].split(' ');
            for (let j = 0; j < phr.length; j++) {
                if(ar_phrase[0] === phr[j] || ar_phrase[1] === phr[j]){
                    xphr = phr[j] + ' ' + phr[j+1];
                    yphr = phr[j - 1] + ' ' + phr[j] ;
                    if (xphr === myphrase || yphr === myphrase){
                    newarr.push(arr[i]);
                    break;   
                    }else {
                        phr[j] = myphrase;
                        arr[i] = phr.join(' ');
                        newarr.push(arr[i]);
                        break; 
                    };
                }
            }
            newarr.push(arr[i].trim());
        } 
        return newarr;
    }

    const delUnnecessaryWord = function(array, word){
        for (let i = 0; i < array.length; i++) {
            if(array[i].trim() === word || array[i] === word){
                var removed = array.splice(i, 1);
            }
        }
        return array;
    }

    let delUnnecessarySign = function(str, sign1, sign2){// delete sign from word
        let newarr = str.split(', ');
        for (let i = 0; i < newarr.length; i++) {
            let arfromword = newarr[i].split('');
           console.log(arfromword);
           for (let j = 0; j < arfromword.length; j++) {
               if(arfromword[j] === sign1 || arfromword[j] === sign2){
                arfromword.splice(j, 1);
               }else{continue}
           }
           str=arfromword.join('');
           console.log(str);
        }
        return str;
    }


 


  