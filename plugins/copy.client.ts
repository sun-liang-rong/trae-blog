// // plugins/copy.client.ts （注意：文件名后缀 .client.ts 表示仅在客户端加载）
import { defineNuxtPlugin } from '#app';
// import { copyCode } from '~/utils/copy';

// export default defineNuxtPlugin((nuxtApp) => {

//   console.log(copyCode, process.client)
//   return {
//     provide: {
//       copyCode
//     }
//   };
// });
export default defineNuxtPlugin(() => {
  // 定义复制函数
  const copyCode = (elementId: string) => {
    let element: HTMLElement = document.getElementById(elementId) as HTMLElement;
    let btnElement: HTMLElement = document.getElementById('btn-' + elementId) as HTMLElement;
    if (!element) return;

    navigator.clipboard.writeText(element.textContent || '').then(
      () => {
        console.log('复制成功')
        if (btnElement.innerText === '复制成功') return
        // 复制成功后 文字改成复制成功 三秒钟后又改回复制
        btnElement.innerText = '复制成功';
        let setTimeID = setTimeout(() => {
          btnElement.textContent = '复制'
          clearTimeout(setTimeID)
        }, 3000);
      }).catch(() => console.error('复制失败'));
  }

  // 挂载到 window 对象
  window.copyCode = copyCode;
});

// 扩展 Window 接口声明
declare global {
  interface Window {
    copyCode: (elementId: string) => void;
  }
}