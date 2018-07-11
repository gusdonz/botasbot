exports.run = (bot,message,args,tools) => {
  message.channel.send(args.toString().replace(/,/gi, " "));
  message.delete();
}