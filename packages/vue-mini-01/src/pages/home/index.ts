import { defineComponent, ref } from '@vue-mini/core';

defineComponent(() => {
  const greeting = ref('欢迎使用 Vue Mini 12');

  return {
    greeting,
  };
});
