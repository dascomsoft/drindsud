


let render = document.querySelector('.detail-content');

document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const idMenber = urlParams.get('id');
    const productDetailId = menbers.find(menber => menber.id === parseInt(idMenber))

        
    if(productDetailId){

    render.innerHTML = `
    <div class='main-detail'>
        <div class='container'>
        <h2 class="mb-3 mt-4 fw-bold">Profil Polyvalent</h2>

         <div class="detail-display">
            <img src="${productDetailId.image}" />
          <div class="cart-details">
            <h1><strong>${productDetailId.name}</strong></h1>
            <p><strong>Fonction</strong> : ${productDetailId.fonction}</p>
            <p class="">${productDetailId.description}</p>
            
           <a href="home.html#team" class="btn btn-secondary">Check More</a>

      </div>
    </div>
   </div>
  </div>
     `   
    }

    else{

        return('empty')

    }
  });
