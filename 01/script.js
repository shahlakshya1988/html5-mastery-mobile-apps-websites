// You can code JavaScript here

function speak(){
    var voice = new SpeechSynthesisUtterance();
    voice.text="Hi, This is lakshya";
    speechSynthesis.speak(voice);
}