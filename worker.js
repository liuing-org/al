export default {
    async fetch(request, env, ctx) {
      const html = `<!DOCTYPE html>
  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IT Out of Office</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        background: #000;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        /* 保持字体不变 */
        font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
        overflow: hidden;
      }
      
      .message {
        font-size: 8rem;
        font-weight: bold;
        text-align: center;
        padding: 20px;
        
        /* === 核心修改: 更改为更柔和、更科技感的渐变颜色 (iPhone X/iOS 风格参考) === */
        background-image: 
            /* 浅蓝色 - 左上 */
            radial-gradient(at 0% 0%, #1a73e8 0px, transparent 50%), 
            /* 柔和紫 - 右上 */
            radial-gradient(at 100% 0%, #a855f7 0px, transparent 50%), 
            /* 亮粉色/洋红 - 右下 */
            radial-gradient(at 100% 100%, #ec4899 0px, transparent 50%), 
            /* 浅绿色/青色 - 左下 */
            radial-gradient(at 0% 100%, #10b981 0px, transparent 50%), 
            /* 白色高光 - 中心偏上 */
            radial-gradient(at 50% 30%, #ffffff 0px, transparent 50%),
            /* 橙/黄 - 中心偏下 */
            radial-gradient(at 70% 80%, #f97316 0px, transparent 50%); 
            
        /* 增大尺寸以获得更柔和的过渡 */
        background-size: 250% 250%; 
        /* 初始位置，让颜色更均匀分布 */
        background-position: 0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 30%, 70% 80%;
        
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        
        /* 复合动画：位置移动 + 尺寸缩放 = 模拟形状变形 */
        animation: meshMorph 20s ease-in-out infinite alternate; /* 增加动画时长，使其更慢、更平滑 */
        line-height: 1.5;
      }
      
      /* === 核心修改: 调整动画关键帧，增加更多细微变化和更平滑的速度 === */
      @keyframes meshMorph {
          0% {
              background-position: 
                  0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 30%, 70% 80%;
              background-size: 250% 250%;
          }
          20% {
              background-position: 
                  15% 5%, 85% 15%, 95% 85%, 5% 95%, 40% 20%, 60% 70%;
              background-size: 270% 220%;
          }
          40% {
              background-position: 
                  25% 10%, 75% 20%, 85% 75%, 15% 85%, 60% 40%, 40% 60%;
              background-size: 240% 260%;
          }
          60% {
              background-position: 
                  5% 50%, 95% 50%, 50% 95%, 50% 5%, 30% 70%, 70% 30%;
              background-size: 280% 230%;
          }
          80% {
              background-position: 
                  10% 90%, 90% 10%, 80% 20%, 20% 80%, 70% 50%, 30% 50%;
              background-size: 230% 270%;
          }
          100% {
              /* 恢复到初始状态 */
              background-position: 
                  0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 30%, 70% 80%;
              background-size: 250% 250%;
          }
      }
      
      /* 保持响应式设计 */
      @media (max-width: 768px) {
        .message {
          font-size: 2rem;
          padding: 15px;
        }
      }
      
      @media (max-width: 480px) {
        .message {
          font-size: 1.5rem;
          padding: 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="message">
      IT请假啦!<br>有问题请在<br>Teams上留言
    </div>
  </body>
  </html>`;
  
      return new Response(html, {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      });
    },
  };
