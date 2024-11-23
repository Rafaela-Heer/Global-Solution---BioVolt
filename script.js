const login_admin = "usuario_admin";
const senha_admin = "senha_admin123";

function validarLogin(event) {
    event.preventDefault();

    const login = document.getElementById("Login").value;
    const senha = document.getElementById("Senha").value;

    if (login === login_admin && senha === senha_admin) {
        alert("Logado com sucesso!");
        window.location.href = "./Home-usuario/usuario.html";
    } else {
        alert("Senha errada, tente novamente.");
    }
}

// comentando as partes pra deixar separado, dps apagamos
// soluçao/como
document.addEventListener('DOMContentLoaded', function () {
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
                content.style.maxHeight = 'fit-content';
                content.style.padding = '1.5rem';
            }
        });
    });
});

document.getElementById("calcular").addEventListener("click", function () {

    const materia_organica = parseFloat(document.getElementById("materia-organica").value);
    const resultado = document.getElementById("resultado");

    const energia_por_kg = 4.17;
    const eficiencia = 0.8;
    const tarifa_sp = 0.527;
    const percentual_desconto = 0.5



    if (materia_organica > 0) {
        const energia_obtida = materia_organica * energia_por_kg * eficiencia;
        const valor_gerado = tarifa_sp * energia_obtida;
        const desconto_total = valor_gerado * percentual_desconto;
        resultado.innerHTML = `Com ${materia_organica} kg de biomassa, você estará gerando ${energia_obtida.toFixed(2)} KWh de energia. <br>
        O seu desconto total será de R$ ${desconto_total.toFixed(2)} na conta de luz.`;
    } else {
        resultado.innerHTML = "Por favor, insira uma quantidade válida de matéria orgânica.";
    }
});

//Contatos
function enviar(event) {
    event.preventDefault();
    var nome = document.querySelector('#nome').value
    var email = document.querySelector('#email').value
    var numero = document.querySelector('#numero').value
    var mensagem = document.querySelector('#mensagem').value
    var erro = document.querySelector('#erro')

    if (
        (nome.length < 2)

    ) {
        erro.textContent = 'O nome precisa ter mais de 2 letras, preencha todos os campos.'
        return
    }
    if (email.length == 0) {
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    if (numero.length == 0) {
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    if (mensagem.length == 0) {
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    erro.style.background = '#06181C'
    erro.textContent = 'Mensagem enviada com sucesso!'
    erro.style.color = '#ffffff'

}

function selecionar(id) {

    document.querySelectorAll('.conteudo').forEach(item => {
        item.classList.remove('ativo');
    });

    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.classList.remove('dot-ativo');
    });

    document.getElementById(id).classList.add('ativo');
    document.getElementById(`dot-${id}`).classList.add('dot-ativo');

    const numeroId = id.replace('texto', '');
    document.getElementById(`imagem${numeroId}`).classList.add('ativo');
}

function autoCarrossel() {
    const textos = ['texto1', 'texto2', 'texto3'];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % textos.length;
        selecionar(textos[currentIndex]);
    }, 4000);
}

window.addEventListener('load', () => {
    autoCarrossel();
});

document.querySelectorAll('.nav-dot button').forEach(button => {
    button.addEventListener('click', (e) => {

        e.stopPropagation();

        const id = e.target.parentElement.id.replace('dot-', '');
        selecionar(id);
    });
});