let fs = require('fs')
let chalk = require('chalk')

global.owner = ['6281252848955', '62858157008613']

global.APIs = {
  amel: 'https://melcanz.com',
}
global.APIKeys = {
  'https://melcanz.com': 'Subscribe MelcanzYT'
}

global.packname = 'wangi'
global.author = 'Xixixi'
global.wm = '© Alyaaaa'
global.eror = '*Error*'
global.wait = '*Tunggu sayang....*'
global.benar = '✅'
global.salah = '❌'
global.dikit = 'dikit lagi'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("memperbaharui 'config.js'"))
  delete require.cache[file]
  require(file)
})
