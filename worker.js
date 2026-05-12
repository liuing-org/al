export default {
    async fetch(request, env, ctx) {
      const html = `<!DOCTYPE html>
  <html lang="zh-CN">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>!!!</title>
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
              font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
              overflow: hidden;
          }
          
          .message {
              font-size: 8rem;
              font-weight: bold;
              text-align: center;
              padding: 20px;
              
              /* 使用多层径向渐变模拟自由形状网格 */
              background-image: 
                  radial-gradient(at 0% 0%, #240b36 0px, transparent 50%),      /* Dark Purple */
                  radial-gradient(at 100% 0%, #c31432 0px, transparent 50%),    /* Deep Red */
                  radial-gradient(at 100% 100%, #00c6ff 0px, transparent 50%),  /* Cyan */
                  radial-gradient(at 0% 100%, #f7971e 0px, transparent 50%),    /* Orange */
                  radial-gradient(at 50% 50%, #fc00ff 0px, transparent 50%),    /* Pink */
                  radial-gradient(at 50% 0%, #ffffff 0px, transparent 50%);     /* White Highlight */
                  
              background-size: 180% 180%;
              background-position: 0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 50%, 50% 0%;
              
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              
              /* 复合动画：位置移动 + 尺寸缩放 = 模拟形状变形 */
              animation: meshMorph 15s ease-in-out infinite alternate, hueRotate 20s linear infinite;
              line-height: 1.5;
          }
          
          @keyframes hueRotate {
              0% { filter: hue-rotate(0deg); -webkit-filter: hue-rotate(0deg); }
              100% { filter: hue-rotate(360deg); -webkit-filter: hue-rotate(360deg); }
          }
          
          @keyframes meshMorph {
              0% {
                  background-position: 
                      0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 50%, 50% 0%;
                  background-size: 180% 180%;
              }
              25% {
                  background-position: 
                      20% 20%, 80% 10%, 90% 90%, 10% 80%, 60% 40%, 40% 20%;
                  background-size: 200% 220%;
              }
              50% {
                  background-position: 
                      0% 50%, 100% 50%, 50% 100%, 50% 0%, 30% 70%, 70% 30%;
                  background-size: 220% 180%;
              }
              75% {
                  background-position: 
                      10% 10%, 90% 20%, 80% 80%, 20% 90%, 40% 60%, 60% 10%;
                  background-size: 190% 210%;
              }
              100% {
                  background-position: 
                      0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 50%, 50% 0%;
                  background-size: 180% 180%;
              }
          }
          
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
          5/12-5/13 <br>宁波出差中<br>有任何问题请在Teams上留言<br>企微留言可能会延迟
      </div>
      <script>
          // 保持屏幕常亮
          async function requestWakeLock() {
              try {
                  if ('wakeLock' in navigator) {
                      const wakeLock = await navigator.wakeLock.request('screen');
                      
                      // 页面被隐藏时释放锁
                      document.addEventListener('visibilitychange', async () => {
                          if (document.hidden) {
                              wakeLock.release();
                          } else {
                              try {
                                  await navigator.wakeLock.request('screen');
                              } catch (err) {
                                  console.error('恢复屏幕唤醒锁失败:', err);
                              }
                          }
                      });
                      
                      console.log('屏幕已锁定，保持常亮');
                  } else {
                      console.warn('此浏览器不支持 Wake Lock API');
                  }
              } catch (err) {
                  console.error('屏幕唤醒锁请求失败:', err);
              }
          }
          
          // 页面加载完成后请求屏幕常亮
          if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', requestWakeLock);
          } else {
              requestWakeLock();
          }
      </script>
  </body>
  </html>`;
  
      return new Response(html, {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      });
    },
  };
  
