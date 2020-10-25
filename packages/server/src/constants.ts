export const __prod__ = process.env.NODE_ENV === 'production';
export const port = process.env.PORT || 4000;
export const cookie_name = 'qid';
export const client_url = __prod__
  ? 'https://pluto.vercel.app'
  : 'http://localhost:3000';
