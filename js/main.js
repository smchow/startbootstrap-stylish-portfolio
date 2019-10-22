var links = {
    "index": "pages/main.html",
    "about": "pages/main.html",
    "events": "pages/events.html",
    "classes": "pages/events.html#classes",
    "gives" : "pages/gives.html",
    "res" : "pages/res.html",
    "sponsors" : "pages/contact.html",
    "contact" : "pages/contact.html#contact"
};

var page = document.URL.substring(document.URL.lastIndexOf('#') + 1);
if (page.length === 0 || document.URL.lastIndexOf('#') === -1) {
    console.log("0");
    page = "index";
}

var contents;
setpage(page);
function setpage(curpage) {
    page = curpage;
    getFile(links[page]);
}

function getFile(file) {
    $(document).ready(function () {

        $('#content').load(file);

    });
}