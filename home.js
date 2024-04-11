
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


 const display = document.querySelector('.team-content');

  menbers.forEach(menber => {

    display.innerHTML +=`
     
    <div class="menber-display">
       <div class="menber-container">
        <img src="${menber.image}" alt="image" />
        <div class="menber-description text-center mt-3">
          <h4>${menber.name}</h4>
           <button class="btn btn-secondary" onclick="redirect(${menber.id})">En savoir plus</button>
       </div>
      </div>
    `

    })
;


function redirect(idMenber){
    window.location.href = `detail.html?id=${idMenber}`
}