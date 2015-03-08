var chartboostAppId = config.get("chartboostAppId")
var chartboostAppSignature = config.get("chartboostAppSignature")

var getChartboostConfig = function() {
	Parse.Config.get().then(function(config) {
		console.debug("config chartboost app id =" + chartboostAppId);
		console.debug("config chartboost app signature =" + chartboostAppSignature);
	}).then(function() {
		return { "chartboostAppId" : chartboostAppId, "chartboostAppSignatureKey" : chartboostAppSignature}
	}, function(error) {
		console.error(error);
		return null;
	});
});