



class EventBody {
  #handlerClickFunction = [];
  #handlerInputFunction = [];

  constructor() {
    document.body.addEventListener('click', (event) => this.handlerBodyClick(event));
    document.body.addEventListener('input', (event) => this.handlerBodyInput(event));
  }

  handlerBodyClick(event) {
    for (let keyFunction of this.#handlerClickFunction) {
      keyFunction(event)
    }
  }

  handlerBodyInput(event) {
    for (let keyFunction of this.#handlerInputFunction) {
      keyFunction(event)
    }
  }

  addHandlerClickFunction(callBack) {
    this.#handlerClickFunction.push(callBack)
  }

  addHandlerInputFunction(callBack) {
    this.#handlerInputFunction.push(callBack)
  }



}


const eventBody = new EventBody();











