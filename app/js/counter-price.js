

//Обчисляємо загальну суму віх карточок
function totalCostCards(eventTarget, parentList, priceCard, totalPrice) {
  const modalCardList = eventTarget?.closest(parentList);
  const modalCards = modalCardList?.querySelectorAll(priceCard);
  const modalCardSum = modalCardList?.querySelector(totalPrice); //Загальна сума всіх товарів
  const arrayFromNodeList = Array.from(modalCards);
  const totalCost = arrayFromNodeList.reduce((a, e) => a + +e.innerText, 0)
  modalCardSum.innerText = totalCost
}


const eventTarget = document.querySelector('.my-number__minus');
eventTarget && totalCostCards(eventTarget, '.modal__card-list', '.modal__card-price-number', '.modal__card-sum');

function numberCounter(numberBlockParent, callBack = undefined) {
  document.body.addEventListener('click', function (event) {
    event.preventDefault()
    const eventTarget = event.target;
    const nodeParent = eventTarget.closest(numberBlockParent)
    if (nodeParent) {
      const input = nodeParent.querySelector('.my-number__input');
      const buttonMinus = nodeParent.querySelector('.my-number__minus');
      const buttonPlus = nodeParent.querySelector('.my-number__plus');

      if (input && buttonMinus && buttonPlus) {
        const min = +input.getAttribute("min") || -9999999;
        const max = +input.getAttribute("max") || 9999999;
        const step = +input.getAttribute("step") || 1;
        const value = +input.value;

        if (eventTarget == buttonMinus) {
          const rez = value - step
          if (rez >= min) input.value = rez
        } else if (eventTarget == buttonPlus) {
          const rez = value + step
          if (rez <= max) input.value = rez
        }

        const obj = {
          min,
          max,
          step,
          value: +input.value,
          eventTarget,
          nodeParent,
          input,
          buttonMinus,
          buttonPlus,
        }

        callBack && callBack(obj)
      }
      console.log(event.target)
    }
  })


  document.body.addEventListener('input', function (event) {
    event.preventDefault()
    const eventTarget = event.target;
    const nodeParent = eventTarget.closest(numberBlockParent)
    if (nodeParent) {
      const input = nodeParent.querySelector('.my-number__input');
      const buttonMinus = nodeParent.querySelector('.my-number__minus');
      const buttonPlus = nodeParent.querySelector('.my-number__plus');

      if (input && buttonMinus && buttonPlus) {
        const min = +input.getAttribute("min") || -9999999;
        const max = +input.getAttribute("max") || 9999999;
        const step = +input.getAttribute("step") || 1;
        const value = +input.value;

        if (eventTarget === input) {
          console.log(value)
          if (value >= min && value <= max)
            input.value = value
          else
            if (value > max)
              input.value = max
            else if (value < min)
              input.value = min
          // else if (value == '-')
          //   input.value = value
          // else
          // input.value = 0
        }

        const obj = {
          min,
          max,
          step,
          value: +input.value,
          eventTarget,
          nodeParent,
          input,
          buttonMinus,
          buttonPlus,
        }

        callBack && callBack(obj)
      }
      // console.log(event.target)
    }
  })

}

function printObj(obj) {



  // buttonMinus
  // : 
  // button.my-number__minus.my-number__button
  // buttonPlus
  // : 
  // button.my-number__plus.my-number__button
  // eventTarget
  // : 
  // input.my-number__input
  // input
  // : 
  // input.my-number__input
  // max
  // : 
  // 20
  // min
  // : 
  // -20
  // nodeParent
  // : 
  // div.my-number
  // step
  // : 
  // 1
  // value
  // : 
  // "04"

  const modalCardWrap = obj.eventTarget.closest('.modal__card-wrap'); //Лбгортка карточки
  const numberPrice = modalCardWrap?.querySelector('.modal__card-price-number'); //Загальна ціна товару карточки
  const numberDataPrice = numberPrice?.dataset.price; //Вартість одиниці товару
  numberPrice.innerText = `${obj.value * +numberDataPrice}`

  totalCostCards(obj.eventTarget, '.modal__card-list', '.modal__card-price-number', '.modal__card-sum')
}



numberCounter('.my-number', printObj)











