
export function MyCom() {

  const foo1 = vineProp.optional<string>()

  return vine`
    <div>
      <div>MyCom组件</div>
    </div>
  `
}


// 箭头函数目前貌似有点问题
// export const MyComArrow = () => vine`<div>MyComArrow</div>`
