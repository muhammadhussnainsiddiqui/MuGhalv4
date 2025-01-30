const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot2",
  version: "2.0.1",
  hasPermssion: 2,
  credits: "Candy",
  description: "Reply when someone write bot and autoreact",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Hi I am Robot made by Candy papa", "Please don't disturb me", "Love uhh janeman ;*","Meri Jann Kya Hua kesi ny lun ni diya kia aj apki phudi me","I Love to feed your chest always","Baby Kaho tO lip Kiss Kar Lu","Jann aap Mere ho mere elawa kesi se mat chudwana","Date pe chale" ,"meri jan aj rat ib ao na mast chodon ga" , "meri sachi btao kbhi fingering ki hy" , "Aww come on baby i lun you "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("hansi") || input2.includes("hihi") || input2.includes("maza") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("bete")){
					        	return api.setMessageReaction("😹", event.messageID, (err) => {}, true)
} 
    if(input2.includes("dead") || input2.includes("ake") || input2.includes("bhag") || input2.includes("mtlbi") || input2.includes("death") || input2.includes("gone") || input2.includes("bewafa") || input2.includes("afsos") || input2.includes("fyt") || input2.includes("fight") || input2.includes("nafrat") || input2.includes("accident") || input2.includes("divorce") || input2.includes("break") || input2.includes("sad") || input2.includes("alone") || input2.includes("hate") || input2.includes("need") || input2.includes("mer") || input2.includes("janaza")){
					        	return api.setMessageReaction("😿", event.messageID, (err) => {}, true)
    }
if(input2.includes("candy") || input2.includes("Candy") || input2.includes("CANDY") || input2.includes("@»❯𓅋«⌈𝐂𝐀𝐍𝐃𝐘⌉»٭浴") ||             input2.includes("@合") ||           input2.includes("Marvi") || input2.includes("hasshid") ||  input2.includes("marvi")){
					        	return api.setMessageReaction("💙", event.messageID, (err) => {}, true)
                           }
if(input2.includes("pak") || input2.includes("Pakistan") || input2.includes("Allah") || input2.includes("Muhammad") || input2.includes("holy") || input2.includes("Quran") || input2.includes("quran") || input2.includes("allah") || input2.includes("ali") ||    input2.includes("uski") || input2.includes("Ali") || input2.includes("hussain") || input2.includes("Hussain")){
					        	return api.setMessageReaction("💟", event.messageID, (err) => {}, true)
} 
  if(input2.includes("😁") || input2.includes("bol") ||  input2.includes("call")){
					        	return api.setMessageReaction("😺", event.messageID, (err) => {}, true)
  }
  if(input2.includes("bestie") || input2.includes("couple") ||  input2.includes("😍")){
					        	return api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
  }
  if(input2.includes("bot") || input2.includes("Bot") ||  input2.includes("kiss")){
					        	return api.setMessageReaction("🫦", event.messageID, (err) => {}, true)
  }
if(input2.includes("ishq") || input2.includes("pyar") ||  input2.includes("muhabt")){
					        	return api.setMessageReaction("😇", event.messageID, (err) => {}, true)
                                                  }
if(input2.includes("hain") || input2.includes("heran") ||  input2.includes("😮")){
					        	return api.setMessageReaction("🤯", event.messageID, (err) => {}, true)
}
if(input2.includes("thank") || input2.includes("you") || input2.includes("wel") || input2.includes("yra") || input2.includes("tum") || input2.includes("tujhe") || input2.includes("apny") || input2.includes("kid") || input2.includes("jane") || input2.includes("bye") ||  input2.includes("yr") || input2.includes("acha") || input2.includes("janta") || input2.includes("bird") ||        input2.includes("kesy") || input2.includes("hal") || input2.includes("marvi") || input2.includes("pta") || input2.includes("video") || input2.includes("wah")){
					        	return api.setMessageReaction("🫶🏻", event.messageID, (err) => {}, true)
   }
  if(input2.includes("thank") || input2.includes("cute") || input2.includes("nice") || input2.includes("welcome") || input2.includes("osm") || input2.includes("kamal") || input2.includes("piyara") || input2.includes("seri") ||        input2.includes("insa") || input2.includes("love") || input2.includes("dram") || input2.includes("koj") || input2.includes("bac") || input2.includes("kuch")){
					        	return api.setMessageReaction("💞", event.messageID, (err) => {}, true)
                      }
  if(input2.includes("tune") || input2.includes("oye") || input2.includes("sun") || input2.includes("come") || input2.includes("jan") || input2.includes("ata") || input2.includes("nah") || input2.includes("banao") || input2.includes("dark") || input2.includes("tera") ||        input2.includes("kya") || input2.includes("show") || input2.includes("add") || input2.includes("bolo") || input2.includes("hon") || input2.includes("rhi") || input2.includes("dekh") || input2.includes("are")){
					        	return api.setMessageReaction("🤝", event.messageID, (err) => {}, true)
  }
  if(input2.includes("thank") || input2.includes("you") || input2.includes("finger") || input2.includes("🤫") || input2.includes("marry") || input2.includes("send") || input2.includes("jan") || input2.includes("lag") || input2.includes("baby") || input2.includes("insan") ||        input2.includes("pagal") || input2.includes("comm") || input2.includes("nop") || input2.includes("dost") || input2.includes("kamena") || input2.includes("num")){
					        	return api.setMessageReaction("🌝", event.messageID, (err) => {}, true)
  }

if(input2.includes("job") || input2.includes("beh") || input2.includes("chup") || input2.includes("viyah") || input2.includes("tech") || input2.includes("smart") || input2.includes("robot") || input2.includes("crack") ||        input2.includes("after") || input2.includes("lofer") || input2.includes("tha") || input2.includes("good") || input2.includes("friend") || input2.includes("hn")){
					        	return api.setMessageReaction("😻", event.messageID, (err) => {}, true)
}
  if(input2.includes("😐") || input2.includes("😊") || input2.includes("😱") || input2.includes("🤧") || input2.includes("💘") || input2.includes("feel") || input2.includes("babu") ||      input2.includes("please") ||       input2.includes("pgl") || input2.includes("uff") ||        input2.includes("close") || input2.includes("qare") || input2.includes("nas") || input2.includes("faz") || input2.includes("aise") || input2.includes("aye")){
					        	return api.setMessageReaction("💓", event.messageID, (err) => {}, true)
  }
  if(input2.includes("what") || input2.includes("omg") ||  input2.includes("😯")){
					        	return api.setMessageReaction("😮", event.messageID, (err) => {}, true)
  }
if(input2.includes("😚") || input2.includes("😙") || input2.includes("😗") || input2.includes("😘") || input2.includes("🥰") || input2.includes("🥀") || input2.includes("😇") || input2.includes("😛") ||      input2.includes("😍") || input2.includes("😝") || input2.includes("🤭") || input2.includes("🙄") || input2.includes("😒")){
					        	return api.setMessageReaction("🫰🏻", event.messageID, (err) => {}, true)
                                                                         }

  if(input2.includes("🤪") || input2.includes("❤️") || input2.includes("🤤") || input2.includes("🤥") || input2.includes("🤓") || input2.includes("🖤") || input2.includes("👀") || input2.includes("🙊") ||  input2.includes("😴") || input2.includes("💕") || input2.includes("👐") || input2.includes("🌹") || input2.includes("💐")){
					        	return api.setMessageReaction("💓", event.messageID, (err) => {}, true)
  }
  if(input2.includes("😏") || input2.includes("😇") || input2.includes("😌") || input2.includes("🤨") || input2.includes("🧐") || input2.includes("❣️") || input2.includes("😾") || input2.includes("😼") ||      input2.includes("😽") || input2.includes("😸") || input2.includes("🤐") || input2.includes("😳") || input2.includes("🤔")){
					        	return api.setMessageReaction("🤎", event.messageID, (err) => {}, true)
  }
  if(input2.includes("😃") || input2.includes("😅") ||  input2.includes("🤣")){
					        	return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
  }
  if(input2.includes("fuck") || input2.includes("chut") || input2.includes("gali") || input2.includes("use") || input2.includes("kut") || input2.includes("randi") || input2.includes("bc") || input2.includes("bsdk") || input2.includes("bkl") || input2.includes("gandu") || input2.includes("mc") || input2.includes("chod") || input2.includes("lun") || input2.includes("lora") || input2.includes("chutiYa")){
					        	return api.setMessageReaction("😈", event.messageID, (err) => {}, true)
}


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
