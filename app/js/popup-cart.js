function renderPopupCart() {
  const dataCarts = JSON.parse(localStorage.getItem(('dataCart')))
  const countProduct  = document.querySelector('.modal__card-cart-count-product span')
  countProduct.innerText = dataCarts.length

  var cards = document.querySelector(".modal__card-list-cart");
  cards.innerHTML= ''
  // console.log(cards)
  for(let i = 0; i< dataCarts.length; i++){
    const dataCart = dataCarts[i];
    const cartElement = `
    <li class="modal__card-item" data-id="${dataCart.id}">
    <div class="modal__card-wrap">
      <div class="modal__card-info">
        <div class="modal__card-img-box">
         ${dataCart.img}
        </div>
        <div class="modal__card-content">
          <h2 class="modal__card-title product-one__title">
          ${dataCart.title}
          </h2>
          <div class="modal__card-price product-one__price">
            <span class="modal__card-price-number" data-price="${dataCart.price}">${dataCart.price}</span>
            <span class="modal__card-price-currency">$</span>
          </div>

        </div>
      </div>
      <form class="modal__card-form product-one__form" action="#">
        <!-- <input class="product-one__num" type="number" value="1" min="1"> -->

        <div class="my-number">
          <button class="my-number__minus my-number__button">-</button>
          <input class="my-number__input" pattern="-?\d*" type="number" value="1" min="1" max="20">
          <button class="my-number__plus my-number__button">+</button>
        </div>

        <button class="modal__card-btn product-one__btn" type="submit">Add to cart</button>
      </form>
    </div>
  </li>
    `
    cards.insertAdjacentHTML("beforeend", cartElement );
  }

}