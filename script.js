const text = document.querySelector("#text");
const speakingButton = document.querySelector(".speak");
const select = document.querySelector("#voices");
const speech = window.speechSynthesis;

// Option dikhane ke liye
const showingVoices = () => {
    const voices = speech.getVoices();
    select.innerHTML = '';
    voices.forEach((voice , i) => {
        console.log(voice);
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${voice.name} ${voice.lang}`;
        select.appendChild(option);
    });
}

showingVoices();
// voices selcet tag mai dikhane ke liye 
speech.onvoiceschanged = showingVoices;



// speakingButton
speakingButton.addEventListener("click" , () => {
    if(speech.speaking) {
        alert("Already Speaking");
        return;
    }
    const content = text.value;
    if(content !== "") {
        const u = new SpeechSynthesisUtterance(content);
        const selectedVoiceIndex = select.value;
        const voices = speech.getVoices();
        u.voice = voices[selectedVoiceIndex];
        speech.speak(u);
    } else {
        alert("Please Write Something");
    }
})