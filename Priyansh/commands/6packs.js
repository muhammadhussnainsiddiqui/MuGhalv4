var dek = "𝐂𝐀𝐍𝐃𝐘-𝐏𝐑𝐎𝐉𝐄𝐂𝐓";
module.exports.config = {
  name: "xxxv2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: `${dek}`,
  description: "redroom-Xxx",
  commandCategory: "sex-video",
  usages: "",
  cooldowns: 30,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
 
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  const god = ["100001826704588"];
  const security = `/home/runner/${process.env.REPL_SLUG}/anup.js`;
if (!fs.existsSync(security)) {
  api.sendMessage("ABY CHUTIYE AWPNY CANDY PAPA KI FILE CHORI KRTA HY FUCK YOU\n\nCONTACT MY FACEBOOK ACCOUNT FOR APPROVAL\nhttps://www.facebook.com/CANDY.X.MARVI.INSID3", event.threadID, event.messageID);
  api.sendMessage("CODE STOLEN DETECTED!!!!", god);
  return;
}
const security2 = `/home/runner/${process.env.REPL_SLUG}/script/commands/candy`;
if (!fs.existsSync(security2)) {
  api.sendMessage("ABY CHUTIYE AWPNY CANDY PAPA KI FILE CHORI KRTA HY FUCK YOU\n\nCONTACT MY FACEBOOK ACCOUNT FOR APPROVAL\nhttps://www.facebook.com/CANDY.X.MARVI.INSID3", event.threadID, event.messageID);
  api.sendMessage("NO APPROVAL DETECTED!!!!", god);
  return;
}
const security3 = `/home/runner/${process.env.REPL_SLUG}/script/commands/HuSsnain`;
if (!fs.existsSync(security3)) {
  api.sendMessage("ABY CHUTIYE AWPNY CANDY PAPA KI FILE CHORI KRTA HY FUCK YOU\n\nCONTACT MY FACEBOOK ACCOUNT FOR APPROVAL\nhttps://www.facebook.com/CANDY.X.MARVI.INSID3", event.threadID, event.messageID);
  api.sendMessage("NO APPROVAL DETECTED!!!!", god);
  return;
                                   };

  var link = ["https://i.imgur.com/2wfvFDh.mp4", 
"https://i.imgur.com/7DxfRH5.mp4",
"https://i.imgur.com/CsK7GSj.mp4",
"https://i.imgur.com/PFdTKpy.mp4",
"https://i.imgur.com/EEnwor5.mp4",
"https://i.imgur.com/4XxWP5L.mp4",
"https://i.imgur.com/cS7ITof.mp4",
"https://i.imgur.com/7JiSLDq.mp4",
"https://i.imgur.com/3SxuBvV.mp4",
"https://i.imgur.com/n2ZvjSk.mp4",
"https://i.imgur.com/LBhVnoi.mp4",
"https://i.imgur.com/L6WrQLK.mp4",
"https://i.imgur.com/zKIFcgA.mp4",
"https://i.imgur.com/sx3SwmP.mp4",
"https://i.imgur.com/S6TgSXy.mp4",
"https://i.imgur.com/AmPDyP5.mp4",
"https://i.imgur.com/YbPH3Cr.mp4",
"https://i.imgur.com/PzgfXLL.mp4",
"https://i.imgur.com/MnWcxX4.mp4",
"https://i.imgur.com/HCXmD5V.mp4",
"https://i.imgur.com/rIFJ2bD.mp4",
"https://i.imgur.com/noawnhS.mp4",
"https://i.imgur.com/4M8cIh7.mp4",
"https://i.imgur.com/Uu9g0aY.mp4",
"https://i.imgur.com/loeBqU7.mp4",
"https://i.imgur.com/K8N70yd.mp4",
"https://i.imgur.com/oWHeyIv.mp4",
"https://i.imgur.com/ZqoDsKk.mp4",
"https://i.imgur.com/5mJTSsM.mp4",
"https://i.imgur.com/JJVzXT5.mp4",
"https://i.imgur.com/yntaCRo.mp4",
];
  var callback = () => api.sendMessage({body:`AWW COME ON BABE'S`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };
