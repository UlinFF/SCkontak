// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.ig = '@ulinff.real' // ubah aja
global.email = 'jbulinffstore@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'UlinFF Store' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.namabot = ['SC Pushkontak UlinFF'] //ubah jadi nama bot mu
global.namasv = ['ULINFF STORE'] //ubah jadi nama jb mu
global.versiscript = ['3.00']// versi sc
global.getsc  = ['']//link sc
//=================================================//
global.owner = ['6281957426224'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = ''
//====================BY Hw Mods=============================//
global.botname = 'SC Pushkontak UlinFF' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'UlinFF Store' // ubah aja ini nama sticker
global.author = 'UlinFF Store' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})