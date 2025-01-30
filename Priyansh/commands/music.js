module.exports.config = {
	name: "music",
	version: "30.0.0",
	hasPermssion: 0,
	credits: "𝐂𝐀𝐍𝐃𝐘-𝐏𝐑𝐎𝐉𝐄𝐂𝐓",
	description: "Music from youtube",
	commandCategory: "utility",
	usages: "title",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args }) => {
  const fs = require("fs")
const ytdl = require('@distube/ytdl-core');
const Innertube = require("youtubei.js")
  let input = event.body;
    
    var text = input;     text = text.substring(7)
let data = input.split(" ");
  
if (data.length < 2) {               return api.sendMessage("⚠️Please put a title or name of the music.", event.threadID);
} 

const youtube = await new Innertube();
const search = await youtube.search(args.join(" "));
  api.sendMessage(`Searching ${args.join(" ")}`, event.threadID, event.messageID),
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
  ytdl(search.videos[0].url, {
     quality: "highestaudio",
     filter: 'audioonly'
  }).pipe(fs.createWriteStream(__dirname + `/data/${args.join(" ")}-${event.senderID}.mp3`)).on('close', function() {
    return api.sendMessage({body: search.videos[0].title, attachment: fs.createReadStream(__dirname + `/data/${args.join(" ")}-${event.senderID}.mp3`)}, event.threadID, () => {
      fs.unlinkSync(__dirname + `/data/${args.join(" ")}-${event.senderID}.mp3`)
    }, event.messageID)
  })
}
