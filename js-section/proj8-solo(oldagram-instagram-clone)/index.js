const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function increaseLikes(index, likesEl){
    if (!hasLiked[index]){
        let numOfLikes = Number(likesEl.textContent.split(" ")[0].replace(/,/g, ''))
        likesEl.textContent = (numOfLikes + 1) + " likes"
        hasLiked[index] = true
    }
}


let renderText =""
for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    renderText += `
          <section>
                <div class="post-author-container">
                    <img class="small-img-height brc" src="${element.avatar}" alt="Profile pictue of ${element.name}">
                    <div>
                        <h1>${element.name}</h1>
                        <p>${element.location}</p>
                    </div>
                </div>
                <img class="main-img max-content-width" src="${element.post}" alt="Portrait picture of ${name}">
                <div class="actions-container">
                    <img class="like-post-icon max-icon-height" src="images/icon-heart.png" alt="Hearth icon">
                    <img class="max-icon-height" src="images/icon-comment.png" alt="Text bubble icon">
                    <img class="max-icon-height" src="images/icon-dm.png" alt="Peper plane icon">
                </div>
                <div class="likes-comments-container">
                    <p class="likes">${element.likes} likes</p>
                    <p class="comments"><span>${element.username}</span> ${element.comment}</p>
                </div>
            </section>
    `
}
document.getElementsByTagName("main")[0].innerHTML = renderText

let hasLiked =[]
const mainImgs = document.getElementsByClassName("main-img");
const likeIcons = document.getElementsByClassName("like-post-icon")
const likesCounters = document.getElementsByClassName("likes");

for (let i = 0; i < posts.length; i++) {
    hasLiked.push(false)
    mainImgs[i].addEventListener("dblclick",function(){
        increaseLikes(i,likesCounters[i])
    })
    
    likeIcons[i].addEventListener("click",function(){
        increaseLikes(i,likesCounters[i])
    })
}
