// 线性数组转化树形数组算法
function setTreeData (data, pCode, code, root) {
  // 循环所有项
  let tree = data.filter((father) => {
    let branchArr = data.filter((child) => {
      // 返回每一项的子级数组
      return father[code] === child[pCode]
    })
    if (branchArr.length > 0) {
      // 如果存在子级，则给父级添加一个children属性，并赋值
      father.children = branchArr
    }
    // 返回第一层
    return father[pCode] === root
  })
  // 返回树形数据
  return tree
}

// 线性数组转化树形数组算法
function setTree (data) {
  // 循环所有项
  let tree = data.filter((father) => {
    let branchArr = data.filter((child) => {
      // 返回每一项的子级数组
      if (father.reasonId) {
        return father.reasonId === child.reasonPId
      } else {
        return father.organCode === child.organPCode
      }
    })
    if (branchArr.length > 0) {
      // 如果存在子级，则给父级添加一个children属性，并赋值
      father.children = branchArr
    }
    // 返回第一层
    if (father.reasonId) {
      return father.reasonPId === '1'
    } else {
      return father.organPCode === '-1'
    }
  })
  // 返回树形数据
  return tree
}