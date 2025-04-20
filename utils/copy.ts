// utils/copy.js
export const copyCode = (elementId: any) => {
  if (process.client) { // 确保在客户端执行
    const codeBlock = document.getElementById(elementId);
    if (!codeBlock) return;

    const range = document.createRange();
    range.selectNode(codeBlock);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      try {
        document.execCommand('copy');
        alert('代码已复制！');
      } catch (err) {
        alert('复制失败，请手动选择复制');
      }
  
      selection.removeAllRanges();
    }
  }
};