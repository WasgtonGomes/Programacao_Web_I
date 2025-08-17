const inp_texte = document.getElementById('texte');

function addClass(){
    inp_texte.classList.add('fundo');//função para adicinar formatação pela função atraves do botão
    inp_texte.classList.add('fonte');
  
}

function removeClass(){
    inp_texte.classList.remove('fundo');//função para remover formatação pela função atraves do botão
    inp_texte.classList.remove('fonte');
}

function containsClass(){
    var fundo = inp_texte.classList.contains('fundo');
    if(fundo){
        alert('Class fundo ativa');

    }else{
        alert('Class fundo inativa');
    }
}

function alterarClass(){// Aqui essa função vai aterrar as funções
    inp_texte.classList.toggle('fundo');
    inp_texte.classList.toggle('fonte');
    
}

function substituirClass(){
    inp_texte.classList.replace('fundo', 'fonte');
}

function fake(){
    inp_texte.classList.replace('fonte', 'fundo');
}

const dvContainer = document.getElementById('container');// aqui coloca os elemtos do html para este documento

const title = document.createElement('h1');
title.innerHTML = 'Olá, Mundo!!';

dvContainer.appendChild(title);

const imagem = document.createElement('img');
imagem.src='6b89ce2120866dfccb2f093f094dd78f.jpg';// Chama o caminha da imagem dentro da pasta para já iniciar quando carregar a pagina
imagem.alt='Imagem de animes'; // Texto alternativo
imagem.width=400;// Propriedade de tamanho
dvContainer.appendChild(title);// Aqui VAI MOSTRAR O TITULO
dvContainer.appendChild(imagem);// Aqui vai mostrar a imagem

