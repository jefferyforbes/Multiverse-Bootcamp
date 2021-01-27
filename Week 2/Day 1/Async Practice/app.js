// Synchronous Code

function basic(){
    console.log("One function")
    console.log("do stuff!")
}

console.log("Start Sync")

basic();

console.log("End")

// Asynchronous Code

console.log("Start Async")

// Callback function
setTimeout(() => {
    console.log("We are in the timeout")
    /* The timeout function pushes the code block onto 
    the web apis to hold while JS exceutes the other code. */
}, 5000);

basic();

console.log("End Async")

// -----------

const items  = [1,2,3,4,5]

items.forEach((items) => {
    console.log(items)
});

// --------

function userLogin(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data")
        callback({userEmail: email});
    }, 5000);
};

function getUserVideos(email, videoArray){
    setTimeout(() => {
        videoArray(["video1", "video2", "video3"]);
    }, 2000);
}

function videoDetails(video, videoCallout){
    setTimeout(() => {
        videoCallout(`Title of the video ${getUserVideos.videoArray[1]}`)
    }, 2000);
}

const user = userLogin("jefferyforbes.1@outlook.com", "password", user => {
    console.log(user)
    getUserVideos(user.userEmail, (videoArray) => {console.log(videoArray)});
});