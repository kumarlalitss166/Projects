const theme_toggler = document.getElementById('toggle_theme')
const bg = document.querySelector('body')
const circle = document.getElementById('circle');
    
let theme_light = true

//Loading saved theme and position
let savedTheme = localStorage.getItem('theme');

//Default to system theme
if (!savedTheme){
    //Checks for system default theme
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', savedTheme);
}

//Apply saved theme and set circle position/color accordingly
function applyTheme(theme) {
    if (theme === 'dark'){
        bg.style.backgroundColor = 'rgb(31, 31, 31)';
        bg.style.color = 'white';
        theme_toggler.style.backgroundColor = 'rgb(87, 85, 85)';
        theme_light = false;
        
        // Circle should be white in dark theme and positioned right
        circle.style.backgroundColor = 'white';
        circle.style.borderColor = 'white';
        const rightPos = (theme_toggler.offsetWidth - circle.offsetWidth - 5) + 'px';
        circle.style.left = rightPos;
    }
    else{
        bg.style.backgroundColor = 'white';
        bg.style.color = 'rgb(31, 31, 31)';
        theme_toggler.style.backgroundColor = '#ddd';
        theme_light = true;
        
        // Circle should be black in light theme and positioned left
        circle.style.backgroundColor = 'black';
        circle.style.borderColor = 'black';
        circle.style.left = '5px';
    }
}

// Apply saved theme on load
applyTheme(savedTheme);

//Event Listener on toggle
theme_toggler.addEventListener('click', (event)=>{
    console.log(event.target.id, "theme applied.");

    //Toggle Dark
    if(theme_light){     
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
    //Toggle Light
    else{
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    }
})