document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector("#btn");
    const content = document.querySelector("#content");
    const voice = document.querySelector("#voice");
    const status = document.querySelector("#status");

    // Check browser support
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        content.innerText = "Browser not supported";
        btn.disabled = true;
        status.textContent = "Your browser doesn't support speech recognition. Try Chrome or Edge.";
        return;
    }

    function speak(text) {
        status.textContent = "Speaking...";
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.volume = 1;
        text_speak.pitch = 1;
        text_speak.lang = "en-US"; // Changed to English
        
        text_speak.onend = () => {
            status.textContent = "Ready";
        };
        
        window.speechSynthesis.speak(text_speak);
    }

    function wishMe() {
        let day = new Date();
        let hours = day.getHours();
        if (hours >= 0 && hours < 12) {
            speak("Good Morning");
        } else if (hours >= 12 && hours < 17) {
            speak("Good Afternoon");
        } else if (hours >= 17 && hours < 20) {
            speak("Good Evening");
        } else {
            speak("Good Night");

            
        }
    }

    // Initialize on load
    wishMe();

    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        status.textContent = "Listening...";
        btn.style.display = "none";
        voice.style.display = "block";
    };

    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText = transcript;
        takeCommand(transcript.toLowerCase());
    };

    recognition.onerror = (event) => {
        status.textContent = "Error occurred: " + event.error;
        btn.style.display = "flex";
        voice.style.display = "none";
    };

    recognition.onend = () => {
        if (btn.style.display !== "flex") {
            btn.style.display = "flex";
            voice.style.display = "none";
        }
    };

    btn.addEventListener("click", () => {
        try {
            recognition.start();
        } catch (e) {
            status.textContent = "Error: " + e.message;
            btn.style.display = "flex";
            voice.style.display = "none";
        }
    });

    function takeCommand(message) {
        btn.style.display = "flex";
        voice.style.display = "none";

        if (message.includes("hello") || message.includes("hey") || message.includes("hi")) {
            speak("Hello, what can I help you with?");
        } else if (message.includes("who are you")) {
            speak("I am Shifra, your virtual assistant");
        document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector("#btn");
    const content = document.querySelector("#content");
    const voice = document.querySelector("#voice");
    const status = document.querySelector("#status");

    // Check browser support
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        content.innerText = "Browser not supported";
        btn.disabled = true;
        status.textContent = "Your browser doesn't support speech recognition. Try Chrome or Edge.";
        return;
    }

    function speak(text) {
        status.textContent = "Speaking...";
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.volume = 1;
        text_speak.pitch = 1;
        text_speak.lang = "en-US"; // Changed to English
        
        text_speak.onend = () => {
            status.textContent = "Ready";
        };
        
        window.speechSynthesis.speak(text_speak);
    }

    function wishMe() {
        let day = new Date();
        let hours = day.getHours();
        if (hours >= 0 && hours < 12) {
            speak("Good Morning");
        } else if (hours >= 12 && hours < 17) {
            speak("Good Afternoon");
        } else if (hours >= 17 && hours < 20) {
            speak("Good Evening");
        } else {
            speak("Good Night");
        }
    }

    // Initialize on load
    wishMe();

    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        status.textContent = "Listening...";
        btn.style.display = "none";
        voice.style.display = "block";
    };

    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText = transcript;
        takeCommand(transcript.toLowerCase());
    };

    recognition.onerror = (event) => {
        status.textContent = "Error occurred: " + event.error;
        btn.style.display = "flex";
        voice.style.display = "none";
    };

    recognition.onend = () => {
        if (btn.style.display !== "flex") {
            btn.style.display = "flex";
            voice.style.display = "none";
        }
    };

    btn.addEventListener("click", () => {
        try {
            recognition.start();
        } catch (e) {
            status.textContent = "Error: " + e.message;
            btn.style.display = "flex";
            voice.style.display = "none";
        }
    });

    function takeCommand(message) {
        btn.style.display = "flex";
        voice.style.display = "none";

        if (message.includes("hello") || message.includes("hey") || message.includes("hi")) {
            speak("Hello, what can I help you with?");
        } else if (message.includes("who are you")) {
            speak("I am Shifra, your virtual assistant");
        } else if (message.includes("open youtube")) {
            speak("Opening YouTube...");
            window.open("https://www.youtube.com/", "_blank");
        } else if (message.includes("open google")) {
            speak("Opening Google...");
            window.open("https://www.google.com/", "_blank");
        } else if (message.includes("open facebook")) {
            speak("Opening Facebook...");
            window.open("https://www.facebook.com/", "_blank");
        } else if (message.includes("open instagram")) {
            speak("Opening Instagram...");
            window.open("https://www.instagram.com/", "_blank");
        } else if (message.includes("time")) {
            let time = new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" });
            speak("The time is " + time);
        } else if (message.includes("date")) {
            let date = new Date().toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
            speak("Today's date is " + date);
        } else if (message.includes("thank you") || message.includes("thanks")) {
            speak("You're welcome!");
        } else {
            let searchQuery = message.replace("shifra", "").trim();
            speak("Searching for " + searchQuery);
            window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
        }
    }
});
        } else if (message.includes("open google")) {
            speak("Opening Google...");
            window.open("https://www.google.com/", "_blank");
        } else if (message.includes("open facebook")) {
            speak("Opening Facebook...");
            window.open("https://www.facebook.com/", "_blank");
        } else if (message.includes("open instagram")) {
            speak("Opening Instagram...");
            window.open("https://www.instagram.com/", "_blank");
        } else if (message.includes("time")) {
            let time = new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" });
            speak("The time is " + time);
        } else if (message.includes("date")) {
            let date = new Date().toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
            speak("Today's date is " + date);
        } else if (message.includes("thank you") || message.includes("thanks")) {
            speak("You're welcome!");
        } else {
            let searchQuery = message.replace("shifra", "").trim();
            speak("Searching for " + searchQuery);
            window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
        }
    }
});