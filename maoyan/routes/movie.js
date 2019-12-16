const router = require('koa-router')()
const movieServer = require('../controllers/movie')

router.get('/movieOnInfoList', async(ctx, next) => {
  await movieServer.movieOnInfoList()
  .then((res) => {
    ctx.body = res
  })
})

router.get('/moreComingList', async(ctx, next) => {
  // console.log(ctx.query)
  await movieServer.moreComingList(ctx.query)
  .then((res) => {
    ctx.body = res
  })
})

router.get('/mostExpected', async(ctx, next) => {
  // console.log(ctx.query)
  await movieServer.mostExpected(ctx.query)
  .then((res) => {
    ctx.body = res
  })
})

router.get('/comingList', async(ctx, next) => {
  // console.log(ctx.query)
  await movieServer.comingList(ctx.query)
  .then((res) => {
    ctx.body = res
  })
})

module.exports = router