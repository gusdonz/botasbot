exports.run = (bot, message, args, tools) => {
  let r = ['Definitivamente',
           'Minhas fontes dizem que sim',
           'Segundo meus calculos a resposta é sim',
           'Positivo',
           'Parece bom',
           'Acho que sim',
           'Duvidoso',
           'Boa pergunta',
           'Não sei',
           'Minhas fontes dizem que não',
           'Segundo meus calculos a resposta é sim',
           'Negativo',
           'Jamais',
           'Não',
           'Sim',
           'Acho que não',
           'Talvez',
           'Desconheço dessa informação',
           'Pergunte para outro'];
  message.channel.send(r[Math.floor(Math.random()*r.length)] + ', ' + `**${message.author.username}.**`);
}