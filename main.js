var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content == "selfie"){
        console.log("taking selfie ---");
        speak();
    }
}
function speak(){
    console.log("speak function is calling");
    Webcam.attach(camera);
    setTimeout(function(){
        var synth = window.speechSynthesis;
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot("selfie1");
    }, 5000);
    setTimeout(function(){
        synth = window.speechSynthesis;
        speak_data = "Taking another Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot("selfie2");
    }, 10000);
    setTimeout(function(){
        synth = window.speechSynthesis;
        speak_data = "Taking last Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot("selfie3");
    }, 15000);
}
function take_snapshot(imgId){
    Webcam.snap(function(data_uri){
        document.getElementById(imgId).src = data_uri;        
  });
}