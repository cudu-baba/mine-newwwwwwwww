const config = require('../settings')
const { cmd, commands } = require('../lib/command')
  cmd({
  pattern: 'gini',
  react: '📑',
  category: 'download',
  desc: "ginisisilacartoon.net",
  'filename': __filename
}, async (_0x5049fe, _0x194cab, _0x31c6bb, {
  from: _0x2287e7,
  q: _0x4564d6,
  isDev: _0x2a68be,
  reply: _0xc4807
}) => {
  try {
    if (!_0x4564d6) {
      return await _0xc4807("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x2e5011 = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0x4564d6);
    const _0x1a1ec0 = await axios.get(_0x2e5011);
    const _0x4099bd = cheerio.load(_0x1a1ec0.data);
    let _0x572788 = [];
    _0x4099bd("div.inner-video-cell").each((_0xaa6fae, _0x2e2bcc) => {
      const _0x4f6705 = _0x4099bd(_0x2e2bcc).find("div.video-title > a").attr('title');
      const _0x599247 = _0x4099bd(_0x2e2bcc).find("div.posted-time").text().trim();
      const _0x25bca3 = _0x4099bd(_0x2e2bcc).find("div.video-title > a").attr('href');
      const _0x5d44de = _0x4099bd(_0x2e2bcc).find("div.inner-video-thumb-wrapper img").attr("src");
      if (_0x4f6705 && _0x25bca3) {
        _0x572788.push({
          'title': _0x4f6705,
          'postedTime': _0x599247,
          'episodeLink': 'https://ginisisilacartoon.net/' + _0x25bca3,
          'imageUrl': _0x5d44de
        });
      }
    });
    if (_0x572788.length === 0x0) {
      return await _0xc4807("No results found for: " + _0x4564d6);
    }
    let _0x22c31b = "*`🎬 PANDA OFC BOT CARTOON SERACH RESULT 🎬`*" + _0x4564d6 + ":*\n\n";
    _0x572788.forEach((_0x16cf4a, _0x35b536) => {
      _0x22c31b += '*' + (_0x35b536 + 0x1) + ".* " + _0x16cf4a.title + "\n🗓️ Posted: " + _0x16cf4a.postedTime + "\n🔗 Link: " + _0x16cf4a.episodeLink + "\n\n> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™";
    });
    const _0x5a1342 = await _0x5049fe.sendMessage(_0x2287e7, {
      'text': _0x22c31b
    }, {
      'quoted': _0x31c6bb
    });
    const _0x27a596 = _0x5a1342.key.id;
    _0x5049fe.ev.on("messages.upsert", async _0x9a7b7a => {
      const _0x171143 = _0x9a7b7a.messages[0x0];
      if (!_0x171143.message) {
        return;
      }
      const _0x14f608 = _0x171143.message.conversation || _0x171143.message.extendedTextMessage?.["text"];
      const _0x4a17a3 = _0x171143.key.remoteJid;
      const _0x14e10e = _0x171143.message.extendedTextMessage && _0x171143.message.extendedTextMessage.contextInfo.stanzaId === _0x27a596;
      if (_0x14e10e) {
        const _0x284411 = parseInt(_0x14f608.trim());
        if (!isNaN(_0x284411) && _0x284411 > 0x0 && _0x284411 <= _0x572788.length) {
          const _0x1d0aed = _0x572788[_0x284411 - 0x1];
          const _0x189e89 = "*❤️‍🔥 𝙲𝙰𝚁𝚃𝙾𝙾𝙽 𝙽𝙰𝙼𝙴 ❤️‍🔥* :- " + _0x1d0aed.title + "\n*🕛 𝚄𝙿𝙻𝙾𝙰𝙳 𝙳𝙰𝚃𝙴 🕛* :- " + _0x1d0aed.postedTime + "\n*🔎 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 𝙻𝙸𝙽𝙺 🔎* :- " + _0x1d0aed.episodeLink + "\n\n> 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™ ";
          const _0x456cc9 = {
            'image': {
              'url': _0x1d0aed.imageUrl
            },
            'caption': _0x189e89
          };
          await _0x5049fe.sendMessage(_0x4a17a3, _0x456cc9, {
            'quoted': _0x171143
          });
          const _0x175d46 = await axios.get(_0x1d0aed.episodeLink);
          const _0x1559da = cheerio.load(_0x175d46.data);
          const _0x32f8e7 = _0x1559da("div#player-holder iframe").attr('src');
          if (_0x32f8e7) {
            const _0x1a4a74 = 'https://api.fgmods.xyz/api/downloader/gdrive?url=' + _0x32f8e7 + "&apikey=mnp3grlZ";
            try {
              const _0xc4e6f4 = await axios.get(_0x1a4a74);
              const _0x46edb0 = _0xc4e6f4.data.result.downloadUrl;
              if (_0x46edb0) {
                await _0x5049fe.sendMessage(_0x4a17a3, {
                  'document': {
                    'url': _0x46edb0
                  },
                  'mimetype': "video/mp4",
                  'fileName': " 𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™ | " + _0x1d0aed.title + '.mp4',
                  'caption':  " *`𝐏ᴀɴᴅᴀ   𝐎ꜰᴄ   𝐁ᴏᴛ™`*"
                }, {
                  'quoted': _0x171143
                });
              } else {
                await _0xc4807("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x587198) {
              console.error("Error fetching the download link:", _0x587198);
              await _0xc4807("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0xc4807("No downloadable link found for this episode.");
          }
        } else {
          await _0xc4807("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x546741) {
    _0xc4807("*Error occurred while scraping!*");
    console.error(_0x546741);
  }
});
