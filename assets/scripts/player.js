/* Configurações do player. */
window.player = {
    /* Seleção dos elementos. */
    title: document.querySelector(".card-content h4"),
    artist: document.querySelector(".artist"),
    cover: document.querySelector(".card-image"),
    audio: document.querySelector("audio"),

    /* Dados dos áudios. */
    data: {
        title: "Ambient Cinematic Hip-Hop",
        artist: "Anton Vlasov",
        cover: "assets/media/images/hand-1850120_640.jpg",
        audio: "assets/media/audios/into-the-night-20928.mp3"
    },

    /* Função de aplicação dos dados. */
    start() {
        /* Alteração dos dados nos elementos HTML. */
        this.title.innerText = this.data.title;
        this.artist.innerText = this.data.artist;
        this.cover.style.background = `url('${player.data.cover}') no-repeat center center / cover`;
        this.audio.src = this.data.audio;
    }
};
