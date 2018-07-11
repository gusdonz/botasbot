const d = require('discord.js');

exports.run = (bot, message, args, tools) => {

  if(!message.member.hasPermission('KICK_MEMBERS')) return tools.embed(message.channel, '**Você não é um administrador.**');
	
  
  let user;
  let reason;
  let log;
  
  user = message.mentions.users.first();
  if(!user) return tools.embed(message.channel, '**Você deve mencionar alguém.**');
  if(user == message.author) return tools.embed(message.channel, '**Você não pode se expulsar.**');
	if(!user.kickable) return tools.embed(message.channel, '**Este usuário não pode ser expulso.**');
  //^ isso tava dando problema nao sei porque
	
	// thiago jest gejemaaa
  
  reason = args.slice(1).join(' ');
  if(!reason) return tools.embed(message.channel, '**Você deve colocar um motivo.**');
  
  log = message.guild.channels.find('name', 'log');
  if(!log) return tools.embed(message.channel, '**Canal de logs não encontrado.');
  
	message.guild.member(user.id).kick(reason);
	
  log.send(new d.RichEmbed()
		.setColor('RANDOM')
		.setAuthor(`Usuario expulso: ${user.username}`, user.avatarURL)
    //.addField("Usuario", user.username)
		.addField("Autor", message.author)
		.addField("Motivo", reason)
          );

}