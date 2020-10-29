/**
 * 场景描述：处理数字数据
 */

function dealNum (x) {
    if (Number.isFinite(x)) {
        console.log("x is a number");
    } else {
        console.log("x is not a number");
    }
}

/**
 * 场景描述：知道首位数字获取中间数字
 *          只针对数字
 */
function midNum (a, b) {
    var count = b - a - 1;
    var arr = [a,b];
    for (var i = 1;i <= count;i++) {
        arr.push(a + i);
    }
    return arr;
}