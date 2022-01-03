let handler = async (m) => {
    m.reply(`
┌[ *Donasi* ]
├ 081252848955 Gopay/dana/pulsa
└────
`.trim())
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
