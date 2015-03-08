var getChartboostConfig = function() {
	var chartboostAppIdKey = "chartboostAppId"; 
	var chartboostAppSignatureKey = "chartboostAppSignature";
	Parse.Config.get().then(function(config) {
		console.debug("getting config chartboost app id =" + config.get(chartboostAppIdKey));
		console.debug("getting config chartboost app signature =" + config.get(chartboostAppSignatureKey));
	}).then(function() {
		return { "chartboostAppId" : config.get(chartboostAppIdKey), "chartboostAppSignatureKey" : config.get(chartboostAppSignatureKey)}
	}, function(error) {
		console.error(error);
		return null;
	});
});