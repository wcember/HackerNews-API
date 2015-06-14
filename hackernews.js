var hn = function() {
	if (typeof require == 'function') {
		var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
		var exports = module.exports = {};	
		var httpGet = function(url)
		{
		    var xmlHttp = new XMLHttpRequest();
		    xmlHttp.open("GET", url, false);
		    xmlHttp.send(null );
		    return JSON.parse(xmlHttp.responseText);
		}	
	} else {
		var exports = {};
		var httpGet = function(url)
		{
		    var xmlHttp = new XMLHttpRequest();
		    xmlHttp.open("GET", url, true);
		    xmlHttp.send(null );
		    return JSON.parse(xmlHttp.responseText);
		}	
	}

	exports.getItem = function(item_id) {
		item_id = item_id.toString();
		var url = 'https://hacker-news.firebaseio.com/v0/item/' + item_id + '.json';
		return httpGet(url);
	}

	exports.getUser = function(username) {
		var url = 'https://hacker-news.firebaseio.com/v0/user/' + username +
			'.json';
		return httpGet(url);
	}

	exports.getMaxItem = function() {
		return httpGet('https://hacker-news.firebaseio.com/v0/maxitem.json');
	}

	exports.getTopStories = function() {
		return httpGet('https://hacker-news.firebaseio.com/v0/topstories.json');
	}

	exports.getNewStories = function() {
		return httpGet('https://hacker-news.firebaseio.com/v0/newstories.json');
	}

	exports.getAskStories = function () {
		return httpGet('https://hacker-news.firebaseio.com/v0/askstories.json');
	}

	exports.getShowStories = function () {
		return httpGet('https://hacker-news.firebaseio.com/v0/showstories.json');
	}

	exports.getJobStories = function () {
		return httpGet('https://hacker-news.firebaseio.com/v0/jobstories.json');
	}

	exports.getUpdates = function() {
		return httpGet('https://hacker-news.firebaseio.com/v0/updates.json');
	}

	return exports

}();

