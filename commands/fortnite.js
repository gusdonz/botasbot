const fortnite = require('fortnite');
const d = require('discord.js');
const cfg = require('../config.json');


const ft = new fortnite("7c69ef8d-433e-419f-9f46-aa3ee64949ac");

exports.run = (bot, message, args, tools) => {
  message.delete();
  function genHex()
  {
    return "0x" + Math.floor(Math.random()*16777215).toString(16);
  }
  
  let platform;
  let username;

  if(!['pc', 'xbl', 'psn'].includes(args[0])) return tools.embed(message.channel, `**Por favor, inclua uma plataforma: ${cfg.prefix}fortnite < pc | xbl | psn> <usuário>**`);
  
  if(!args[1]) return tools.embed(message.channel, `**Por favor, inclua um usuário: ${cfg.prefix}fortnite < pc | xbl | psn> <usuário>**`)
  
  platform = args[0];
  username = args[1];
  
  let data = ft.getInfo(username, platform).then(data => {
    let stats = data.lifetimeStats;
    
    let kills = stats.find(s => s.stat == 'kills');
    let wins = stats.find(s => s.stat == 'wins');
    let kd = stats.find(s => s.stat == 'kd');
    let mPlayed = stats.find(s => s.stat == 'matchesPlayed');
    let tPlayed = stats.find(s => s.stat == 'timePlayed');
    let asTime = stats.find(s => s.stat == 'avgSurvivalTime');
    
    let embed = new d.RichEmbed()
    .setTitle(`Estatísticas para ${data.username}`)
    .setColor(genHex())
    .addField("Abates", kills.value, true)
    .addField("Vitórias", wins.value, true)
    .addField("A/M", kd.value, true)
    .addField("Partidas jogadas", mPlayed.value, true)
    .addField("Tempo de jogo", tPlayed.value, true)
    .addField("Media de tempo sobrevivido", asTime.value, true)
    
    message.channel.send(embed);
    
  }).catch(e => {
    console.log(e);
    tools.embed(message.channel, `**${e}**`)
  })
}