export default class Validator {
  validateUsername(name) {
    if (!this.validateSymbols(name)) {
      return {
        status: false,
        message:
          "Имя пользователя должно содержать только латинские буквы, символы тире -, подчёркивания _ и цифры 0-9!",
      };
    } else if (!this.validateNumbers(name)) {
      return {
        status: false,
        message: "Имя пользователя не должно содержать подряд более трёх цифр!",
      };
    } else if (!this.validateBeginEnd(name)) {
      return {
        status: false,
        message:
          "Имя пользователя не должно заканчиваться цифрами, символами подчёркивания или тире!",
      };
    } else {
      return {
        status: true,
        message: "Имя пользователя удовлетворяет условиям!",
      };
    }
  }
  validateSymbols(name) {
    const regexp = /^[a-z0-9\-_]+$/i;
    if (!regexp.test(name)) {
      return false;
    } else {
      return true;
    }
  }
  validateNumbers(name) {
    const regexp = /\d{3}\d/;
    if (regexp.test(name)) {
      return false;
    } else {
      return true;
    }
  }
  validateBeginEnd(name) {
    const regexp = /^[a-z]\S+[a-z]$/gi;
    if (regexp.test(name)) {
      return true;
    } else {
      return false;
    }
  }
}