const theme_toggler = document.getElementById('toggle_theme')
const bg = document.querySelector('body')
const circle = document.getElementById('circle');
    
let theme_light = true

//Loading saved theme and position
let savedTheme = localStorage.getItem('theme');
let savedPos = localStorage.getItem('Cpos');

//Default to system theme
let Cpos = localStorage.getItem('Cpos')
if (!savedTheme){
    //Checks for system default theme
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', savedTheme);
}

//Apply saved theme
if (savedTheme === 'dark'){
    bg.style.backgroundColor = 'rgb(31, 31, 31)';
    bg.style.color = 'white';
    theme_toggler.style.backgroundColor = 'rgb(87, 85, 85)';
    theme_light = false;
}
else{
    bg.style.backgroundColor = 'white';
    bg.style.color = 'rgb(31, 31, 31)';
    theme_toggler.style.backgroundColor = 'white';
    theme_light = true;
}

//Apply saved circle postion or set Default
if (savedPos){
    circle.style.left = savedPos;
}
else{
    circle.style.left = '5px';
    localStorage.setItem('Cpos', '5px');
}

//Button click handler
function moveCircle(event) {
    const circle = document.getElementById('circle');
    const clickX = event.offsetX;
    const middle = theme_toggler.offsetWidth / 2;
    let when_light;
    let when_dark;
    if (clickX < middle) {
        // Move to left
        circle.style.left = "5px";
        localStorage.setItem('Cpos', '5px')
    } 
    else {
        // Move to right
        const rightPos = (theme_toggler.offsetWidth - circle.offsetWidth - 5) + 'px';
        circle.style.left = rightPos;
        localStorage.setItem('Cpos', rightPos);
    }
}

//Event Listener on toggle
theme_toggler.addEventListener('click', (event)=>{

    console.log(event.target.id, "theme applied.");

    //Toggle Dark
    if(theme_light){     
        bg.style.backgroundColor = 'rgb(31, 31, 31)'
        bg.style.color = 'white';
        theme_toggler.style.backgroundColor = 'rgb(87, 85, 85)';
        theme_light = false

        localStorage.setItem('theme', 'dark')
        
    }
    //Toggle Light
    else{
        bg.style.backgroundColor = 'white'
        bg.style.color = 'rgb(31, 31, 31)';
        theme_toggler.style.backgroundColor = 'white'
        theme_light = true

        localStorage.setItem('theme', 'light')
    }
})

