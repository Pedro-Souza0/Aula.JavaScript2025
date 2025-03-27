function ativ1()
{
    let num = document.getElementById("num").value;

    let qua = Number(num) * Number(num);
    let cub = Number(num) * Number(num) * Number(num);

    document.getElementById("mensagem_ativ_1").innerHTML ="O numero digitado foi " + num;
    document.getElementById("mensagem_ativ_1.1").innerHTML ="O quadrado do numero digitado é " + qua;
    document.getElementById("mensagem_ativ_1.2").innerHTML ="O cubo do numero digitado é " + cub;
}

function ativ2()
{
    let F = document.getElementById("F").value;

    let C = ((Number(F) - 32) * 5) / 9;

    document.getElementById("mensagem_ativ_2").innerHTML ="A temperatura em Fahrenheit foi " + F + "<br> A temperatura em graus Celsius é " + C;
}

function ativ3()
{
    let pres = document.getElementById("pres").value;
    let taxa = document.getElementById("taxa").value;
    let tempo = document.getElementById("tempo").value;

    let par = Number(pres) + ( Number(pres) * ( Number(taxa)**2 / 100 ) * Number(tempo) );   

    document.getElementById("mensagem_ativ_3").innerHTML = "Valores informados: <br> Prestação: " + pres + "<br> Taxa: " + taxa + "<br> Tempo: " + tempo + "<p> Valor atualizado: " + par + "</p>";
}

function ativ4()
{
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    let area = ( Number(altura) * Number(base) ) / 2 ;   

    document.getElementById("mensagem").innerHTML = "Base: " + base + "<br> Altura: " + altura + "<p> Area do triangulo: " + area + "</p>";
}

function ativ5()
{
    let lado = document.getElementById("lado").value;

    let area = Number(lado) ** 2;   

    document.getElementById("mensagem").innerHTML = "Lado do quadrado: " + lado + "<p> Area do quadrado: " + area + "</p>";
}

function ativ6()
{
    let qtde = document.getElementById("qtde").value;
    let preco = document.getElementById("preco").value;

    let sub = Number(qtde) * Number(preco); 
    let desc = Number(sub) * 0.10;
    let total = Number(sub) - Number(desc);  

    document.getElementById("mensagem").innerHTML = "Valor total: " + sub + "<br> Desconto: " + desc + "<p> Valor com desconto: " + total + "</p>";
}