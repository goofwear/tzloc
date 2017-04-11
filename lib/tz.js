var ctz = require('coordinate-tz');
var geotz = require('geo-tz');

exports.calculate = function (lat,lon) {
    return {
        latitude: lat,
        longitude: lon,
        timezone: geotz.tz(lat,lon)
    };
};
