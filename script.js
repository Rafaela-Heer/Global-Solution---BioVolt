
// comentando as partes pra deixar separado, dps apagamos
// soluçao/como
document.addEventListener('DOMContentLoaded', function() {
    const gavetaItems = document.querySelectorAll('.solucao-gaveta-item');

    gavetaItems.forEach(item => {
        const button = item.querySelector('.solucao-gaveta-button');
        
        button.addEventListener('click', () => {
            // verifica se o item clicado já ta ativo
            const isActive = item.classList.contains('ativo');

            // Fecha todos os itens
            gavetaItems.forEach(outroItem => {
                outroItem.classList.remove('ativo');
                const content = outroItem.querySelector('.solucao-gaveta-content');
                content.style.maxHeight = '0';
                content.style.padding = '0';
            });

            // se o item não ta ativo, abre
            if (!isActive) {
                item.classList.add('ativo');
                const content = item.querySelector('.solucao-gaveta-content');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '1.5rem';
            }
        });
    });
});

//Contatos
function enviar(event){
    event.preventDefault();
    var nome = document.querySelector('#nome').value
    var email = document.querySelector('#email').value
    var numero = document.querySelector('#numero').value
    var mensagem = document.querySelector('#mensagem').value
    var erro = document.querySelector('#erro')

    if(
        (nome.length < 2)
        
    ){  erro.textContent = 'O nome precisa ter mais de 2 letras, preencha todos os campos.'
        return
    }
    if(email.length == 0){
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    if(numero.length == 0){
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    if(mensagem.length == 0){
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    erro.style.background='#06181C'
    erro.textContent = 'Mensagem enviada com sucesso!'
    erro.style.color= '#ffffff'

}
function selecionar(id){
    const elementos = document.querySelectorAll('.conteudo')
    elementos.forEach((item) => item.classList.remove('ativo'))
    const dots = document.querySelectorAll('.nav-dot')
    dots.forEach((item) => item.classList.remove('dot-ativo'))
    const dot = document.getElementById('dot-' + id)
    console.log(dot)
    const elemento = document.getElementById(id)
    dot.classList.add('dot-ativo')
    elemento.classList.add('ativo')
}