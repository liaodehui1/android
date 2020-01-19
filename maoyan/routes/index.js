const router = require('koa-router')()
const cinema = require('./cinema')
const movie = require('./movie')
const search = require('./search')

router.stack = router.stack.concat(
  cinema.stack,
  movie.stack,
  search.stack
)

module.exports = router