var assert = require('assert');
var bills = require('../readCSV');
//read the files and create a list of objects


describe('Itemised Bill', function(){

	it('reads a csv file',function(){
		var csvLines = bills.mycsv('./ItemisedBill.csv')
		console.log(csvLines);
		assert.equal(35,csvLines.length, 'my test assert');
	});

	it('should return all MTN calls', function(){
		var myOb = bills.mycsv('./ItemisedBill.csv')
		var callsPerProvider = bills.callsForProvider(myOb,'MTN')
		console.log(callsPerProvider);
		assert.equal(16,callsPerProvider.length);
	});
	it('should return all Vodacom calls', function(){
		var myOb = bills.mycsv('./ItemisedBill.csv')
		var callsPerProvider = bills.callsForProvider(myOb,'Vodacom')
		console.log(callsPerProvider);
		assert.equal(8,callsPerProvider.length);
	});
	it('should return all Cell C calls', function(){
		var myOb = bills.mycsv('./ItemisedBill.csv')
		var callsPerProvider = bills.callsForProvider(myOb,'CellC')
		console.log(callsPerProvider);
		assert.equal(11,callsPerProvider.length);
	});
});

//describe('Test my function', function(){
	//it('groups calls according to providers',function(){
		//readCsv('ItemisedBill.csv')
		//var provider = new Provider();
		//var cellphone = provider.callsForProvider('myOb','MTN');
		//console.log(cellphone);
		//assert.equal(16,cellphone.length);
	//});
//});
