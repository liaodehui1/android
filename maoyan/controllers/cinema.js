const request = require('request')
const api = require('../api/cinema')
const options = require('../api/options')

// 影院
let cinemaList = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.cinema, qs, ...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 影院详情
let cinemaDetail = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.cinemaDetail, qs, ...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

module.exports = {
  cinemaList,
  cinemaDetail
}