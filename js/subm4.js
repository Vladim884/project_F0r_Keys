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
    old = cells_row[2].innerHTML;//
    oldkeys = old.replace(/,/g, ', ');
    console.log(old);
    textres4.value = GetFullText(fullText,  oldkeys + ', ', textres1.value +', ', textres2.value +', ', textres3.value);
    textres4.value = textres4.value.toLowerCase();

    let res_arrey = textres4.value.split(", ");
    console.log(res_arrey);
    res_arrey = res_arrey.filter(function(entry) { return entry.trim() != ''; });//Удаление пустых или пробельных строк из массива
    console.log(res_arrey);
    //=======
    res_arrey = phraseReplace(res_arrey, keyword2.value);//replace 1 word on phrase with 2 words
    res_arrey = phraseReplace(res_arrey, keyword3.value);//replace 1 word on phrase with 2 words
    res_arrey = phraseThreeReplace(res_arrey, keyword4.value);//replace 1 word on phrase with 3 words
    //===
    uniq = res_arrey.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    },[]);
    console.log(uniq); // delete duplicates
    //====
    uniq = delUnnecessaryWord(uniq, "купить");
    console.log(uniq);
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
    
}