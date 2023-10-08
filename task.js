function fillLiTag(){
    var elems = document.querySelectorAll('body>ul>li')
    var countElem = document.getElementById('liCount');
    for (var i = 0; i<elems.length;i++){
        var currentElem = elems[i];
        currentElem.textContent = "Довільний текст";
    }
    countElem.textContent = elems.length;
}

function fillRedBackground(){
    var elems = document.querySelectorAll('div>ul>li>a')

    for(var i = 0; i<elems.length;i++){
        var currentElem = elems[i];
        var href = currentElem.getAttribute('href');

        if((href.startsWith('http://')||href.startsWith('ftp://'))&&!href.startsWith('http://internal.com')){
            currentElem.classList.add('external-red');
        }
    }
}