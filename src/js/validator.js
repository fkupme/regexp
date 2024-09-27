class Validator {
	validateUsername(name){
		if(!this.validateSymbols(name)){
			return 'Имя пользователя должно содержать только латинские буквы, символы тире -, подчёркивания _ и цифры 0-9!'
		}else if(!this.validateNumbers(name)){
			return 'Имя пользователя не должно содержать подряд более трёх цифр!'
		} else if(!this.validateBeginEnd(name)){
			return 'Имя пользователя не должно заканчиваться цифрами, символами подчёркивания или тире!'
		} else {
			return 'Имя пользователя удовлетворяет условиям!'
		}
	}
	validateSymbols(name){
		const regexp = /^[a-z0-9\-\_]$/gi
		if (regexp.test(name)){
			return true;
		}else{
			return false;
		}
	}
	validateNumbers(name){
		const regexp = /\d{3}\d/
		if (!regexp.test(name)){
			return true;
		}else{
			return false;
		}
	}
	validateBeginEnd(name){
		const regexp = /^[a-z]\S+[a-z]$/gi
		if (regexp.test(name)){
			return true;
		}else{
			return false;
		}
	}
}
const validator = new Validator();
export default validator