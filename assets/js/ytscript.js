console.log("hello");

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=snakeplant%20care&key=AIzaSyB1wxbpiJoa90aLYGo-ZJOoRmCGQEuM2jY")
.then((ytResults)=>{
    return ytResults.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelector(".ytContainer")
    for(video of videos){
        videoContainer.innerHTML += `
            <img src="${video.snippet.thumbnails.default.url}">
        `
    }
})