// Função para alternar entre as seções
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Exibição inicial
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Exibe a tela inicial por padrão
});
