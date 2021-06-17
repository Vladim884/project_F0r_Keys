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
// str2.value = '';
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
let keyword4 = document.getElementById('keyword4');
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
    subm1.disabled = false;
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

  // replace 1 word with a two-word phrase
  var phraseReplace = (arr, myphrase) => {
    let newarr=[];
    let phr;
        for (let i = 0; i < arr.length; i++) {
            let ar_phrase = myphrase.split(' ');
            let phr = arr[i].split(' ');
            for (let j = 0; j < phr.length; j++) {
                if(ar_phrase[0] === phr[j] || ar_phrase[1] === phr[j]){
                    let xphr = phr[j] + ' ' + phr[j+1];
                    let yphr = phr[j - 1] + ' ' + phr[j] ;
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
    var phraseThreeReplace = (arr1, myphrase1) => {
        let newarr1=[];
        let phr1;
            for (let i = 0; i < arr1.length; i++) {
                let ar_phrase1 = myphrase1.split(' ');
                let phr1 = arr1[i].split(' ');
                for (let j = 0; j < phr1.length; j++) {
                    if(ar_phrase1[0] === phr1[j] || ar_phrase1[1] === phr1[j] || ar_phrase1[2] === phr1[j]){
                        let xphr1 = phr1[j] + ' ' + phr1[j+1] + ' ' + phr1[j+2];
                        let yphr1 = phr1[j - 1] + ' ' + phr1[j] + ' ' + phr1[j+1] ;
                        let zphr1 = phr1[j - 2] + ' ' + phr1[j - 1] + ' ' + phr1[j]
                        if (xphr1 === myphrase1 || yphr1 === myphrase1 || zphr1 === myphrase1){
                        // newarr1.push(arr1[i]);
                        break;   
                        }else {
                            // if(phr1[j+1] === ar_phrase[0] || phr1[j+1] === ar_phrase[1] || phr1[j+1] === ar_phrase[2]){
                            //     phr1.slice(j+1, 1)
                            // }
                            phr1[j] = myphrase1;
                            let phr2 = phr1.slice(0, j);
                            arr1[i] = phr2.join(' ');
                            newarr1.push(arr1[i]);
                            // break; 
                        };
                    }
                }
                newarr1.push(arr1[i].trim());
            } 
            return newarr1;
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


 


  