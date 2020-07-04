const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        //getting a src from promise
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    //Disable the button
    button.disabled = true;
    //Start picutre in picutre
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
});

//onload 
selectMediaStream();
