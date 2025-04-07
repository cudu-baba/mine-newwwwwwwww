//========= alive command ===========

const config = require('../settings')
const {cmd , commands} = require('../lib/command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname}*

| *අනි සුදු මන් ඉන්නවා මොකද ඔයා කරන්නේ 🌝💗* *ඇයි ඔයා මාව හෙව්වේ කියන්නකෝ පැටියෝ 😌* *මම තමා අපේ අයේෂ් අයියා හදපු ලස්සනම සුටි panda බබා 🌝💗*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™
`
return await conn.sendMessage(from,{image: {url: "https://i.ibb.co/Qv6pWXW9/2530.jpg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

