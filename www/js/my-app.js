document.addEventListener('deviceready',this.onDeviceRedy, false);

function onDeviceRedy(){
    alert("device ready");  
}

//quality of the picture
var options = {
    quality: 100
  }

//open the camera of the device 
function photo(){
  navigator.camera.getPicture(onSuccess, onFail, options);
}

//take the picture and save it
function onSuccess(imageData) {
    // I found this method to storage in the cache memory of the app
    localStorage.setItem("img", imageData);
}

//this take the picture from the memory and displayed in the screen 
function displayImage(){
    var image = document.getElementById('myImage');
    image.src = localStorage.getItem("img");
}

function onFail(message) {
    alert('Failed because: ' + message);
}








