history.scrollRestoration = "manual";

const audio0 = document.getElementById("bg-music0");
const audio1 = document.getElementById("bg-music1");
const audio2 = document.getElementById("bg-music2");
const audioNew = document.getElementById("NewMessageSound");
const audioWrong = document.getElementById("IncorrectSound");

audio0.volume = 0.1;
audio1.volume = 0.1;
audio2.volume = 0.1;

document.addEventListener("click", () => {
    let FugvLevel = localStorage.getItem("FugvLevel");

    if (FugvLevel == undefined) {
        // If no value is found, set it to 0
        localStorage.setItem("FugvLevel", 0);
        FugvLevel = 0; // Set it as a number, not string
    }
    FugvLevel = parseInt(FugvLevel); // Convert FugvLevel from string to number

    switch (FugvLevel) {
        case 0:
            audio0.play();
            break;
        case 1:
            audio1.play();
            break;
        case 2:
            audio2.play();
            audio2.currentTime = 2; 
            break;
    }

    // Fade to green, then fade out
    const overlay = document.getElementById("overlay");

    // First, change the background to green
    overlay.style.backgroundColor = "#00ff41";

    // Then, after 1 second (green fade), start fading out
    setTimeout(() => {
        overlay.style.opacity = "0";  // Start fading out
    }, 1700); // 1s before starting the fade out

    // Remove overlay after fade-out
    setTimeout(() => {
        overlay.style.display = "none";  // Hide overlay after fade out
        document.body.style.overflow = "auto";  // Enable scrolling
        document.body.style.overflowX = "hidden";  // Disable horizontal scrolling

    }, 2200);  // 1.5s to match the total duration

    if(FugvLevel < 1){
        document.getElementById("LevelWaitContent").style.display = "none";
        setTimeout(() => {
            document.getElementById("LevelWaitContent").style.display = "block";
            audioNew.play();
        }, 30000);
    }

    if(FugvLevel > 0){
        document.getElementById("Level0content").style.display = "block";
        document.getElementById("Level1content").style.display = "block";
        document.getElementById("visitorCounter").innerHTML  = "Current Connections: 2";
        document.getElementById("visitorCounter").classList.add("evil");
        document.getElementById("Level1content2").style.display = "block";
        
    }
    if(FugvLevel > 2){
        document.body.innerHTML = 'Fail. this website does not exist.';
    } 

}, { once: true });

function handleLogin() {
    let FugvLevel = localStorage.getItem("FugvLevel");

    if (FugvLevel == undefined) {
        // If no value is found, set it to 0
        localStorage.setItem("FugvLevel", 0);
        FugvLevel = 0; // Set it as a number, not string
    }
    FugvLevel = parseInt(FugvLevel); // Convert FugvLevel from string to number

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Clear previous alerts
    document.getElementById("LoginAlert").innerHTML = "";
    document.getElementById("PasswordAlert").innerHTML = "";

    // Check if any fields are empty
    if (username === "" || password === "") {
        audioWrong.play();
        if (username === "") {
            document.getElementById("LoginAlert").innerHTML  = "Login empty";
        }
        if (password === "") {
            document.getElementById("PasswordAlert").innerHTML  = "Password empty";
        }
        return;
    }

    let validUser = "";
    let validPass = "";

    switch (FugvLevel) {
        case 0:
            validUser = "admin.molol@moddytronics.com";
            validPass = "s679hd98f";
            break;
        case 1:
            validUser = "romaniaborderpolice@gmail.com";
            validPass = "ezpnsf";
            break;
        case 2:
            validUser = "li_liza_n";
            validPass = "shalzauldz";
            break;
    }

    // Check if credentials are valid
    if (username == validUser && password.replace(/[^a-zA-Z0-9]/g, '').includes(validPass)) {
        FugvLevel = FugvLevel + 1;
        localStorage.setItem("FugvLevel", FugvLevel); // Store the updated FugvLevel
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        audio1.pause();
        audio2.pause();
        audio0.pause();
        audioNew.play();
        switch (FugvLevel) {
            case 1:
                level1();
                break;
            case 2:
                level2();
                break;
        }
    } else {
        audioWrong.play();
        if (username != validUser) {
            document.getElementById("LoginAlert").innerHTML  = "Invalid login";
        }
        else if (password != validPass) {
            document.getElementById("PasswordAlert").innerHTML  = "Invalid password";
        }
    }

}

function level1() {
    document.getElementById("visitorCounter").innerHTML  = "Current Connections: 2";
    document.getElementById("visitorCounter").classList.add("evil");
    document.getElementById("Level1content").style.display = "block";
    setTimeout(() => {
        document.getElementById("Level1content2").style.display = "block";
        audioNew.play();
    }, 4000);
    setTimeout(() => {
        audio1.play();
    }, 1000);
    
}

function level2() {
    setTimeout(() => {
        document.body.innerHTML = 'Fail. this website does not exist.';
        window.Location.href = "https://1drv.ms/f/c/97d41c7c104cad68/EjdDhHN9kbtLt9dPoRYLsdIBV0ksN5RIyFwALPBWkusv_g?e=CwkdIh";
    }, 1000);
}