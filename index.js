const div=document.createElement("div")
div.textContent="Esto es un div insertado 'tradicionalmente'"
const test= document.getElementById("test")
test.appendChild(div)

//[1,2,3,4,5]
for(let i = 0; i<5;i++){
    const card = `
    <div id="tarjeta${i}"class="card mx-5 my-5" style="width: 18rem;">
  <img src="https://yt3.ggpht.com/zs8bJKwBKKQVypFrZ2-v_VFyd-6PHfG2rUQdELnVS-FQpVfP_wWjWyEj6kdhMDOM-OCbw7-u_g=s600-c-k-c0x00ffffff-no-rj-rp-mo" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title${i}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML+=card

}