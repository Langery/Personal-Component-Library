/**
 * 场景描述：处理数组数据;
 * 数据说明：
 *    x：目标对象
 */

function dealArr (x, arr) {
  if (arr.includes(x)) console.log('x is had in arr;');
}


/**
 * 场景描述：判断是否是数组
 */
function judgeArr (arr) {
  if (Array.isArray(arr)) {
    return true;
  } else {
    return false;
  }
}