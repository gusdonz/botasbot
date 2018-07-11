const d = require('discord.js');

exports.run = (bot, message, args, tools) => {
	message.delete();
  if(!message.member.hasPermission('MUTE_MEMBERS')) return tools.embed(message.channel, '**Você não é um administrador.**');
	
  let user;
	let log;
	
  user = message.mentions.users.first();
  if(!user) return tools.embed(message.channel, '**Você deve mencionar alguém.**');
  
  if(!message.guild.member(user.id).roles.has(message.guild.roles.find("name","Muted").id)) return tools.embed(message.channel, '**Este usuário já esta desmutado.**');
  
	log = message.guild.channels.find('name', 'log');
	if(!log) return tools.embed(message.channel, '**Canal de logs não encontrado.**');
	
  message.channel.send(new d.RichEmbed()
		.setColor('RANDOM')
		.setAuthor("Usuario desmutado", user.avatarURL)
     );
  
  
  message.guild.member(user.id).removeRole(message.guild.roles.find("name","Muted"));
}