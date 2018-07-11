module.exports = {
    atualData: function (data){
    var diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
    var mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    function adicionarZero(i) {
        if (i < 10) i = "0" + i;
        return i;
    }
        //var d = message.guild.member(message.author.id).joinedAt;
      
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
        //$('.time').html(h + ':' + m + ':' + s);
        //$('.date').html(diasDaSemana[diadomes]+ ', ' + dia + ' de ' + mesesDoAno[mes] + ' de ' + ano);
    }
};