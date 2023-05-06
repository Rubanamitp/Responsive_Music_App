let play=document.getElementById('play')
let audio=document.querySelector('audio')
let img=document.querySelector('img')
let previous=document.getElementById('previous')
let next=document.getElementById('next')
let title=document.getElementById('title')
let artist=document.getElementById('artist')
let gif=document.getElementById('gif')
let songIndex=0


const songs=[
    {title:"Let me like you do",name:"1.mp3", artist:"The singer",cover:"1.jpg"},
    {title:"Where are you",name:"2.mp3", artist:"The singer2",cover:"2.jpg"},
    {title:"Hangover",name:"3.mp3", artist:"The singer3",cover:"3.jpg"},
    {title:"Danzo Kaduro",name:"4.mp3", artist:"The singer4",cover:"4.jpg"},
]


let isPlaying=false
const playMusic=()=>{
        isPlaying=true
        audio.play()
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
        gif.style.opacity=1
        img.classList.add('anime')
}
const pauseMusic=()=>{
    isPlaying=false
    audio.pause()
    play.classList.remove('fa-pause')
    play.classList.add('fa-play')
    gif.style.opacity=0
    img.classList.add('anime')
}

play.addEventListener('click',()=>{
    isPlaying?pauseMusic():playMusic()
})
songIndex=0
const loadSong=(songs)=>{
    title.textContent=songs.title
    artist.textContent=songs.artist
    audio.src="music/" +songs.name
    img.src="images/" +songs.cover
};
// loadSong(songs[1])
const previousSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length
    loadSong(songs[songIndex])
    playMusic()
}
const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length
    loadSong(songs[songIndex])
    playMusic()

}
previous.addEventListener('click',previousSong)
next.addEventListener('click',nextSong)


    
 