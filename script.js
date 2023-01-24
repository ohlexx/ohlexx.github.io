const langs = ["python", "html", "css", "js", "c"];

const lang = document.getElementById("lang")
//const showlang = langs[Math.floor(Math.random() * langs.length)];
let lastShowlang;

//console.log(showlang);

function getLang() {
    //getting lang and showing lang
    const showlang = langs[Math.floor(Math.random() * langs.length)];
    lang.innerText = showlang;
    lang.classList = showlang;
}

getLang()
setInterval(getLang, 1000);
