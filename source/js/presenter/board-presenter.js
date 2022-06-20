

export default class BoardPresenter {
  #boardContainer = null;
  #cardsModel = null;
  #boardCards = [];
  constructor(boardContainer, cardsModel) {
    this.#boardContainer = boardContainer;
    this.#cardsModel = cardsModel;
  }

  init = () =>{
    this.#boardCards =[...this.#cardsModel.card];
    console.log(this.#boardCards);
    console.log(this.#boardCards);
    console.log(this.#boardCards);
  }
}
