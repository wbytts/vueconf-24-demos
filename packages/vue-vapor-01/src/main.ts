// 初始化
const container = document.createElement('div')
const label = document.createElement('h1')
const button = document.createElement('button')

button.textContent = 'Increase'
button.addEventListener('click', increase) // 注册事件

let count = 0

// 渲染函数
const render = () => {
  label.textContent = `Count: ${count}`
}

function increase() {
  count++
  render() // 修改内容之后手动重新渲染
}

render() // 首次渲染

document.body.append(container)
container.append(label, button)