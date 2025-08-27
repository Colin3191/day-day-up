// 请基于fetch 封装一个请求方法，
// 希望可以执行最大重试请求次数为某个值。
// 比如request(url, 4), 如果请求报错的话可以继续请求，最多请求四次。

async function request(url, maxRetry) {
  try {
    const response = await fetch('url');
    return response;
  } catch (e) {
    if (maxRetry > 0) {
      return request(url, maxRetry - 1);
    }
    throw e;
  }
}
