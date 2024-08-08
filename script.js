console.log("Welcome to the spotify");

//Initializa the variables
let songIndex = 0;
let audioElement = new Audio ('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals (feat. Laura Brehm) | Future Trap", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible | Glitch Hop", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart | Drumstep |", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji - Heroes Tonight (feat. Johnning) | Progressive House ", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dus_Lakh__Munawar_x_Spectra_", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Aaja_We_Mahiya_[Slowed_+_Reverb]_-_Imran_Khan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Plevne(256k)", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Khwahish__Munawar_Faruqui__Official_Music_Video", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Kalandar__Munawar_x_Farhan_Khan__Prod_by_Noran_Beatz", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Warriyo - Mortals (feat. Laura Brehm) | Future Trap", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
 
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// audioElement.play();

//listen to Events
audioElement.addEventListener('timeupdate', ()=>{

    
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration )* 100);
    MyProgressBar.value = progress;
}) 

MyProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})


