### WebSocket

1. WebSocket 是 Html5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议
 + WebSocket允许服务端主动向客户端推送数据,在 WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
 + Html5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。


通过 js 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。

当获取 Web Socket 连接后，通过 send() 方法来向服务器发送数据，并通过 onmessage 事件来接收服务器返回的数据。

### 常量

Constant|Value
---|:--:|:--:|---:
WebSocket.CONNECTING|0
WebSocket.OPEN|1
WebSocket.CLOSING|2
WebSocket.CLOSED|3
以上是WebSocket 构造函数的原型中存在的一些常量，可通过 WebSocket.readyState 对照上述常量判断 WebSocket 连接 当前所处的状态

### 属性

+ WebSocket.readyState,返回当前 WebSocket 的链接状态，只读。
   + 0 (CONNECTING)
正在链接中
   + 1 (OPEN)
已经链接并且可以通讯
   + 2 (CLOSING)
连接正在关闭
   + 3 (CLOSED)
连接已关闭或者没有链接成功



### 方法

* WebSocket.close([code[, reason]])
    关闭当前链接
* WebSocket.send(data)
    向服务器发送数据


```
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```