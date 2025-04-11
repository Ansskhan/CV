let body = document.getElementById('body');
window.onload = function (){
    let savedtheme = localStorage.getItem('theme')
    if(savedtheme === 'dark'){
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        document.getElementById('dark-theme').checked = true;
        text.innerText = 'Dark Theme';
        text.style.color = 'lightblue';
    }
    else if (savedtheme === 'light'){
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        document.getElementById('light-theme').checked = true;
        text.innerText = 'Light Theme';
        text.style.color = 'darkblue';
    }
}
let text = document.getElementById('indicator');
document.getElementById('light-theme').addEventListener('click', changeTheme);
document.getElementById('dark-theme').addEventListener('click', changeTheme);
function changeTheme() {
    var lighttheme = document.getElementById('light-theme');
    var darktheme = document.getElementById('dark-theme');
    if(lighttheme.checked){
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('theme','light');
        text.innerText = 'Light Theme';
         text.style.color = 'darkblue';
    }
    else if(darktheme.checked){
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        localStorage.setItem('theme','dark');
         text.innerText = 'Dark Theme';
         text.style.color = 'lightblue';
    }

}
console.log(body);
console.log(indicator);

