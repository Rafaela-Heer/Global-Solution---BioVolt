
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