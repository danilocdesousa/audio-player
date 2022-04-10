window.player = {
    // Seleção dos elementos.
    title: document.querySelector(".card-content h4"),
    artist: document.querySelector(".artist"),
    cover: document.querySelector(".card-image"),
    audio: document.querySelector("audio"),

    // Dados dos áudios.
    audioData: audioList,
    currentAudio: {},
    currentPlaying: 0,

    // Configurações do player.
    start() {
        this.update();

        // Evento para passar para o próximo item da lista quando o atual estiver terminado.
        this.audio.onended = () => this.next();
    },

    next() {
        this.currentPlaying++;
        this.update();
        this.audio.play();
    },

    update() {
        // Setar os dados na lista de audios.
        this.currentAudio = this.audioData[this.currentPlaying];

        // Alteração dos dados nos elementos HTML.
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        this.cover.style.background = `url('${path(player.currentAudio.cover)}') no-repeat center center / cover`;
        this.audio.src = path(this.currentAudio.audio);
    }
};
