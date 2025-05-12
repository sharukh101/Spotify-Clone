// console.log("Welcome to spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
// console.log(audioElement);
let masterPlay = document.querySelector('#masterPlay');
let myProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let songListPlay = document.querySelectorAll('.songlistplay');
let masterSongName = document.getElementsByClassName("masterSongName");
// console.log(masterPlay);

let Songs = [
    {songName: "Broken",filePath: "Songs/1.mp3",coverPath:"Songs/1.jpg"},
    {songName: "Glock",filePath: "Songs/2.mp3",coverPath:"Songs/2.jpg"},
    {songName: "Kalastar",filePath: "Songs/3.mp3",coverPath:"Songs/3.jpg"},
    {songName: "Khalasi",filePath: "Songs/4.mp3",coverPath:"Songs/4.jpg"},
    {songName: "Sanju",filePath: "Songs/5.mp3",coverPath:"Songs/5.jpg"},
    {songName: "Gute",filePath: "Songs/6.mp3",coverPath:"Songs/6.jpg"},
    {songName: "Yashal",filePath: "Songs/7.mp3",coverPath:"Songs/7.jpg"},
    {songName: "Zulfon",filePath: "Songs/8.mp3",coverPath:"Songs/8.jpg"},
]


Songs.forEach((element,i)=>{
    // console.log(element,i);
    document.getElementsByClassName("songName")[i].innerText = Songs[i].songName;
    document.getElementsByClassName("songImage")[i].src = Songs[i].coverPath;
    // console.log( Songs[i].coverPath);
    // document.getElementsByClassName("songImage")

})
// audioElement.play();
// handle play/pause click

masterPlay.addEventListener('click', ()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to event
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
   })

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        // console.log(element);
})
}


Array.from(document.getElementsByClassName('songItemplay')).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // console.log(index);

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;

        audioElement = new Audio(Songs[i].filePath);
        document.getElementsByClassName("masterSongName").innerText = Songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })    
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = Songs[songIndex].songName;
    console.log(Songs[songIndex].songName);
    console.log(masterSongName);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = Songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



