const request = require('request')
const api = require('../api/search')

// 影院搜索
let search = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.search, qs},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

let cinemas = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.cinemas, qs},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

module.exports = {
  search,
  cinemas
}