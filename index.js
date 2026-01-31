let songIndex = 0;
let audioElement = new Audio('m1.mpeg');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgresBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName:"kannada remix 0" , fliePath:"m1.mpeg" ,coverPath:"logo.jpeg"},
    { songName:"kannada music 1" , fliePath:"m2.mpeg" , coverPath:"music.jpg"},
    { songName:"kannada music 2" , fliePath:"m3.mpeg", coverPath:"logo.jpeg"},
    { songName:"kannada music 3" , fliePath:"m4.mpeg" , coverPath:"music.jpg"},
    { songName:"kannada music 4" , fliePath:"m5.mpeg" , coverPath:"logo.jpeg"},
    { songName:"kannada music 5" , fliePath:"m6.mpeg" , coverPath:"music.jpg"},
    { songName:"kannada music 6" , fliePath:"m7.mpeg" , coverPath:"logo.jpeg"},
    { songName:"kannada music 7" , fliePath:"m8.mpeg" , coverPath:"music.jpg"},
    { songName:"kannada music 8" , fliePath:"m9.mpeg" , coverPath:"logo.jpeg"}
    
]

songItems.forEach((element,i)=>{
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

masterPlay.addEventListener('click' ,()=>{

    if(audioElement.paused ||  audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
         audioElement.pause();
         masterPlay.classList.add('fa-play-circle');
         masterPlay.classList.remove('fa-pause-circle');
    }

});

//audioElement.play();

audioElement.addEventListener('timeupdate' ,() =>{   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;

});

const makeAllPlays = () =>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     })
    }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `m${songindex+1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        });
});


document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex>=9)
    {
        songIndex = 0;
    }
    else
    {
        songIndex += 1;
    }

       audioElement.src = `m${songIndex+1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       

        

});

document.getElementById('previous').addEventListener('click', ()=>{

    if(songIndex<=0)
    {
        songIndex = 0;
    }
    else
    {
        songIndex -= 1;
    }

       audioElement.src = `m${songIndex+1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       

        

});






