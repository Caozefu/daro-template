import { ExtendableContext } from 'koa';
import * as Application from 'koa';
import { InitHomePost, InitHomeGet } from '../Controller';
import * as Route from '@koa/router';
import { MESSAGE_CODE } from '../common/constant';
const router = new Route();

export interface IRoute {
  path: string;
  method: string;
  handler: (ctx: IRouteContext) => any;
}

export interface IRoutes {
  [routeKey: string]: IRoute[];
}

export interface IRouteContext extends ExtendableContext {
  body: {
    success: boolean;
    model?: any;
    message: MESSAGE_CODE;
  };
}

const routes: IRoutes = {
  home: [
    {
      path: '/postDemo',
      method: 'post',
      handler: InitHomePost,
    },
    {
      path: '/getDemo',
      method: 'get',
      handler: InitHomeGet,
    },
  ],
};

const Router = (app: Application) => {
  for (const key in routes) {
    const _route = routes[key];
    _route.forEach(item => {
      // @ts-ignore
      const method = router[item.method];
      method.call(router, `/${key}${item.path}`, item.handler);
    });
  }
  app.use(router.routes()).use(router.allowedMethods());
};

export default Router;
