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

function ativ7()
{
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;

    let res = (Number(n1) + Number(n2) + Number(n3)) / 3;

    document.getElementById("mensagem").innerHTML = "A media aritimetica das notas é " + res;
}

function ativ8()
{
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = Number(peso) / Number(altura)**2;

    document.getElementById("mensagem").innerHTML = "O IMMC é " + imc;
}

function ativ9()
{
    let prin = document.getElementById("prin").value;
    let taxa = document.getElementById("taxa").value;
    let tempo = document.getElementById("tempo").value;

    let par = Number(prin) + (1 + Number(taxa) *  Number(tempo) );   

    document.getElementById("mensagem").innerHTML = "Valor do montante: " + par;
}

function ativ10()
{
    let VH = document.getElementById("VH").value;
    let TH = document.getElementById("TH").value;

    let salario = Number(VH) * Number(TH) * 30;

    document.getElementById("mensagem").innerHTML = "O salario é " + salario;
}

function ativ11()
{
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    if(Number(n1) == Number(n2))
    {
        document.getElementById("mensagem").innerHTML = "Os numeros são iguais;";
    }else{
        document.getElementById("mensagem").innerHTML = "Os numeros são diferentes;";
    }
}

function ativ12()
{
    let A = document.getElementById("A").value;
    let B = document.getElementById("B").value;
    let C = document.getElementById("C").value;

    if(Number(A) + Number(B) == Number(C))
    {
        document.getElementById("mensagem").innerHTML = "A soma dos primeiros numeros é igual ao terceiro; " + A + " + " + B + " = " + C;
    }else if(Number(A) + Number(B) > Number(C))
    {
        document.getElementById("mensagem").innerHTML = "A soma dos primeiros numeros é maior que o terceiro; " + A + " + " + B + " > " + C;
    }else if(Number(A) + Number(B) < Number(C))
    {
        document.getElementById("mensagem").innerHTML = "A soma dos primeiros numeros é menor que o terceiro; " + A + " + " + B + " < " + C;
    }
}
