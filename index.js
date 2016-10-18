var moment = require('moment').utc;

module.exports = {
	getMinName : function(time) {
		if (!time) time = Date.now();
		return moment(time).format("YYYY/MM/DD/hh/mm");
	},
	parseMinName : function(name) {
		return moment(name, "YYYY/MM/DD/hh/mm");
	},
	getHourName : function(time) {
		if (!time) time = Date.now();
		return moment(time).format("YYYY/MM/DD/hh");
	},
	parseHourName : function(name) {
		return moment(name, "YYYY/MM/DD/hh");
	}
}
