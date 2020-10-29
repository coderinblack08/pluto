import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../types/MyContext';

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  console.log(context);
  if (!context.req.session.userId) {
    throw new Error('not authenticated');
  }
  return next();
};
