import BoardModel from './model/board-model.js'
import BoardPresenter from './presenter/board-presenter.js'

const sitePageMainElement = document.querySelector('.page-main');

const boardModel = new BoardModel();
const boardPresenter = new BoardPresenter(sitePageMainElement, boardModel);
boardPresenter.init();

