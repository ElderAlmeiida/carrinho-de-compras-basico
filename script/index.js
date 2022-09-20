// Variavel para contagem de produto
var Produto = 0
// Função de adicionar produto
function addProduto () {
  // Incrementa produto  
  Produto++

  // Recebe o valor do input
   var pvalor = (Number(document.getElementById('addProduto').value))

    if(pvalor==0){
      alert('Valor Invalido')
      Produto--
    } else if(pvalor==String) {
      alert('Digite apenas numeros')
    } else {
       // cria variaves que recebe o elemento tabela e gera linhas e colunas 
   const tabela = document.getElementById('tp') 
   const div = document.createElement('tr')
   const nome = document.createElement('td')
   const preco = document.createElement('td')

   //seta classe do atributo 
   preco.setAttribute("class","preco")

   nome.innerHTML= `Produto ${Produto}`
   preco.innerHTML= pvalor.toFixed(2)
  
   // Implementa as colunas na tabela 
   div.appendChild(nome)
   div.appendChild(preco)
   tabela.appendChild(div)
   
   
   $(function(){
    var subtotal = 0
    var desconto= 0

     //Contagem trabela de produto
    $('.preco').each(function(){
      subtotal += parseFloat(jQuery(this).text());
    })
   
    document.getElementById('qtdtotal').value = subtotal.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

    //implementação do desconto e valor final
    $('input[name="desconto"]').change(function(e){

      var desc = parseInt($('input[name="desconto"]').val( ))
        
        desconto = (subtotal*desc)/100

        $('input[name="valordesc"]').val(desconto.toLocaleString('pt-br',{style:'currency',currency:'BRL'}))

        const valorfinal= subtotal-desconto

        $('input[name="total"]').val(valorfinal.toLocaleString('pt-br',{style:'currency',currency:'BRL'}))

    })
   

  })}  
  document.getElementById('addProduto').value=""
}


function LimparDados(){
  document.location.reload(true)
}