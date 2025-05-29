const theme_toggler = document.getElementById('toggle_theme')
const bg = document.querySelector('body')
const circle = document.getElementById('circle');
const header_border = document.querySelector('.header_div')

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
        bg.style.backgroundColor = 'rgb(19, 19, 19)';
        bg.style.color = 'white';
        theme_toggler.style.backgroundColor = 'rgb(105, 105, 105)';
        theme_light = false;
        //Circle Left
        const rightPos = (theme_toggler.offsetWidth - circle.offsetWidth - 5) + 'px';
        circle.style.left = rightPos;
        circle.style.backgroundColor = 'white';
        circle.style.border = 'none';
        circle.style.transition = 'background-color: 1s ease'
        
        header_border.style.border = 'solid white 2px'    
    }
    else{
        bg.style.backgroundColor = 'white';
        bg.style.color = 'rgb(31, 31, 31)';
        theme_toggler.style.backgroundColor = '#ddd';
        theme_light = true;
        //Circle Right
        circle.style.left = '5px';
        circle.style.backgroundColor = 'black'
        circle.style.border = 'solid black 1px'
        circle.style.transition = 'background-color: 1s ease'
        header_border.style.border = 'solid black 2px'        
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
        circle.style.backgroundColor = 'white';
        circle.style.border = 'none';
        circle.style.transition = 'background-color: 1s ease'
        header_border.style.border = 'solid white 2px'
    }
    //Toggle Light
    else{
        applyTheme('light');
        localStorage.setItem('theme', 'light');
        circle.style.backgroundColor = 'black'
        circle.style.border = 'solid black 1px'
        circle.style.transition = 'background-color: 1s ease'
        header_border.style.border = 'solid black 2px'
    }
})