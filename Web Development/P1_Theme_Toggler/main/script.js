const theme_toggler = document.getElementById('toggle_theme')
console.log(theme_toggler)

const bg = document.querySelector('body')
    
let theme_light = true

theme_toggler.addEventListener('click', ()=>{
    //Toggle Dark
    if(theme_light){     
        bg.style.backgroundColor = 'black'
        bg.style.color = 'white';
        theme_toggler.style.backgroundColor = 'rgb(87, 85, 85)';
        theme_light = false
    }
    //Toggle Light
    else{
        bg.style.backgroundColor = 'white'
        bg.style.color = 'black';
        theme_toggler.style.backgroundColor = 'white'
        theme_light = true
    }
})