const form = document.getElementById('form-contato');
const contatos = []
const telefones = []
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();//não atualiza a página

    adicionaLinha()
    atualizaTabela()

});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputTelContato = document.getElementById('tel-contato')
    //Verificação de contatos duplicas
    if(contatos.includes(inputNomeContato.value)){
        alert(`Contato ${inputNomeContato.value} já inserido`)
    } else{
        contatos.push(inputNomeContato.value)
        telefones.push(inputTelContato.value)

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputTelContato.value}</td>`
        linha += '</tr>'

        linhas += linha
    }
    inputNomeContato.value = ''
    inputTelContato.value = ''

    //alert(`Atividade: ${inputNomeContato.value} - Nota: ${inputTelContato.value}`)
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}