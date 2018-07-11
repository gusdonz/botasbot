const shorten = require('isgd');

exports.run = (bot, message, args, tools) => {
  if (!args[0]) return message.channel.send('**Utilize: ?shorten <URL> [titulo]**');

  if (!args[1]) {
    shorten.shorten(args[0], function(res) {
      if(res.startsWith('Error:')) return message.channel.send('**Por favor utilize uma URL valida.**');
      
      message.channel.send(`**${res}**`);  
    })
  } else {
    shorten.custom(args[0], args[1], function(res) {
      if(res.startsWith('Error:')) return message.channel.send(`**${res}**`);
      message.channel.send(`**<${res}>**`);
    })
  }
}