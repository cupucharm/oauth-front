import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");

// 라우터와 뷰티파이 쓰겠다는 설정.
