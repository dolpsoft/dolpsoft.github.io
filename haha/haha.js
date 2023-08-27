const troll = document.getElementById("troll")


troll.addEventListener("click", function(){
    troll.style.display = "none"
    const video = document.createElement("video")
    const source =  document.createElement("source")

    video.appendChild(source)
    source.setAttribute("src", "hain.mp4")
    video.setAttribute("loop", "true")

    video.style.width = "100vw"
    video.style.height = "100vh"

    document.body.appendChild(video);
    video.play()
})
