
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

document.getElementById("calcular").addEventListener("click", function() {
    
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