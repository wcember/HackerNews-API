# HackerNews-API #

## Overview ##
HackerNews-API is a Node.js wrapper for accessing v0 of the official [Hacker News API](https://github.com/HackerNews/API).

## Installation ##

The current production release of HackerNews-API is available through [npm](https://www.npmjs.com/package/hackernews-api):

```
npm install hackernews-api
```

## Usage ##
```javascript
> var hn = require('hackernews-api');
> hn.getItem(8863);
{
  by : "dhouston",
  descendants : 71,
  id : 8863,
  kids : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
  score : 111,
  time : 1175714200,
  title : "My YC app: Dropbox - Throw away your USB drive",
  type : "story",
  url : "http://www.getdropbox.com/u/2/screencast.html"
}
> hn.getUser('wcember');
{ about: 'programmer, actuary, consultant.<p>williamcember.com\ngithub.com&#x2F;
wcember\n@wcember',
  created: 1382846640,
  delay: 0,
  id: 'wcember',
  karma: 4,
  submitted: [ 9106838, 7979403, 6638253 ] }
```

## API ##

**getItem**
* Accepts: A string or number representing an item ID.
* Returns: An object containing the item's properties if the item exists, null otherwise.

**getUser**
* Accepts: A string representing a user.
* Returns: An object containing the user's properties if the user exists, null otherwise.

**getMaxItem**
* Returns: The largest item ID (number).

**getTopStories**
* Returns: An array containing the ID's of up to the 500 top stories.

**getNewStories**
* Returns: An array containing the ID's of up to the 500 latest stories.

**getAskStories**
* Returns: An array containing the ID's of up to the 200 latest [*Ask HN* stories](https://news.ycombinator.com/ask).


**getShowStories**
* Returns: An array containing the ID's of up to the 200 latest [*Show HN* stories](https://news.ycombinator.com/show).

**getJobStories**
* Returns: An array containing the ID's of up to the 200 latest [jobs stories](https://news.ycombinator.com/jobs).

**getUpdates**
* Returns: An object containing the the following attributes:
  * items: The ID's of the latest items changed.
  * profiles: The usernames of the latest profiles changed.

