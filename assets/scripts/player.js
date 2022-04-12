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
        // Testa se o áudio atual é o último da lsita.
        if (this.currentPlaying == this.audioData.length) {
            this.restart();
        }
        this.update();
        // Coloca o próximo áudio em estado de play.
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
    },
    restart() {
        // Depois de terminar de tocar o último áudio, volte para o primeiro áudio.
        this.currentPlaying = 0;
        this.update();
    }
};
