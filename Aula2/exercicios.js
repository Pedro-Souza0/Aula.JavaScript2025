function ativ1()
{
    let num = document.getElementById("num").value;

    let qua = Number(num) * Number(num);
    let cub = Number(num) * Number(num) * Number(num);

    document.getElementById("mensagem").innerHTML ="O numero digitado foi " + num;
    document.getElementById("mensagem1").innerHTML ="O quadrado do numero digitado é " + qua;
    document.getElementById("mensagem2").innerHTML ="O cubo do numero digitado é " + cub;
}