let fs = require('fs')
let chalk = require('chalk')

global.owner = ['6281528745589', '6288299601177'] // Letakan nomor kamu disini

global.APIs = { // API Prefix
  // nama: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://api.reysekha.site',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  waifupics: 'https://api.waifu.pics',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://melcanz.com': 'rahasia',
  'https://api.reysekha.site': 'apirey',
  'https://bx-hunter.herokuapp.com': 'FuckBitch',
  'https://hardianto.xyz': 'hardianto',
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.chipa.xyz': 'pais',
  'https://api.xteam.xyz': '9923942a7c71b242',
  'https://api.zeks.me': 'apivinz',
}

// Sticker WM
global.packname = '+6288299601177\'Zenoxys'
global.author = 'Zyhkss'

global.wm = '© Zyhkss'
global.wait = '_*tunggu sedang diproses...*_'
global.eror = '_*Server Error*_'
global.benar = '✅'
global.salah = '❌'
global.dikit = 'dikit lagi'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
