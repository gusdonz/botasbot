const d = require('discord.js');

exports.run = (bot, message, args, tools) => {
	message.channel.send(new d.RichEmbed()
		.setColor('RANDOM')
		.setAuthor("" + message.guild.name, message.guild.iconURL)
		.setFooter("© " + message.guild.name, message.guild.iconURL)
		.setThumbnail(message.guild.iconURL)
		.addField(":man_in_tuxedo::skin-tone-2: Dono:", message.guild.owner.user.username, true)
		.addField(":key: ID do Dono:", message.guild.ownerID, true)
		.addField(":earth_americas: Pais do servidor:", message.guild.region, true)
		//.addField(":bust_in_silhouette: Membros:", message.guild.memberCount, true)
		.addField(":bust_in_silhouette: Membros:", message.guild.memberCount, true)
		.addField("Criado em", tools.atualData(message.guild.createdAt))
		.setFooter("BOTAS v0.0.0.1 criado por Cantor Porno e Gustavo.")
	);
}