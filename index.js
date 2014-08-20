var fetch = require('./fetch.js')

module.exports = function (dat, ready) {
  ready()
  startFetch()
  
  function startFetch() {
    setTimeout(startFetch, 30*1000)
    console.log('Fetching..')
    fetch().pipe(dat.createWriteStream())
  }
}