var space = "　";
/**
 * 验证输入
 * @param $obj jq对象
 * @param reg 正则
 * @returns {number} -1 正则错误 -2 验证错误
 */
function vaildInput($obj, reg) {
    var regStr = reg;
    if (regStr[0] !== "^" || regStr[regStr.length - 1] !== "$") {
        return -1;
    }
    if ($obj.val() == undefined || $obj.val() === "" || !$obj.val().match(regStr)) {
        return -2;
    }
    return 0;
}

/**
 * 二级域名获取
 * @returns {*}
 */
function getTwo() {
    var string = window.location.href;
    return string.substring(string.indexOf("//") == -1 ? 0 : string.indexOf("//") + 2, string.indexOf("."));
    // return string.substring(0, string.indexOf("."));
}


// 验证码  ============================    start
var InterValObj; //timer变量，控制时间
var count = 5; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var _$i1;
var _$i2 = "";

/**
 * 验证码超时器
 * @param $i1 jq对象，input type= button 即可
 * @param $i2 下次显示的内容
 * @param $i3 超时时间
 */
function sendMessage($i1, $i2, $i3) {
    _$i1 = $i1;
    _$i2 = $i2;
    count = $i3;
    curCount = count;
    //设置button效果，开始计时
    _$i1.attr("disabled", "true");
    _$i1.val(curCount + "秒");
    InterValObj = window.setInterval(setRemainTime, 1000); //启动计时器，1秒执行一次
}

//timer处理函数
function setRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        _$i1.removeAttr("disabled");//启用按钮
        _$i1.val((_$i2 === "" || _$i2 == undefined) ? "验证码" : _$i2);
    }
    else {
        curCount--;
        _$i1.val(curCount + "秒");
    }
}
// 验证码  ============================    end

/**
 * 解析URL中的参数
 * @param {string} string
 * @returns {Object}
 */
function getUrlParam(string) {
    var obj = new Object();
    if (string == undefined || string === "") {
        console.log("sylutils Line 102 :: 传进来的路径是空的");
        string = window.location.href;
    }
    if (string.indexOf("?") != -1) {
        string = string.substr(string.indexOf("?") + 1);
        var strs = string.split("&");
        for (var i = 0; i < strs.length; i++) {
            var tempArr = strs[i].split("=");
            obj[tempArr[0]] = tempArr[1];
        }
    }
    return obj;
}

/**
 * 导入security包
 */
function importSecurity() {
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src = "../sylsecurity.js";
    oHead.appendChild(oScript);
}

/**
 * 获取当前时间
 * 格式是 yyyy-MM-dd HH:mm:ss
 * @returns {string} 一个时间字符串
 */
function getNowFormatDate() {
    var date = new Date();
    var separator1 = "-";
    var separator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return year + separator1 + month + separator1 + strDate
        + " " + date.getHours() + separator2 + date.getMinutes()
        + separator2 + date.getSeconds();
}

/**
 * 获取时间对象
 * @returns {{}} year month day hour minutes second
 */
function getDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }

    var obj = {};
    obj.year = year;
    obj.month = month;
    obj.day = strDate;
    obj.hour = date.getHours();
    obj.minutes = date.getMinutes();
    obj.second = date.getSeconds();
    return obj;
}

/**
 * 为字符串添加一个替换方法
 * @param s1 before
 * @param s2 after
 * @returns {string} 替换后的字符串
 */
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}