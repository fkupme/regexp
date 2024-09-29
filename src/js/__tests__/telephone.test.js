import instances from '../app';

const arr = [
	['+79123456789', '+79123456789'],
	['89123456789', '+79123456789'],
	['79123456789', '+79123456789'],
	['9123456789', '+79123456789'],
	['7(912)3456789', '+79123456789'],
	['7 912 345 67 89', '+79123456789'],
	['7 912 345-67-89', '+79123456789'],
];

test.each(arr)('testing telephone number redactor', (telephone, expected)=>{
	expect(instances.redactor.redactPhone(telephone)).toBe(expected)
});