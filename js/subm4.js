let old;//
let oldkeys;
let textres4 = document.getElementById('resulttext4');// textarea data
var subm4 = document.getElementById('sub4');//button start



subm4.onclick = function(){
    tr1 = allRows[stringIndex];//string now
    console.log(allRows[stringIndex]);
    cells_row=tr1.getElementsByTagName('td');
    console.log(cells_row);
    // firstElementChild
    oldkeys = cells_row[2].innerHTML;//
    // oldkeys = old.replace(/,/g, ', ');
    console.log(old);
    textres4.value = GetFullText(fullText,  textres1.value +', ', textres2.value +', ', textres3.value + ', ');//костыль...last ', ' separate "undefined"???
    textres4.value = textres4.value.toLowerCase();

    let res_arrey = textres4.value.split(", ");
    console.log(res_arrey);
    res_arrey = res_arrey.filter(function(entry) { return entry.trim() != ''; });//Удаление пустых или пробельных строк из массива
    res_arrey = res_arrey.filter(function(entry) { return entry.trim() != "undefined"; });//костыль для строки "undefined"
    console.log(res_arrey);
    //=======
    res_arrey = phraseReplace(res_arrey, keyword2.value);//replace 1 word on phrase with 2 words
    res_arrey = phraseReplace(res_arrey, keyword3.value);//replace 1 word on phrase with 2 words
    res_arrey = phraseThreeReplace(res_arrey, keyword4.value);//replace 1 word on phrase with 3 words
    //===
   
    //====
    // uniq = delUnnecessaryWord(uniq, "купить");
    // + newstr1 +', ' 
    let bigtext =  oldkeys + ', '  
    + cells_row[1].innerHTML + ', '
    + cells_row[3].innerHTML + ', '
    + cells_row[3].innerHTML + ' 2021, ' 
    + cells_row[3].innerHTML + ' пром, '
    + cells_row[3].innerHTML + ' Украина, '
    + cells_row[2].innerHTML + ', '
    + res_arrey.join(', ');
    console.log(bigtext);
    let arrlast = bigtext.split(', ');
    uniq = arrlast.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    },[]);
    console.log(uniq); // delete duplicates



    for (let index = 0; index < uniq.length; index++) {
        let str = "<span id=" + "i"+index + " class=" + "green" +">" + uniq[index] + "</span>";
        wind.innerHTML += str;
    }
    keys = wind.querySelectorAll('.green');
    console.log(typeof(keys));
    // keys.splice(0, 1);
    for (let i = 0; i < keys.length; i++) {// delete green span
        keys[i].addEventListener('click', function () {
            wind.removeChild(this);
        });
    }
    // oldkeys + ', ', 
    
}