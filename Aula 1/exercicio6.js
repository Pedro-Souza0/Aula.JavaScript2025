var qtd = Number(prompt(" Digite a quanidade de produtos "));
var preco = Number(prompt(" Digite o valor do produto"));

var subtotal=qtd*preco;
document.write("o valor o subtotal e " + subtotal + "<br");
document.write("o valor do produto sobre o desconto e de " + subtotal*0.10 + "<br");
 var desconto =