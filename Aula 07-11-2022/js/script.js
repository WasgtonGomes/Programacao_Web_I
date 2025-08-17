const inp_texto = document.getElementById('texto');

function addClass(){
    inp_texto.classList.add('fundo');
}

function removeClass(){
    inp_texto.classList.remove('fundo');
    inp_texto.classList.remove('fonte');
}

function containsClass(){
    var fundo = inp_texto.classList.contains('fundo');
    if(fundo){
        alert('Class fundo ativa');
    }else{
        alert('Class fundo inativa');
    }
}

function alterarClass(){
    inp_texto.classList.toggle('fundo');
    inp_texto.classList.toggle('fonte');
}

function substituirClass(){
    inp_texto.classList.replace('fundo','fonte');
}

function fake(){
    inp_texto.classList.replace('fonte','fundo');
}

const dvContainer = document.getElementById('container');
const title = document.createElement('h1');
const foto = document.createElement('img');
foto.src='./Images/naruto.jpg';
foto.alt='Imagem Naruto';
foto.width=400;
title.innerHTML = 'Olá, Mundo!';
dvContainer.appendChild(title);
dvContainer.appendChild(foto);
