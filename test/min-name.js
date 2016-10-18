var assert = require('assert');
var tname = require(__dirname + "/../index.js");
var moment = require('moment').utc;

describe("Test MinName", function() {
	it("Default argument is now", function() {
		var now = Date.now();
		var name1 = tname.getMinName();
		var name2 = tname.getMinName(now);
		assert(name1, name2);
	});

	it ("parseMinName inverses getMinName", function() {
		var inputs = [
			moment("20160101000000", "YYYYMMDDhhmmss"),
			moment("20160101005900", "YYYYMMDDhhmmss"),
			moment("20160101235900", "YYYYMMDDhhmmss"),
			moment(moment().format("YYYYMMDDhhmm"), "YYYYMMDDhhmm")
		];
		inputs.forEach(function(input) {
			assert(input.toDate(), tname.parseMinName(tname.getMinName(input)).toDate());
		});
	});
})
