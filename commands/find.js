const d = require('discord.js');
const sm = require('string-similarity');

exports.run = (bot, message, args, tools) => {
  //message.delete();
  if(!args[0]) return tools.embed(message.channel, 'Por favor, especifique um usuário.');
                                        
  let members = [];
  let indexes = [];
  
  message.guild.members.forEach(function (member) {
    members.push(member.user.username);
    indexes.push(member.id);
  })
  
  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;
  
  let member = message.guild.members.get(indexes[members.indexOf(username)]);
  
  message.channel.send(`Você disse ${member} ?`);
} 