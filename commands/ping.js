exports.run = (bot,message,args,tools) => {
  
  if(!args[0]) return tools.embed(message.channel, `**${bot.ping.toFixed(0)}**`);
}