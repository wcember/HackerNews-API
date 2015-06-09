(function(exports){
	if (typeof XMLHttpRequest != 'function') {
		var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	}

	function httpGet(url)
	{
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", url, false );
	    xmlHttp.send( null );
	    return JSON.parse(xmlHttp.responseText);
	}

	var hn = {};

	hn.getItem = function(item_id) {
		item_id = item_id.toString();
		var url = 'https://hacker-news.firebaseio.com/v0/item/' + item_id + '.json';
		return httpGet(url);
	}

	hn.getUser = function(username) {
		var url = 'https://hacker-news.firebaseio.com/v0/user/' + username +
			'.json';
		return httpGet(url);
	}

	hn.getMaxItem = function() {
		return httpGet('https://hacker-news.firebaseio.com/v0/maxitem.json');
	}

	hn.getTopStories = function() {
		return httpGet('https://hacker-news.firebaseio.com/v0/topstories.json');
	}

	hn.getNewStories = function() {
		return httpGet('https://hacker-news.firebaseio.com/v0/newstories.json');
	}

	hn.getAskStories = function () {
		return httpGet('https://hacker-news.firebaseio.com/v0/askstories.json');
	}

	hn.getShowStories = function () {
		return httpGet('https://hacker-news.firebaseio.com/v0/showstories.json');
	}

	hn.getJobStories = function () {
		return httpGet('https://hacker-news.firebaseio.com/v0/jobstories.json');
	}

	hn.getUpdates = function() {
		return httpGet('https://hacker-news.firebaseio.com/v0/updates.json');
	}

	exports.hn = hn;

})(typeof exports === 'undefined'? this['hackernews-api']={}: exports);

