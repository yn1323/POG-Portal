// デバッグ用
export const END_POINT =
  process.env.NODE_ENV === 'production'
    ? 'https://python-server-api.herokuapp.com/'
    : 'http://0.0.0.0:5000/'
