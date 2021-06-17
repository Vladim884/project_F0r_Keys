subm2.onclick = function(){
    var str2 = getElVal('entertext'); 
    var str22 = getElVal('entertext2');
    
    let newstr2 = str2.replace(/,/gi, '');
    newstr2 = str2.replace(/[\n\r]/g, '')//remove line break

    let newstr22 = str22.replace(/,/gi, '');
    newstr22 = str22.replace(/[\n\r]/g, '')//remove line break

    newstr2 = newstr2.trim();
    newstr22 = newstr22.trim();
    var arrey2 = newstr2.split(" ");
    var arrey22 = newstr22.split(" ");
    // var arrey22 = [];
    // for (let i = 0; i < arrey2.length; i++) {
    //     if(i!=0)arrey22.push(arrey2[i]);
        
    // }
    console.log(arrey22);
getThreeWords(arrey2, arr2);
getThreeWords(arrey22, arr22);
if(arr22.length != 0){
    arr2.length = 10;
    arr22.length = 10;
} else {
    arr2.length = 18;
}
arr23 = arr2.concat(arr22);

keyword2.value = keyword2.value.trim();//removing the first and last space
// textres2.value = filterItems(keyword2.value, arr23);//filtering arr2 by the entered word in the input
let textar2 = arr23.join(', ');
textres2.value = textar2;
// keyword3.focus();
};