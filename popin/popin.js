function initPopin(popinContent){
    const popin = `
        <div class="popin-overlay">
            <div class="popin-container">
                <button class="popin-close icon-close">
                    <svg class="icon icon--close">
                        <use xlink:href="sprite.svg#icon-info"></use>
                    </svg>
                </button>
                ${popinContent}
            </div>
        </div>
    `;
    document.querySelector('html').classList.add('no-scroll');
    document.querySelector('body').insertAdjacentHTML("afterbegin", popin);
}

document.addEventListener('click', clicked => {
    if(clicked.target.matches('.popin-close') || clicked.target.closest('.popin-close')){
        document.querySelector('.popin-overlay').remove();
        document.querySelector('html').classList.remove('no-scroll');
    }
})


// Ci-dessous est un exemple de popin retention, à ne pas récupérer, donc :
const popinContent = `
    <div class="popin-body">
        <p class="popin-title">Ces articles sont encore dans votre panier...</p>
        <p class="popin-subtitle">Ne les laissez pas partir !</p>
        <ul class="popin-productList">
            <li class="popin-productItem">
                <figure class="popin-figure">
                    <img
                        src="//media.vertbaudet.fr/Pictures/vertbaudet/197572/tee-shirt-fille-col-en-broderie-anglaise.jpg?width=145"
                        alt="alt"
                    />
                    <figcaption>
                        Tour de lit respirant Etoiles du soir blanc
                    </figcaption>
                </figure>
                <div class="box-productPrice">
                    <span class="productPrice-basis">
                        23
                        <span class="cents">€99</span>
                    </span>
                    <img class="productPrice-reduction" src="https://media.vertbaudet.fr/Pictos/3-0-0/txdmq_40.svg" alt="40%" />
                    <span class="productPrice-actual">
                        14
                        <span class="cents">€99</span>
                    </span>
                </div>
            </li>
            <li class="popin-productItem">
                <figure class="popin-figure">
                    <img
                        src="//media.vertbaudet.fr/Pictures/vertbaudet/197572/tee-shirt-fille-col-en-broderie-anglaise.jpg?width=145"
                        alt="alt"
                    />
                    <figcaption>
                        Tour de lit respirant Etoiles du soir blanc
                    </figcaption>
                </figure>
                <div class="box-productPrice">
                    <span class="productPrice-basis">
                        23
                        <span class="cents">€99</span>
                    </span>
                    <img class="productPrice-reduction" src="https://media.vertbaudet.fr/Pictos/3-0-0/txdmq_40.svg" alt="40%" />
                    <span class="productPrice-actual">
                        14
                        <span class="cents">€99</span>
                    </span>
                </div>
            </li>
            <li class="popin-productItem">
                <figure class="popin-figure">
                    <img
                        src="//media.vertbaudet.fr/Pictures/vertbaudet/197572/tee-shirt-fille-col-en-broderie-anglaise.jpg?width=145"
                        alt="alt"
                    />
                    <figcaption>
                        Tour de lit respirant Etoiles du soir blanc
                    </figcaption>
                </figure>
                <div class="box-productPrice">
                    <span class="productPrice-basis">
                        23
                        <span class="cents">€99</span>
                    </span>
                    <img class="productPrice-reduction" src="https://media.vertbaudet.fr/Pictos/3-0-0/txdmq_40.svg" alt="40%" />
                    <span class="productPrice-actual">
                        14
                        <span class="cents">€99</span>
                    </span>
                </div>
            </li>
        </ul>
        <button>Je valide mon panier</button>
    </div>
    <div class="popin-footer">
        <div>
            <span>picto</span>
            <p>Satisfait ou remboursé</p>
        </div>
        <div>
            <span>picto</span>
            <p>Retour gratuit</p>
        </div>
    </div>
`

initPopin(popinContent);