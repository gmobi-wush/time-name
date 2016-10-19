var assert = require('assert');
var tname = require(__dirname + "/../index.js");
var moment = require('moment').utc;

const FMT = "YYYYMMDDHHmmss";

describe("Check input and output", function() {
	var t1 = moment("20160101000000", FMT);

	it("Test getMinName and parseMinName", function() {
		var getName = tname.getMinName, parseName = tname.parseMinName;
		assert(getName(t1) === "2016/01/01/00/00");
		assert(getName(t1, "smaato/") === "smaato/2016/01/01/00/00");
		assert(parseName("smaato/2016/01/01/00/00", "smaato/").toDate().getTime() === t1.toDate().getTime());
	});
});
