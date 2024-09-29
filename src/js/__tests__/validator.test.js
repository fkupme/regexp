import instances from '../app';

const arr = [
	['fkupme', true],
	['Fkup11me', true],
	['fku_p111me', true],
	['fkup11-mE', true],
	['fkupme_', false],
	['11fkupme', false],
	['fku1111pme', false],
	['fkupme11', false],
	['_fkupme', false],
	['-fkupme', false],
	['fkupme-', false],
	['fkuуЁЁpme', false],
	['fkuу!pme', false],
	['fkuу$%^&&***#pme', false],
]

test.each(arr)('testing valid and invalid usernames', (username, expected)=>{
	expect(instances.validator.validateUsername(username).status).toBe(expected)
})