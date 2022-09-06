/**
* LAB 01
*/
// Primeiro usamos o laço para o nosso primeiro número
for (var i = 0; i < 10; i++) {

   // Aqui é feita a validação para ver em quais tabuadas vamos entrar [1,3,6,7,8,9]
   if(i == 1 || i == 3 || i == 6 || i == 7 || i == 8 || i == 9){

      // Aqui é onde realmente vamos gerar as tabuadas * X e usar o console para imprimir a função
      for (var j = 0; j <= 10; j++) {
         // Imprime o log no formato: NUM1 X NUM2 = RESULTADO (NUM1 * NUM2)
         console.log(i+"X"+j+"= "+(i*j));
      }
   }
}

/**
* LAB 02
*/

// Perguntando qual o tipo de operação
var  op = prompt("Qual operação você deseja realizar?\n\
   [SOMAR] = somar\n\
   [SUBTRAIR] = subtrair\n\
   [DIVIDIR] = dividir\n\
   [MULTIPLICAR] = multiplicar");

// Função para nossas contas - Lembre-se que sempre que usarmos uma função é possível passar valores
function conta(op){

   var num1 = prompt("Digite o primeiro valor para a operação "+op);
   var num2 = prompt("Digite o segundo valor para a operação "+op);

   // Validamos se os valores informados são números
   if(!isNaN(num1) && !isNaN(num2)){

      // Forçar o (cast) para um tipo Number
      num1 = Number(num1);
      num2 = Number(num2);
      if(op == 'somar'){
         alert(num1 + num2);
      }else if(op == 'subtrair'){
         alert(num1 - num2);
      }else if(op == 'dividir'){
         alert(num1 / num2);
      }else{
         alert(num1 * num2);
      }
   }else{
      alert("Um dos valores não é um número válido =/");
   }
}

// Por via das dúvidas transformamos a informação em letras minusculas para evitar erros
op = op.toLowerCase();

switch(op){
   case 'somar':
      console.log("Operação: Somar");
      conta(op);
      break;
   case 'subtrair':
      console.log("Operação: Subtrair");
      conta(op);
      break;
   case 'dividir':
      console.log("Operação: Dividir");
      conta(op);
      break;
   case 'multiplicar':
      console.log("Operação: Multiplicar");
      conta(op);
      break;
   default:
      alert("Não sei fazer essa conta =/");
}

/**
* LAB 03
*/

// Nosso construtor de carros
function novoCarro(marca,modelo,ano,cor){
   this.marca=marca;
   this.modelo=modelo;
   this.ano=ano;
   this.cor=cor;

   return this;
}

// Body
var body = document.getElementById('content');

// Nosso Array de carros
var garagem = [];

// Criando primeiro Objeto - Carro 1 (c1)
var c1 = new novoCarro('Ford','Mustang',1967,'Prata');
// Criando segundo Objeto - Carro 2 (c2)
var c2 = new novoCarro('Chevy','Impala',1967,'Preto');
garagem.push(c1,c2);

// Usando um laço para exibir as informações contidas em nossa garagem
for (var i = 0; i < garagem.length; i++) {
   var num = i+1;
   console.log(num+" "+garagem[i].marca+" "+garagem[i].modelo+" - "+garagem[i].ano+" "+garagem[i].cor);
}