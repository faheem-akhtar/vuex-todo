const express = require('express')
const Vue = require('vue')
const fs = require('fs')
const path = require('path')

const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
})

const app = express()

// app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  const vueApp = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })
  renderer.renderToString(vueApp, (error, html) => {
    if(error) {
      res.status(500).end(error)
      return
    }
    res.send(html)
    // res.sendFile(path.resolve(__dirname, '../dist/index.html'))
  })
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

// const Vue = require('vue')




// renderer.renderToString(app, (err, html) => {
//   if (err) throw err
//   console.log(html)
// })
