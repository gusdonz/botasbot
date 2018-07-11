const d = require('discord.js');

exports.run = (bot, message, args, tools) => {
	message.delete();
  if(!message.member.hasPermission('BAN_MEMBERS')) return tools.embed(message.channel, '**Você não é um administrador.**');
  
  let user;
  let reason;
  let log;
  
  user = message.mentions.users.first();
  if(!user) return tools.embed(message.channel, '**Você deve mencionar alguém.**');
  
  reason = args.slice(1).join(' ');
  if(!reason) return tools.embed(message.channel, '**Você deve colocar um motivo.**');
  
  log = message.guild.channels.find('name', 'log');
  if(!log) return tools.embed(message.channel, '**Canal de logs não encontrado.');
  
  log.send(new d.RichEmbed()
		.setColor('RANDOM')
		.setAuthor(`Usuario banido: ${user.username}`, user.avatarURL)
    //.addField("Usuario", user.username)
		.addField("Autor", message.author)
		.addField("Motivo", reason)
          );
  
  message.guild.member(user.id).ban(reason);
}