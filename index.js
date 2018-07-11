const d = require('discord.js');
const fs = require('fs');
const cfg = require('./config.json');
const tools = require('./functions.js');
const join = require('./new user.js');

var bot = new d.Client();

bot.on("ready", () => {
	//debug
	bot.user.setActivity('xvideos.com');
});

bot.on("guildMemberAdd", member => {
			
			try{
    				fs.writeFileSync(`./users/${member}.json`, JSON.stringify(join.newUser(member)), null, 2);
				
				 }
			catch (e){
    				console.log(e);
				 	 }
	 console.log(member);
	 member.guild.channels.find('name', 'log').send(`Bem-Vindo, ${member}`);
   member.addRole(member.guild.roles.find("name","lol teemo gg"));

});

bot.on('message', message => {
	let msg = message.content.toUpperCase();
	let sender = message.author;
	let args = message.content.slice(cfg.prefix.length).trim().split(" ");

	let cmd = args.shift().toLowerCase();

	if (!msg.startsWith(cfg.prefix)) return;
	if (message.author.bot) return;

	try {

		let cmdFile = require(`./commands/${cmd}.js`);
		cmdFile.run(bot, message, args, tools);

	} catch (e) {

		console.log(e.message);

	} finally {

		console.log(`${message.author.tag} utilizou o comando ${cmd}`);

	}

});

bot.login(cfg.token);