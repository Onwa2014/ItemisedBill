var fs = require('fs')
//read the files and create a list of objects

exports.mycsv = function(filePath){

	var linesInfile = fs.readFileSync(filePath, "utf-8");
	 	//console.log("====>" + fs.readFileSync('ItemisedBill.csv', 'utf8'));

	var rows = linesInfile.split("\r");
	var myOb = [];
	 		
	 		// think about creating a list of objects from the csv
	rows.forEach(function(row){
	 	if(rows.indexOf(row)===0 || row.length<=4)
	 	{return}
	 		else{
		 		var columns = row.split(',');
		 		var Date = columns[0]; // this is the Product Name e.g Milk
		 		var Provider = columns[1]; // number of the product sold for that day on my list
		 		var Number =columns[2];
		 		var Duration = columns[3]

		 		var itemObj = {
		 			Date: columns[0],
		 			Provider:columns[1],
		 			Number: columns[2],
		 			Duration:columns[3]
		 		}

		 		myOb.push(itemObj);
	 		}
	});

	return myOb;
};

exports.callsForProvider = function(myOb,provider){
	var callList = [];
	for (var i = 0; i < myOb.length; i++) {
		 	var currentprovider = myOb[i];
		
			if(currentprovider.Provider === provider){
				callList.push(currentprovider);
			}
		}
	console.log(callList);
	return callList;
};

exports.groupByProvider = function(object,Provider){

	var providerMap = {};

 		// think about creating a list of objects from the csv
 		//
 	Providers.forEach(function(provider){
 		var currentprovider = provider.Provider; // this is the providers Name e.g Milk
 		var numberOfCalls = provider.soldItems; // number of the provider sold for that day on my list

 		if(providerMap[currentprovider] === undefined){
 			//listOfProducts.push(currentprovider);
 			providerMap[currentprovider] = 0;
 		}

 		providerMap[currentprovider] = providerMap[currentprovider] + Number(numberOfCalls);
 	});
 	return providerMap;
 	console.log(providerMap);
};