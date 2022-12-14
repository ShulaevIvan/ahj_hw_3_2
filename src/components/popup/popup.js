export default class Popup {
  constructor() {
    this.popup = document.querySelector('.popup');
    this.popupBtn = document.querySelector('.popup__close');
    this.popupBtn.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('popup__close')) {
        this.hide();
      }
    });
  }

  show() {
    this.popup.classList.remove('popup_hidden');
  }

  hide() {
    this.popup.classList.add('popup_hidden');
  }
}
