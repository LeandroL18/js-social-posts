// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array di oggetti che già trovate.
// Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById("container");

posts.forEach((element) => {
    console.log(element);

    let post = 

    `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${element.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `
    //inseriamo i post nel container 
    container.innerHTML += post;
});


// creazione array vuoto
const likedPosts = [];

// creazione variabile bottone
const varPost = document.querySelectorAll(".post");

varPost.forEach(post => {
    // selezione bottone like
    const buttonLike = post.querySelector(".like-button");

    // creazione contatore like
    let likesCounter = post.querySelector(".js-likes-counter");

    // al click del bottone like
    buttonLike.addEventListener("click",
        function(event){

            // non ritorno a inzio pagina
            event.preventDefault();

            // post a cui abbiamo cliccato like
            const postId = buttonLike.getAttribute("data-postid");
            console.log(postId);

            // se il post non è incluso nell'array
            if(!likedPosts.includes(postId)){
                // pusho
                likedPosts.push(postId);
                // stampo in console
                console.log(likedPosts);
                // aggiungo le classi like
                post.querySelector(".like-button__label").classList.add("like-button--liked");
                post.querySelector(".like-button__icon").classList.add("like-button--liked");
                // incremento contatore like
                likesCounter.textContent = parseInt(likesCounter.textContent) + 1;
            }

            // BONUS
            else {
                // rimuovo il post da likedPosts
                for( var i = 0; i < likedPosts.length; i++){ 
                    if ( likedPosts[i] === postId) {
                      likedPosts.splice(i, 1); 
                    }
                 }
                // rimuovo le classi like
                post.querySelector(".like-button__label").classList.remove("like-button--liked");
                post.querySelector(".like-button__icon").classList.remove("like-button--liked");
                // decremento contatore like
                likesCounter.textContent = parseInt(likesCounter.textContent) - 1;
            }
        }
    )
})

