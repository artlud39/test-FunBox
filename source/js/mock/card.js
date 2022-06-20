import {fillings, titles, weights} from '../const.js'
import {getRandomInteger} from '../utils/common.js'

export const generateCards = () => ({
  title: titles[getRandomInteger(0, titles.length -1)],
  weight: weights[getRandomInteger(0, weights.length -1)],
  filling: fillings[getRandomInteger(0, fillings.length -1)]
});
