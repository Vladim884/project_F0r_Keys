subm5.onclick = function () {
    console.log(keys_finish);
    cells_row[2].innerHTML = '';
    keys = wind.querySelectorAll('.green');
    for (let i = 0; i < keys.length; i++) {
        keys_finish.push(keys[i].innerHTML);
    };
    console.log(keys_finish);
    //==
    cells_row[2].innerHTML = keys_finish.join(', ');
    // cells_row[2].innerHTML = cells_row[2].innerHTML.slice(0,1024);
    // typeof(cells_row[2].innerHTML);
//     
    console.log(tr1);

    wind.innerHTML = '';
    keys_finish = [];
    

    console.log(keys_finish);
    keyword2.value = '';
    keyword3.value = '';
    keyword4.value = '';
    textres2.value = '';
    textres3.value = '';
    textres4.value = '';
    textres1.value = '';
    string1.value = '';
    str2.value = '';
    wrongkey.value = '';
    if (stringIndex < allRows.length) {
        stringIndex++;
        displayed_ind.value = stringIndex;
        console.log(displayed_ind);
    }  else {
        blocker.style.display = 'block';
    } 
    console.log(stringIndex);
    arr1 = [];
    arr11 = [];
    arr2 = [];
    arr22 = [];
    arr3 = [];  
    arr33 = [];
    subm.disabled = false;
    subm1.disabled = true;
    backToTop();
}