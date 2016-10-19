var moment = require('moment').utc;

function getName(fmt) {
	return function(time, prefix, suffix) {
		if (!time) time = Date.now();
		if (!prefix) prefix = "";
		if (!suffix) suffix = "";
		return prefix + moment(time).format(fmt) + suffix;
	};
}

function parseName(fmt) {
	return function(name, prefix, suffix, verify) {
		if (!prefix) prefix = "";
		if (!suffix) suffix = "";
		if (verify) {
			function throwError() {
				throw new Error("name: " + name + " is invalid for " + prefix + " " + fmt + " " + suffix);
			}
			if (name.length != prefix.length + fmt.length + suffix.length) {
				throwError();
			}
			if (name.slice(0, prefix.length) !== prefix) throwError();
			if (name.slice(prefix.length + fmt.length, prefix.length + fmt.length + suffix.length) !== suffix) throwError();
		}
		return moment(name.slice(prefix.length, prefix.length + fmt.length), fmt);
	};
}

module.exports = {
	getMinName : getName("YYYY/MM/DD/HH/mm"),
	parseMinName : parseName("YYYY/MM/DD/HH/mm"),
	getHourName : getName("YYYY/MM/DD/HH"),
	parseHourName : parseName("YYYY/MM/DD/HH"),
	getDayName : getName("YYYY/MM/DD"),
	parseDayName : parseName("YYYY/MM/DD")
};
