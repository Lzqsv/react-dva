import dva from 'dva';
import router from './router/index';
import { createBrowserHistory } from "history";
import store from './store/index.js';
const app = dva({
  history:createBrowserHistory() // histore信息
});
store(app); //路由挂载
app.router(router); // 路由挂载
app.start('#root'); 

