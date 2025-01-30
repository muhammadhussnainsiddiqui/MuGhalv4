const fs = require('fs');

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
