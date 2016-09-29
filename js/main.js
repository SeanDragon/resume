var searchText = $("#wantSearch").val();
var baiduText = "https://www.baidu.com/s?wd=";
$(document).ready(function () {

    console.log("当前时间是:" + getNowFormatDate());


    if (!localStorage.getItem("count")) {
        localStorage.setItem("count", 1);
    }
    count = localStorage.getItem("count");
    console.log("您是当前第" + (count++) + "位访客");
    localStorage.setItem("count", count);

    //if (!sessionStorage.getItem("count")) {
    //    sessionStorage.setItem("count", 1);
    //}
    //count = sessionStorage.getItem("count");
    //console.log("您是当前第" + (count++) + "位访客");
    //sessionStorage.setItem("count", count);

//    var fso = new ActiveXObject("Scripting.FileSystemObject"); //实例化
//    var f1 = fso.OpenTextFile("c:\\test.txt", 8, true);//这样就能继续写了。分清WriteLine，和Write
//    f1.WriteLine(" 这是回车行");
////f1.Write("这才是一行文字：  ");
//    f1.Close();

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