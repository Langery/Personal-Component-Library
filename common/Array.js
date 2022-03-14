/**
 * 场景描述：处理数组数据;
 * 数据说明：
 *    x：目标对象
 */

function includesArr (x, arr) {
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

/**
 * 数组去重
 */
function removalArr (arr) {
  return [...new Set(arr)];
}

/**
 * 字符串去重
 */
function removalStr (str) {
  return [...new Set(str)].join('');
}