const express = require('express')
const Vue = require('vue')
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const isProd = process.env.NODE_ENV === 'production'

// const renderer = require('vue-server-renderer').createRenderer({
//   template: fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
// })

const app = express()
let renderer;

if (isProd) {

} else {
  var webpack = require('webpack')
  const webpackConfig = require('../build/setup-dev-server')
  var compiler = webpack(webpackConfig)
  compiler.run((err, stats) => {
    if(err) {
      console.error(err.stack || err)
    } else if(stats.compilation.errors.length) {
      console.log('Webpack compiler errors:', stats.compilation.errors)
    } else {
      console.log('Webpack compile successfully.')

      const bundle = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'), 'utf-8'))

      renderer = createBundleRenderer(bundle, {
        template: fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
      })

    }
  });
}

// app.use(express.static(path.resolve(__dirname, '../dist')));

// const createApp = require('../src/entry-server')

// console.log(createApp)

app.get('*', (req, res) => {

  const context = { url: req.url }

  // createApp(context).then(app => {
    renderer.renderToString(context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
        console.error(err);
      } else {
        res.end(html)
      }
    })
  // })

  // const vueApp = new Vue({
  //   data: {
  //     url: req.url
  //   },
  //   template: `<div>The visited URL is: {{ url }}</div>`
  // })
  // renderer.renderToString(vueApp, (error, html) => {
  //   if(error) {
  //     res.status(500).end(error)
  //     return
  //   }
  //   res.send(html)
  //   // res.sendFile(path.resolve(__dirname, '../dist/index.html'))
  // })
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

// const Vue = require('vue')




// renderer.renderToString(app, (err, html) => {
//   if (err) throw err
//   console.log(html)
// })
