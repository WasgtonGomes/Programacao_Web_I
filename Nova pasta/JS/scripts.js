function msn(){
    var nome2 =  document.getElementById('nome').value
    // var n =  nome.value
    alert(nome2)
}

function HabilitarCampo(op){
    if(op){
        document.formulario.nome.disabled = false;
    }else{
        document.formulario.nome.disabled = true;
        document.formulario.nome.value="";
    }
}

function validaDescricao(){
    if(document.getElementById('descricao').value.trim()===''){
        document.getElementById('descricao').style.background = '#edcd15'
        alert('A descrição deve ser preenchida')
    }else{
        document.getElementById('descricao').style.background = '#fff'
        return true;
    }
}

function calcular(){
    var numero1 = parseFloat(n1.value);
    var numero2 = parseFloat(n2.value);
    var soma = numero1 + numero2;
    res.value = soma;
}

function mascCPF(){
    var vcpf = cpf.value;
    var dig = vcpf.length
    if (dig==11){
        cpf.value = vcpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")
    }else if(dig==14){
        cpf.value = vcpf.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    }
}