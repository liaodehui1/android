const router = require('koa-router')()
const searchServer = require('../controllers/search')

router.get('/search', async(ctx, next) => {
  // console.log(ctx.query)
  await searchServer.search(ctx.query)
  .then((res) => {
    ctx.body = res
  })
})

router.get('/searchlist/cinemas', async(ctx, next) => {
  // console.log(ctx.query)
  await searchServer.cinemas(ctx.query)
  .then((res) => {
    ctx.body = res
  })
})

module.exports = router