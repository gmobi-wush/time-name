var assert = require('assert');
var tname = require(__dirname + "/../index.js");
var moment = require('moment').utc;

var testFuns = [
	{name : "getMinName", getName : tname.getMinName, parseName : tname.parseMinName},
	{name : "getHourName", getName : tname.getHourName, parseName : tname.parseHourName},
	{name : "getDayName", getName : tname.getDayName, parseName : tname.parseDayName}
];

describe("Test MinName", function() {
	testFuns.forEach(function(testFun) {
		var getName = testFun.getName, parseName = testFun.parseName;
		it("(" + testFun.name + ") Default argument is now", function() {
			var now = Date.now();
			var name1 = getName();
			var name2 = getName(now);
			assert(name1, name2);
		});

		it ("(" + testFun.name + ") Test inversion", function() {
			var inputs = [
				moment("20160101000000", "YYYYMMDDHHmmss"),
				moment("20160101005900", "YYYYMMDDHHmmss"),
				moment("20160101235900", "YYYYMMDDHHmmss")
			];
			inputs.forEach(function(input) {
				assert(input.toDate(), parseName(getName(input)).toDate());
			});
			var now = Date.now();
			assert(getName(now) === getName(moment(moment(now).format("YYYYMMDDHHmm"), "YYYYMMDDHHmm")));
		});
	});
});
