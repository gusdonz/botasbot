exports.run = (bot, message, args, tools) => {
  if(isNaN(args[0])) return message.channel.send(":x: **Escolha o valor maximo.**");
  if(args[0] <= 0) return message.channel.send(":x: **Escolha um valor acima de 0.**");
  message.channel.send(`**${Math.floor(Math.random()*args[0])}**`);
}