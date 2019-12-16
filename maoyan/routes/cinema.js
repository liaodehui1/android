const router = require('koa-router')()
const cinemaServer = require('../controllers/cinema')

router.get('/cinemaList', async(ctx, next) => {
  // console.log(ctx.query)
  await cinemaServer.cinemaList(ctx.query)
  .then((res) => {
    ctx.body = res
  })
})

router.get('/cinemaDetail', async(ctx, next) => {
  // console.log(ctx.query)
  await cinemaServer.cinemaDetail(ctx.query)
  .then((res) => {
    ctx.body = res
  })
})

module.exports = router