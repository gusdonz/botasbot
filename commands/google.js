const encode = require('strict-uri-encode');

exports.run = (bot, message, args, tools) => {
  let question = encode(args.join(' '));
  
  let link = `https://pt-br.lmgtfy.com/?q=${question}`;
  
  message.channel.send(`**<${link}>**`);
}