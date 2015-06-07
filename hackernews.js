var exports = module.exports = {};

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

HN = {};

HN.get_item = function(item_id) {
	item_id = item_id.toString();
	var url = 'https://hacker-news.firebaseio.com/v0/item/' + item_id + '.json';
	return httpGet(url);
}

HN.get_user = function(username) {
	var url = 'https://hacker-news.firebaseio.com/v0/user/' + username +
		'.json';
	return httpGet(url);
}

HN.get_maxitem = function() {
	return httpGet('https://hacker-news.firebaseio.com/v0/maxitem.json');
}

HN.get_topstories = function() {
	return httpGet('https://hacker-news.firebaseio.com/v0/topstories.json');
}

HN.get_newstories = function() {
	return httpGet('https://hacker-news.firebaseio.com/v0/newstories.json');
}

HN.get_askstories = function () {
	return httpGet('https://hacker-news.firebaseio.com/v0/askstories.json');
}

HN.get_showstories = function () {
	return httpGet('https://hacker-news.firebaseio.com/v0/showstories.json');
}

HN.get_jobstories = function () {
	return httpGet('https://hacker-news.firebaseio.com/v0/jobstories.json');
}

HN.get_updates = function() {
	return httpGet('https://hacker-news.firebaseio.com/v0/updates.json');
}

console.log(HN.get_updates());

