var searchText = $("#wantSearch").val();
var baiduText = "https://www.baidu.com/s?wd=";
$(document).ready(function () {

    $("#wantSearch").keyup(function () {
        wantSearchKeyup();
    });

    $("#search").click(function () {
        search();
    });

    $('#wantSearch').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            search();
        } else {
            console.info("按键的映射是:" + event.keyCode);
        }
    });
});

function wantSearchKeyup() {
    searchText = $("#wantSearch").val();
}

function search() {
    if (searchText != undefined) {
        window.open(baiduText + searchText);
    } else {
        window.open(baiduText);
    }
    $("#wantSearch").val("");
    searchText = "";
}