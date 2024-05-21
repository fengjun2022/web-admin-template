import {ref, onMounted, onUnmounted} from 'vue';
import {ElNotification} from "element-plus";

export function useWebSocket(url, heartbeatInterval = 5000) {
  const isConnected = ref(false);
  const ws = ref<WebSocket>();
  let heartbeatTimer;
  console.log(isConnected.value, "------------------")

  function initWebSocket() {
    ws.value = new WebSocket("ws://" + url);
    console.log(ws.value, "------------")
    ws.value.onopen = () => {
      console.log('WebSocket 打开');
      isConnected.value = true;
      // 连接打开后开始发送心跳
      startHeartbeat();
    };

    ws.value.onmessage = (event) => {
      // 连接成功
      const message = JSON.parse(event.data);
      switch (message["type"]) {
        case 'pong':
          // 处理心跳消息
          // console.log('Heartbeat response received');
          break;
        case 'status':
          // 处理心跳查看消息
          ElNotification({
            title: '心跳通知',
            message: message.msg,
            duration: 5000,

          })
          break;
          // 添加更多的消息类型处理...
        case "equipment":
          ElNotification({
            title: '系统通知',
            message: message.msg,
            duration: 10000,
          })
          break
        default:
          console.log('Unknown message type:', message);
      }
      // 其他消息处理
    };

    ws.value.onerror = (error) => {
      console.error('WebSocket error: ', error);
    };

    ws.value.onclose = () => {
      console.log('WebSocket 关闭');
      isConnected.value = false;
      stopHeartbeat(); // 清理心跳计时器
    };
  }

  function startHeartbeat() {

    // 清除旧的心跳计时器
    stopHeartbeat();
    // 设置新的心跳计时器
    heartbeatTimer = setInterval(() => {
      if (ws.value?.readyState === WebSocket.OPEN) {
        ws.value.send(JSON.stringify({
          type: "ping",
        }));
      }
    }, heartbeatInterval);
  }

  function stopHeartbeat() {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  }

  onMounted(() => {
    initWebSocket();
  });

  onUnmounted(() => {
    if (ws.value) {
      ws.value.close();
    }
    stopHeartbeat(); // 确保组件卸载时清理心跳
  });


  return {isConnected, ws, initWebSocket};
}
