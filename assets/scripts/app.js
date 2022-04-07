const title = document.querySelector(".card-content h4");
const artist = document.querySelector(".artist");
const cover = document.querySelector(".card-image");
const audio = document.querySelector("audio");

const data = {
    title: "Ambient Cinematic Hip-Hop",
    artist: "Anton Vlasov",
    cover: "assets/media/images/hand-1850120_640.jpg",
    audio: "assets/media/audios/into-the-night-20928.mp3"
};

title.innerText = data.title;
artist.innerText = data.artist;
cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
audio.src = data.audio;