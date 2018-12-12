function (user, context, callback) {
	if (context.request.geoip) {
		user.country = context.request.geoip.country_name;
	}
	//console.log("geoip");
	callback(null, user, context);
}
