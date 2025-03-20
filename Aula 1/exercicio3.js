var valor = Number(prompt("Digite o valor da prestacao"));
var juros = Number(prompt("Digite o a taxa de juros"));
var tempo = Number(prompt("Digite o tempo de atraso"));

var valorparcela= valor+(valor*(juros**2/100)*tempo);


document.write("o valor da parcela e "+ valorparcela +"<br" );