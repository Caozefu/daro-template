import Base from './Base';
import Router from './Router';

const Koa = require('koa');
const app = new Koa();

Base(app);
Router(app);

export default app;
