const request = require('request');
const fs = require('fs');

exports.GetDinosaur = function(dinoName, callback) {

	if (dinoName === "rand") {
		//Search the dinosaur database
		const paleoDBQuery  = "https://paleobiodb.org/data1.2/taxa/list.json?rowcount&base_name=Dinosauria&rank=5";
		GetRandomDinosaur(paleoDBQuery, function (result) {
			dinoName = result;
			GetIndividualDinosaur(dinoName, function (data) {
				callback(data);
			});
		});
	}else{
		GetIndividualDinosaur(dinoName, function (data) {
			if (data === "error") {
				callback("Could not find " + dinoName + " in database.");
			} else {
				callback(data);
			}
		});
	}
}

//Get a random dinosaur from the database
function GetRandomDinosaur(query, callback) {
	request(query, function (error, response, body) {
			if (JSON.parse(body).status_code != undefined) {
				 return;
			}
			const dbResult = JSON.parse(body);
			const dbLength = Object.keys(dbResult.records).length;
			const dbIndex = Math.floor(Math.random() * dbLength + 1);

			const name = dbResult.records[dbIndex].nam;
			callback(name);
		});
}

function GetIndividualDinosaur(query, callback) {
//Get individual dinosaur data
	const dinoQuery = "https://paleobiodb.org/data1.2/taxa/single.json?rowcount&name=Dino:" + query + ".&show=full";
	request(dinoQuery, function (error, response, body) {
			if (JSON.parse(body).status_code != undefined) {
				callback("error");
			}else {
				const dino = JSON.parse(body).records[0];
				const information = `\nDinosaur name: ${dino.nam}\nPeriod: ${dino.tei}\nDiet: ${dino.jdt}`;
				callback(information);
			}
	});
}

exports.DinosaurFacts = function(callback) {
	var factsList = "";
	fs.readFile('dinosaurfacts.txt', 'utf-8', function (err, data) {
		if (err) throw err;
		factsList = data;

		factsList = factsList.split("\n");
		const factIndex = Math.floor(Math.random() * factsList.length-1);
		const fact = factsList[factIndex];
		callback(fact);
	});
}
