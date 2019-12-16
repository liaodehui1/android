export function myFetch(url, params) {
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  //fetch请求
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export function strLimit(content, limit = 15, ellipsis = '…') {
  if (content.length <= limit) return content;
  return content.substring(0, limit) + ellipsis
}