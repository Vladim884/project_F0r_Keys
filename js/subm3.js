subm3.onclick = function(){
    var str3 = getElVal('entertext');
    var str33 = getElVal('entertext2');
    let newstr3 = str3.replace(/,/gi, '');
    newstr3 = str3.replace(/[\n\r]/g, '')

    let newstr33 = str33.replace(/,/gi, '');
    newstr3 = newstr3.trim();
    newstr33 = newstr33.trim();
    var arrey3 = newstr3.split(" ");
    var arrey33 = newstr33.split(" ");
    // arrey3.length = 30;
getFourWords(arrey3, arr3);
getFourWords(arrey33, arr33);
if(arr33.length != 0){
    arr3.length = 7;
    arr33.length = 7;
} else {
    arr3.length = 13;
}
arr34 = arr3.concat(arr33);
    textres3.value = arr34;
    keyword3.value = keyword3.value.trim();//removing the first and last space
    // textres3.value = filterItems(keyword3.value, arr34);//filtering key phrases by the entered word

    let textar3 = arr34.join(', ');
    textres3.value = textar3;
};