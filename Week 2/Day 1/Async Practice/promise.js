// A promise is the result of a asynchronous operation either succes or failure

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("User Acquired!") 
         if (resolve) {
        resolve({user: "Jeffery"});
    } else {
        reject(new Error("User not logged in"))}
    }, 5000); // This is the block of code that is executed on success or resolve
})

promise.then(user => {
    console.log(user)
}).catch(err => console.log(err))


// Refactor App.js
 
function userLogin(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data")
            resolve({userEmail: email});
        }, 5000);
    })
};

function getUserVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(videoArray = ["video1", "video2", "video3"]);
        }, 2000);
    })
};

// Note: When working with APIs to request data, often the response is already a promise

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Title of the video.`)
        }, 2000);
    })
};

// ------------------------------

userLogin("jefferyforbes.1@outlook.com", "password")
    .then(user => getUserVideos(user.email))
    .then(video => videoDetails(video[0]))
    .then(details => console.log(details));

const user = userLogin("jefferyforbes.1@outlook.com", "password", user => {
    console.log(user)
    getUserVideos(user.userEmail, video => {
        console.log(video)
    });
});

// ---------- Promise.All ------------

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("Requesting data from YouTube")
        resolve({videos: [1, 2, 3, 4, 5]})
    }, 2500);
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("Requesting data from Facebook")
        resolve({user: "Name"})
    }, 5000);
})

Promise.all([yt, fb]).then(result => console.log(result));

// ------------Async Await--------------
async function displayUser(){
    try {
    const loginUser = await ("jeffery", "password");
    const videos = await getUserVideos(loginUser.userEmail);
    const detail = await videoDetails(videos);
    console.log(detail);
    } catch (err) {
        console.log(err)
    }
}
displayUser();

console.log("Finish!")