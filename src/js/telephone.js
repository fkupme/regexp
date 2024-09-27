class Redactor{
	redactPhone(number){
		this.cleanNonDigits(this.firstSymbol(number));
	}

	redactFirstSymbol(number){
		const regexpCountry = /^8|^7/
		const regexpWithoutCountry = /(^\d)/
		if(regexpCountry.test(number)){
			return number.replace(regexpCountry, '+7')
		}else if(regexpWithoutCountry.test(number)){
			return number.replace(regexpWithoutCountry, '+7$1')
		}else{
			return number
		}
	}
	cleanNonDigits(number){
		const regexp = /\D(?<!\+)/gi
		return number.replace(regexp, '')
	}
}

const redactor = new Redactor();
export default redactor