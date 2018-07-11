const d = require('discord.js');
const cfg = require('../config.json');

exports.run = (bot, message, args, tools) => {
	message.delete();
  if(!message.member.hasPermission('MUTE_MEMBERS')) return tools.embed(message.channel, '**Você não é um administrador.**');
  
  let user;
  let reason;
  let time;
  let log;
  
	
  user = message.mentions.users.first();
  if(!user) return tools.embed(message.channel, '**Você deve mencionar alguém.**');
	if(user == bot.user) return message.channel.send(`**ce não pode me mutar vagabundo**`);
  if(message.guild.member(user.id).roles.has(message.guild.roles.find("name","Muted").id)) return tools.embed(message.channel, '**Este usuario ja esta mutado.**');
  
  reason = args.slice(2).join(' ');
  if(!reason) return tools.embed(message.channel, '**Você deve colocar um motivo.**');
  
  time = Number(args.slice(1, 2).join(' ')*60000);
  if(!time || Number.isInteger(time) === false) return tools.embed(message.channel, `Você deve usar **${cfg.prefix}mute @usuario <tempo> <motivo>**`);
  
	
	
  log = message.guild.channels.find('name', 'log');
  if(!log) return tools.embed(message.channel, '**Canal de logs não encontrado.');
  
  log.send(new d.RichEmbed()
		.setColor('RANDOM')
		.setAuthor("Usuario mutado", user.avatarURL)
		.addField("Motivo", reason, true)
		.addField("Usuario", user, true)
    .addField("Tempo", time/60000 + " minuto(s)", true)
		.addField("Autor", message.author, true)
          );
 
    message.guild.member(user.id).addRole(message.guild.roles.find("name","Muted"));
  
     setTimeout(function(){ 
      message.guild.member(user.id).removeRole(message.guild.roles.find("name","Muted"));
			 
			}, time);
	console.log(time);
}