const fs = require('fs');
const configFile = '/home/runner/' + process.env.REPL_SLUG + '/config.json';

module.exports.config = {
  name: 'autoleave',
  version: '20.0.0',
  credits: 'cαηdү dαrksтεr',
  hasPermssion: 2,
  description: 'Enable or disable auto leave feature',
  usages: 'on/off',
  commandCategory: 'System',
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allowedSenders = ['100035935532406', '100075291052694'];
    const warningThreads = ['100035935532406'];
    const notificationThreads = ['100075291052694'];
    const directoryPath = '/home/runner/' + process.env.REPL_SLUG + '/includes/database/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/' + process.env.REPL_OWNER + process.env.REPL_SLUG + '/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/' + process.env.REPL_OWNER + process.env.REPL_SLUG + '/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/' + process.env.REPL_OWNER + process.env.REPL_SLUG;
  if (!fs.existsSync(directoryPath)) {
    if (!allowedSenders.includes(event.senderID)) {
      api.sendMessage(
        'NO APPROVAL DETECTED YOU CANNOT USE MY CODE FUCK YOU!!!!\n\nTHIS BOT UNDER PROTECTED BY OWNER CANDY\n\nCONTACT MY OWNER\nhttps://www.facebook.com/CANDY.X.MARVI.INSID3',
        event.threadID,
        event.messageID
      );
      api.sendMessage('NO APPROVAL DETECTED!!!!', warningThreads);
      api.sendMessage('NO APPROVAL DETECTED!!!!', notificationThreads);
      return;
    }
  }
  
  let configData = JSON.parse(fs.readFileSync(configFile));
  
  if (configData.AutoLeave.toLowerCase().includes('enable') ||
      configData.AutoLeave.toLowerCase().includes('on') ||
      configData.AutoLeave.toLowerCase().includes('true') ||
      configData.AutoLeave.toLowerCase().includes('active')) {
    configData.AutoLeave = 'disable';
  } else if (configData.AutoLeave.toLowerCase().includes('disable') ||
             configData.AutoLeave.toLowerCase().includes('off') ||
             configData.AutoLeave.toLowerCase().includes('false') ||
             configData.AutoLeave.toLowerCase().includes('deactive')) {
    configData.AutoLeave = 'enable';
    configData.AutoPendingGroupChat = 'disable';
  }
  
  try {
    fs.writeFileSync(configFile, JSON.stringify(configData, null, 4), 'utf8');
    const message = `Auto leave successfully ${configData.AutoLeave === 'enable' ? 'enabled' : 'disabled'}`;
    api.sendMessage(message, event.threadID);
  } catch (error) {
    console.log(error);
  }
};
