// Função prara receber um arquivo.
const path = function (file) {
    return `assets/media/audio-data/${file}`;
};

// Iniciar a configuração do player após a window carregar.
window.addEventListener("load", player.start());
