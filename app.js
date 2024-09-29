let pauseSong = document.getElementById("pauseSong");
let slider = document.getElementById("slider");
let startTime = document.getElementById("Start-time");
let endTime = document.getElementById("End-time");

// let songs = [
//     {songname: "Alone", filepath:"song/1.mp3" , coverpath: "covers/1.jpg"}
//     {songname: "Alone", filepath:"song/1.mp3" , coverpath: "covers/1.jpg"}
//     {songname: "Alone", filepath:"song/1.mp3" , coverpath: "covers/1.jpg"}
//     {songname: "Alone", filepath:"song/1.mp3" , coverpath: "covers/1.jpg"}
//     {songname: "Alone", filepath:"song/1.mp3" , coverpath: "covers/1.jpg"}
// ];


// pauseB.addEventListener("click",(el)=>{
//     // console.log(pause.src);
//     pauseB.src = "http://127.0.0.1:5500/assets/pause.png"
//     stop()
// });

let audioElement = new Audio("./Song_mp3/Aayi nai.mp3");

pauseSong.addEventListener("click",()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        pauseSong.src = "http://127.0.0.1:5500/assets/pngegg.png"
    }
    else{
        audioElement.pause();
        pauseSong.src = "http://127.0.0.1:5500/assets/player_icon3.png"
    } 
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // console.log(audioElement.currentTime); //In seconds
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(progress);
    slider.value = progress;
    
})

slider.addEventListener("change",()=>{
    audioElement.currentTime = (slider.value * audioElement.duration)/100;
})


