const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: "list",
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*➟➟➟➟➟➟➟➟➟➟➟➟*
│ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*➟➟➟➟➟➟➟➟➟➟➟➟*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1* • OWNER
*├ 2* • TRANSLATE
*├ 3* • AI
*├ 4* • SEARCH
*├ 5* • DOWNLOAD
*├ 6* • MAIN
*├ 7* • GROUP
*├ 8* • DIREC LINK 
*├ 9* • MOVIE
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/Qv6pWXW9/2530.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──────OWNER COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *restart* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *f* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *del* 
*➟➟➟➟➟➟➟➟_📑_*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);
                        break;
                    case '2':               
                        reply(`*◈╾──────TRANSLATE COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *trt* 
*➟➟➟➟➟➟➟➟_📑_*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);
                        break;
                    case '3':               
                        reply(`*◈╾──────AI COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *ai* 
*➟➟➟➟➟➟➟➟_📑_*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);
                        break;
                    case '4':               
                        reply(`*◈╾──────SEARCH COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *yts* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *github* 
*➟➟➟➟➟➟➟➟_📑_*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);
                        break;
                    case '5':               
                        reply(`*◈╾──────DOWNLOAD COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *apk* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *twitter* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *gdrive* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *mediafire* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *fb* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *td* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *song* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *video* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *dl* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *dl2* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *mega* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *tiktok* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *img* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *x* 
*➟➟➟➟➟➟➟➟_📑_*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);
                        break;
                    case '6':               
                        reply(`*◈╾──────MAIN COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *alive* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *menu* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *team* 
*➟➟➟➟➟➟➟➟_📑_*
│ • *system* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *ping* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *vv* 
*➟➟➟➟➟➟➟➟_📑_*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);
                        break;
                    case '7':               
                        reply(`*◈╾──────GROUP COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *promote* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *demote* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *kick* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *add* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *admins* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *tagall* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *getpic* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *lock* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *upgname* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *getdec* 
*➟➟➟➟➟➟➟➟_📑_*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);
                       break;
                    case '8':               
                        reply(`*◈╾──────DIRECT LINK DOWNLOAD COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *upmv*
*➟➟➟➟➟➟➟➟_📑_*
│ • *upme* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *upzip* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *mkv* 
*➟➟➟➟➟➟➟➟_📑_*
│ • *uptv* 
*➟➟➟➟➟➟➟➟_📑_*

> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);

                        break;
                    case '9':               
                        reply(`*◈╾──────MOVIE COMMAND LIST──────╼◈*

*➟➟➟➟➟➟➟➟_📑_*
│ • *mv* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *minfo* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *mvsin* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *mvdl* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *dllink* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *sd* 
*➟➟➟➟➟➟➟➟_📑_*
*➟➟➟➟➟➟➟➟_📑_*
│ • *gini* 
*➟➟➟➟➟➟➟➟_📑_*


> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`);


                        break;
                    default:
                        reply("*Please select a valid option🔴*");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
