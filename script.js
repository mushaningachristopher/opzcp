const playPauseBtn = document.querySelector(".play-pause-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")

const video = document.querySelector("video")
const videoContainer = document.querySelector(".video-container")

//Play-Pause
playPauseBtn.addEventListener("click", togglePlay)
document.addEventListener("keydown", e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === "input") return

    switch(e.key.toLocaleLowerCase()){
        case " ":
        case "k":
            togglePlay()
            break
        case "f":
            toggleFullScreenMode()
            break
    }
})
video.addEventListener("click", togglePlay)

function togglePlay(){
    video.paused ? video.play() : video.pause()
}

video.addEventListener("play", () => {
    videoContainer.classList.remove("paused")
})
video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
})

//Full Screen mode
fullScreenBtn.addEventListener("click", toggleFullScreenMode)

function toggleFullScreenMode() {
    if (document.fullscreenElement == null){
        videoContainer.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}

document.addEventListener("fullscreenchange", () => {
    videoContainer.classList.toggle("full-screen", document.fullscreenElement)
} )