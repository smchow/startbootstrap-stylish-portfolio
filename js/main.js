var links = {
    "index": "index.html",
    "events": "pages/events.html",
    "gives" : "pages/gives.html",
    "res" : "pages/res.html",
    "sponsors" : "pages/sponsors.html",
    "contact" : "pages/contact.html"
}
var page;
var contents;
setpage(document.URL.substring(document.URL.lastIndexOf('#') + 1));
function setpage(curpage) {
    page = curpage;
    getFile(links[page]);
}

function getFile(file) {
    $(document).ready(function () {

        $('#content').load(file);

    });
}