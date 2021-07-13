/*
let nome = "Theresa Mancini"
let idade = 24; 
let idade2 = 10;
let frase = "Japão é um pais muito tecnológico."
//alert(`${nome} tem ${idade} anos`); // também poderia ser ("bem vinda" + nome)
//alert(idade+idade2)

console.log(frase.replace("Japão","Coreia")); 
alert(frase.replace("Japão","Coreia"));
*/

// aula 2
/*
//lista

let lista = ["maçã", "pera", "laranja"]; 
lista.push("uva")
console.log(lista);
lista.pop();
alert(lista[2]);
console.log(lista);
console.log(lista.toString())
console.log(lista.join("-")) // transforma em string mas unindo por aquele determinado elemento 

// dicionário 
let frutas = [{nome: "maçã", cor: "vermelho"}, {nome: "uva", cor: "roxo"},{nome: "pera", cor: "verde"}]

console.log(frutas[1].nome);
*/

/*
// aula 3

// condicionais, laços de repetição e Date

let idade = prompt("Qual sua idade? ");
if (idade >= 18){
    alert("Maior de Idade")
}else{
    alert("Menor de Idade")
};

let d = new Date();
alert(d);
*/

// aula 4 funções 

/* 
function soma(n1,n2){
    return n1+n2; 
}

alert(soma(5,10))


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Olá, meu nome é Maria", "Maria", "Júlia")); 

function validaIdade(idade){
    let validar;
    if (idade>=18){
        validar = true
    }
    else{
        validar = false
    }
    return validar
}

let idade = prompt("Qual é a sua idade? ")

console.log(validaIdade(idade))

*/

function clicou(){
   // alert("Obrigada por clicar! ")
   // agora vou editar o html através do JS
   document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
  // console.log(document.getElementById("agradecimento"))

}

function mudarPagina(){
    window.open("https://www.google.com.br"); // nova aaba
}
function redirecionar(){
    window.location.href = "https://www.google.com.br"; // abre na pag atual 
}

function trocar(elemento){
   // document.getElementById("passandoMouse").innerHTML = "obridado por passar o mouse"; // dessa forma só funciona no elemento com essa ID
   // essede baixo funciona pra qualquer elemento, pq passamos os elemento como parametro para a função
   elemento.innerHTML = "obrigado por passar o mouse";

}

function voltar(elemento){
   // document.getElementById("passandoMouse").innerHTML = "passe o mouse aqui! ";
   elemento.innerHTML = "passe o mouse aqui!"
}

function load(){ // onload no html usado no body. Quando carregado chama a função que eu definir
    alert("Página Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

