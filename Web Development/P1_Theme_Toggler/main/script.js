const theme_toggler = document.getElementById('toggle_theme')
const bg = document.querySelector('body')
    
let theme_light = true

//Check saved theme in localStorage and apply it on page load
let savedTheme = localStorage.getItem('theme');
if (!savedTheme){
    //Checks for system default theme
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', savedTheme);
}
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