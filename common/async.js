// DOM 元素添加异步事件监听器
function addAsyncEvent (el, event, cb, ...args) {
  // 缓冲标记
  let _flag = false
  // 添加监听
  el.addEventListener(event, async (event) => {
    if (_flag) return undefined
    const e = event || window.event
    // 开启标记
    _flag = true
    // 执行回调
    cb && await cb(e, ...args)
    // 重置标记
    _flag = false
  }, false)
}