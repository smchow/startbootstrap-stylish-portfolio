var links = {
    "index": "index.html",
    "events": "pages/events.html"
}
var page;
var contents;
function setpage(curpage) {
    page = curpage;
    console.log(page);
    getFile(links[page]);
    // if ('index' === page) {
    //     getFile("../index.html");
    //     // document.getElementById('content').innerHTML = content;
    // }
    // if ('events' === page) {
    //     getFile("../pages/events.html");
    //     // document.getElementById('content').innerHTML = "<h1>Events</h1>"
    // }
}

function getFile(file) {
    $(document).ready(function () {

        $('#content').load(file);

    });
}