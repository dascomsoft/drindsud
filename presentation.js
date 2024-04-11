let open = document.getElementById('openBtn');

let close = document.getElementById('closeBtn');

let links = document.getElementById('nav-links');

let menuBar = document.getElementById('header-container');

open.onclick = ()=>{
    links.style.top = '0'
}

close.onclick = () =>{
 links.style.top = '-100vh'
}