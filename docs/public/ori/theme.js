document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle');
  
    toggleButton.addEventListener('click', function () {
      const body = document.body;
  
      // 创建扩展圆
      const circle = document.createElement('div');
      circle.classList.add('circle-animation');
      this.appendChild(circle);
  
      // 等待动画结束后切换主题
      setTimeout(() => {
        body.classList.toggle('dark-theme'); // 切换主题
        this.classList.toggle('dark');
  
        // 移除动画元素
        circle.remove();
      }, 800); // 动画时长
    });
  });
  