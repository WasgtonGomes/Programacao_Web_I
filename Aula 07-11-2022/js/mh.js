function abrir_menu(){
    const divMenu = document.getElementById('menu-resp').classList;
    const ic = document.getElementById('icone');
    divMenu.toggle('abrir');
    if(divMenu.contains('abrir')){
        ic.innerHTML = 'close';
    }else{
        ic.innerHTML = 'menu';
    }
}