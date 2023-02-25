const formulario = document.getElementById('formulario');

const favoritos = new Array();
const nao_favoritos = new Array();

formulario.addEventListener('submit', function(ev){
    ev.preventDefault();

    let nome = document.querySelector('#nome').value;
    let telefone = document.querySelector('input[type="tel"]').value;

    let contato_favorito = false;

    if (document.querySelector('input[type="checkbox"]:checked')){
        contato_favorito = true;
        let lista = [nome, telefone, contato_favorito];
        favoritos.push(lista);
    } else {
        let lista = [nome, telefone, contato_favorito];
        nao_favoritos.push(lista);
    }
    
    let itens_tabela_fav = "";

    if (favoritos.length > 0){

        document.getElementsByClassName('ft')[0].style.display = "none"
        document.getElementsByClassName('tb-favoritos')[0].style.display = "Block"

        favoritos.forEach(function(item){
            itens_tabela_fav += `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`
        });

        document.getElementById('linha-tab-favoritos').innerHTML = itens_tabela_fav;
    }

    let itens_tabela_n_fav = ""

    if (nao_favoritos.length > 0){

        document.getElementsByClassName('nft')[0].style.display = "none"
        document.getElementsByClassName('tb-nao-favoritos')[0].style.display = "Block"

        nao_favoritos.forEach(function(item){
            itens_tabela_n_fav += `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`
        })

        document.getElementById('linha-tab-nao-favoritos').innerHTML = itens_tabela_n_fav;
    }

    document.querySelector('#nome').value = ""
    document.querySelector('input[type="tel"]').value = ""
    document.querySelector('input[type="checkbox"]').checked = false
    
    let resumo = `<b>Total de ${favoritos.length + nao_favoritos.length} contato(s) cadastrado(s) - ${favoritos.length} Favorito(s)</b>`
    document.getElementsByClassName('resumo-agenda')[0].innerHTML = resumo

});