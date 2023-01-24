const lang = [python, html, css, js, c];

const codes = document.querySelector("#codes");
const showlang = lang[Math.floor(Math.random() * lang.length)];

codes.innerText = showlang.codes;
