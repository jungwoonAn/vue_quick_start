import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import App from './App2.vue'
// import App from './App3.vue'
// import App from './App4.vue'
// import App from './App5.vue'
import mitt from 'mitt';

import './assets/main.css'

const emitter = mitt()
// 이벤트 발신 여부 확인(이벤트 타입명으로 '*' : 모든 이벤트 처리)
emitter.on('*', (type, e) => console.log(`## 이벤트 로그 : ${type} -> `, e))

const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.mount('#app')
