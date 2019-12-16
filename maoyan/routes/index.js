const router = require('koa-router')()
const cinema = require('./cinema')
const movie = require('./movie')

router.stack = router.stack.concat(cinema.stack,movie.stack)

module.exports = router