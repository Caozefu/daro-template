import { IRouteContext } from '../../Router';
import { MESSAGE_CODE, STORAGE_KEY } from '../../common/constant';
import storage from '../../Model/Storage';

interface IRequestBody {
  text: string;
}

export const InitHomePost = (ctx: IRouteContext) => {
  const _body = ctx.request.body as IRequestBody;
  const times = storage.getObject<number>(STORAGE_KEY.HOME_KEY) || 0;

  storage.set<number>(STORAGE_KEY.HOME_KEY, times + 1);

  ctx.body = {
    success: true,
    model: {
      text: 'Hello Daro',
      params: _body,
      times,
    },
    message: MESSAGE_CODE.SUCCESS,
  };
};

export const InitHomeGet = (ctx: IRouteContext) => {
  const _query = ctx.request.query;
  const times = storage.getObject<number>(STORAGE_KEY.HOME_KEY) || 0;

  storage.set<number>(STORAGE_KEY.HOME_KEY, times + 1);

  ctx.body = {
    success: true,
    model: {
      text: 'Hello Daro',
      params: _query,
      times,
    },
    message: MESSAGE_CODE.SUCCESS,
  };
};
