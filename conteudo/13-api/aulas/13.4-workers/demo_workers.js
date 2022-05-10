var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i); //este método posta uma mensagem de volta na página HTML
    setTimeout("teimedCount()",500);
}

timedCount();