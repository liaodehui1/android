const request = require('request')
const api = require('../api/movie')
const options = require('../api/options')

// 正在热映
let movieOnInfoList = function(){
  return new Promise((resolve,reject) => {
    request.get({url:api.movieOnInfoList, ...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 更多电影
let moreComingList = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.moreComingList, qs: qs, ...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 最受期待
let mostExpected = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.mostExpected, qs: qs, ...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 最受期待
let comingList = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.comingList, qs: qs, ...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

module.exports = {
  movieOnInfoList,
  moreComingList,
  mostExpected,
  comingList
}