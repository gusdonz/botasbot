module.exports = {
	embed: function(channel, message, timer) {
		channel = channel.channel || channel;

		channel.send({embed: {
			description: message,
      color: Math.floor(Math.random()*16777215),
      
		}}).then(msg => {
      
    })
	},
	atualData: function (data){
    var diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
    var mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    function adicionarZero(i) {
        if (i < 10) i = "0" + i;
        return i;
    }
				data = new Date(data);
		
        var h = adicionarZero(data.getHours());
        var m = adicionarZero(data.getMinutes());
        var s = adicionarZero(data.getSeconds());
        
        var diadomes = diasDaSemana[data.getDay()];
        var dia = data.getUTCDate();
        var mes = mesesDoAno[data.getMonth()];
        var ano = data.getFullYear();
        
        var time = h + ":" + m + ":" + s;
        var date = diadomes + " " + dia + " de " + mes + " de " + ano + " " + time;
        
        return date;
    }
	
}