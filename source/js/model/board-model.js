import {generateCards} from '../mock/card.js'

export default class BoardModel {
  #card = Array.from({length: 3}, generateCards);

  get card() {
    return this.#card;
  }
}
