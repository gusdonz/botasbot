module.exports = {
	embed: function(channel, message, timer) {
		channel = channel.channel || channel;

		channel.send({embed: {
			title: message,
      color: Math.floor(Math.random()*16777215),
      
		}}).then(msg => {
      
    })
	}
}