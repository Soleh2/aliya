let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/09cf33274b9e6d9fd562e.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "Alya-bot",
        "description": `
*Alya-bot*
        
1 Grup / 30 Hari
Rp. 15,000 Dana, Gopay
Rp. 20,000 Pulsa Telkom

1 Premium / 30 Hari
Rp. 5,000 Dana, Gopay
Rp. 10,000 Pulsa Telkom

tertarik? hubungi:
@6281252848955 (Nando)
@62858157008613 (Alya)
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4696956640315324"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4696956640315324",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6283128734012@s.whatsapp.net"
        },
        "footerText": "wa.me/6281252848955\nwa.me/62858157008613"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^(sewabot|sewa)$/i

module.exports = handler
