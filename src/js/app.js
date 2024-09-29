import Validator from './validator'
import Redactor from './telephone'
const instances = {
	redactor: new Redactor(),
	validator: new Validator()
}
export default instances 

