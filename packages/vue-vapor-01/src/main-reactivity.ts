import { ref, effect } from '@vue/reactivity';

// 初始化
const container = document.createElement('div');
const label = document.createElement('h1');
const button = document.createElement('button');

button.textContent = 'Increase';
button.addEventListener('click', increase); // 注册事件

const count = ref(0);
function increase() {
  count.value++;
}


effect(() => {
  label.textContent = `Count: ${count.value}`;
});


document.body.append(container);
container.append(label, button);
