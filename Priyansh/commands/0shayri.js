var Candy = "σωηεr cαηdч";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "pubg",
  version: "40.0.10",
  hasPermssion: 0,
  credits: `${Candy}`, 
  description: "All league Logo> [ 6 Logo ]",
  commandCategory: "logo",
  usages: " <number> <text>",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;
  if (args.length < 2) {
    return api.sendMessage(`Invalid command format! Use: pubg <Number> <Text>\n\nAvailable pubg Logo:\n\n»» ${global.config.PREFIX}pubg 1 <Text>\n»» ${global.config.PREFIX}pubg 2 <Text>\n»» ${global.config.PREFIX}pubg 3 <Text>\n»» ${global.config.PREFIX}pubg 4 <Text>\n»» ${global.config.PREFIX}pubg 5 <Text>:\n\nMade by σωηεr cαηdч®`, threadID, messageID);
  }
  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/candy/${type}_${name}.png`;
  let apiUrl, message;
  
  switch (type) {
    case "1":
      apiUrl = `https://candy-api-8-corereplit.replit.app/api/ephoto/coverpubg?text=${name}`;
      message = "[ PUBG 1 ]›text created:";
      break;
    case "2":
      apiUrl = `https://candy-api-8-corereplit.replit.app/api/ephoto/pubgc2?text=${name}`;
      message = "[ PUBG 2 ]›text created:";
      break;
    case "3":
      apiUrl = `https://candy-api-8-corereplit.replit.app/api/ephoto/pubgl1?text=${name}`;
      message = "[ PUBG 3 ]›text created:";
      break;
    case "4":
      apiUrl = `https://candy-api-8-corereplit.replit.app/api/ephoto/pubgl2?text=${name}`;
      message = "[ PUBG 4 ]›text created:";
      break;
    case "5":
      apiUrl = `https://candy-api-8-corereplit.replit.app/api/ephoto/pubgl3?text=${name}`;
      message = "[ PUBG 5 ]›text created:";
      break;
    default:
      return api.sendMessage(`Invalid logo type!`, threadID, messageID);
  }

  api.sendMessage("Please wait...", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
