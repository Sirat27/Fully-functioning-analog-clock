const hour = document.getElementById('hr'),
    minutes = document.getElementById('min'),
    seconds = document.getElementById('sec');

setInterval(() => {
    let date = new Date();
    let hr = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${(hr)+(min)/12}deg)`;
    minutes.style.transform = `rotateZ(${min}deg)`;
    seconds.style.transform = `rotateZ(${sec}deg)`;

})

const text_hour = document.getElementById('h'),
    text_min = document.getElementById('m'),
    text_ampm = document.getElementById('ampm');
text_sec = document.getElementById('s');

const clock_text = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ap;
    if (hh >= 12) {
        hh = hh - 12;
        ap = "PM";
    } else {
        ap = "AM";
    }
    if (hh < 10) {
        hh = `0${hh}`;
    }
    if (hh == 0) {
        hh = 12;
    }
    text_hour.innerHTML = `${hh}:`;
    if (mm < 10) {
        mm = `0${mm}`;
    }
    text_min.innerHTML = `${mm}:`;
    if (ss < 10) {
        ss = `0${ss}`;
    }
    text_sec.innerHTML = `${ss}`;



    text_ampm.innerHTML = ap;
}

setInterval(clock_text, 1000)

/*================  dark theme ================= */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})