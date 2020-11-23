// デバッグ用
export const END_POINT =
  process.env.NODE_ENV === 'production'
    ? 'https://qvbfc9vxcc.execute-api.ap-northeast-1.amazonaws.com/coconut'
    : 'http://0.0.0.0:5000'

export const isProduction = process.env.NODE_ENV === 'production'
