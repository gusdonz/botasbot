const d = require('discord.js');

exports.run = (bot,message,args,tools) => {
	
	let user;
	if(!args[0]) user = message.author;
	else if(args[0] && !message.guild.members.get(message.mentions.members.first().id)) return message.channel.send('**Usuario não encontrado**');
	else user = message.mentions.members.first().user;
	
	//let user = message.mentions.members.first();
	//let guildmember = message.guild.members.get(user.id);
	// user ->guildmember <<< isso é de c++ burro nao pora é uma nota que o user fica dentro do guildmember
	
	console.log(user.game);
	message.channel.send(new d.RichEmbed()
		.setColor('RANDOM')
		.setAuthor(user.username, user.avatarURL)
		.setThumbnail(user.avatarURL, true)
		.addField("ID", user.id)
		.addField("Maior Role", message.guild.member(user.id).highestRole)
		//.addField("Jogando", user.game)
		.addField("Conta criada em", tools.atualData(user.createdAt.toString().slice(0, 25)))
		.addField("Entrou em", tools.atualData(message.guild.member(user.id).joinedAt.toString().slice(0, 25)))
		.setFooter("BOTAS v0.0.0.1 criado por Cantor Porno e Gustavo.")
		);
}