var moment = require('moment').utc;

function getName(fmt) {
	return function(time) {
		if (!time) time = Date.now();
		return moment(time).format(fmt);
	};
}

function parseName(fmt) {
	return function(name) {
		return moment(name, fmt);
	};
}

module.exports = {
	getMinName : getName("YYYY/MM/DD/hh/mm"),
	parseMinName : parseName("YYYY/MM/DD/hh/mm"),
	getHourName : getName("YYYY/MM/DD/hh"),
	parseHourName : parseName("YYYY/MM/DD/hh"),
	getDayName : getName("YYYY/MM/DD"),
	parseDayName : parseName("YYYY/MM/DD")
};
