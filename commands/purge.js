exports.run = (bot, message, args, tools) => {
  message.delete()
  .then(purge) 
  function purge(){
    if (isNaN(Number(args[0]))) return tools.embed(message.channel, '**Por favor, especifique um valor**');
    if(Number(args[0]) > 100) return tools.embed(message.channel, '**Por favor, especifique um valor abaixo de 100**');
    
    message.channel.bulkDelete(Number(args[0]));
  }
}