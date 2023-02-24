var produtos = [
    {
        nome : "Smartphone 5' Android",
        preco : 1200
    },
    {
        nome : "Notebook 4GB Windows 10",
        preco : 2100
    },
    {
        nome : "SmartTV 50' LED",
        preco : 8700
    }
 ];
 // no map foi usado para alterar o valor da array sem mudar os valores originais, sendo asssim
 // voce consegue ele atribuir em uma variavel os valores alterados
 var produtosComReajuste = produtos.map(function(item){
    return {
                nome : item.nome,
                preco : item.preco * 1.88
            }
 });
//  console.log(produtosComReajuste);

//O forEach ele percorre a array sem fazer o retorno, ele so permite executar algum procedimento em cada item
 produtosComReajuste.forEach(function(item){
    console.log(`${item.nome.padEnd(30)} - ${item.preco.toLocaleString("pt-BR",
     { style : "currency", currency : "BRL"})}`);
 });