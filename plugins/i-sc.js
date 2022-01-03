let handler  = async (m, { conn, args }) => {
   m.reply(`Bot Ini Menggunakan Script : https://github.com/Nurutomo/wabot-aq`)
}
 
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
